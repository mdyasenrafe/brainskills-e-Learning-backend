const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");

exports.signUpUser = async (req, res) => {
  console.log(req.body);

  let hashedPassword;

  let code;

  if (req.body?.userPassword) {
    code = Math.floor(100000 + Math.random() * 900000);
    let newPassword = req.body.userPassword.toString();
    hashedPassword = await bcrypt?.hash(newPassword, 10);
  }

  let postBody = {
    userName: req.body.userName,
    userPhoneNumber: req.body.userPhoneNumber,
    userPassword: hashedPassword,
    code: code,
    userEmail: req.body.userEmail,
    createAt: new Date(),
  };

  UserModel.find({ userPhoneNumber: req.body.userPhoneNumber }, (err, item) => {
    if (item.length === 0) {
      UserModel.create(postBody, async (err, data) => {
        if (err) {
          res.status(400).json({ error: true, message: err });
        } else {
          res.status(200).json({
            error: false,
            message: "created successfully",
            data: data,
          });
        }
      });
    } else {
      res
        .status(400)
        .json({ error: true, message: "Already added in this phonenumber" });
    }
  });
};

exports.updateUser = async (req, res) => {
  let updatebody = {
    status: "verified",
    code: "",
  };
  UserModel.findOne(
    {
      userEmail: req.body.userEmail,
      userPhoneNumber: req.body.userPhoneNumber,
    },
    (err, item) => {
      console.log(item);
      if (item?.userPhoneNumber) {
        // const isValidCode = await bcrypt.compare(req.body.code, item.code);
        if (item.code === req.body.code) {
          UserModel.updateOne(
            { userPhoneNumber: item?.userPhoneNumber, _id: item?._id },
            { $set: updatebody },
            (err, data) => {
              if (data?.modifiedCount > 0) {
                // generate token
                const token = jwt.sign(
                  {
                    userPhoneNumber: req?.body.userPhoneNumber,
                    id: item?._id,
                  },
                  process.env.JWT_SECRET,
                  {
                    expiresIn: "7d",
                  }
                );
                res.status(200).json({
                  error: false,
                  token: token,
                  message: "login successfully",
                });
              }
            }
          );
        } else {
          res.status(400).json({ error: true, message: "Wrong Code" });
        }
      } else {
        res.status(400).json({ error: true, message: "Nothing Found" });
      }
    }
  );
};

exports.loginUser = async (req, res) => {
  UserModel.findOne(
    { userPhoneNumber: req.body.userPhoneNumber },
    async (err, item) => {
      if (item?.userPhoneNumber) {
        const ValidPassword = await bcrypt.compare(
          req.body.userPassword,
          item.userPassword
        );
        if (ValidPassword) {
          if (item.status === "verified") {
            // generate token
            const token = jwt.sign(
              {
                userPhoneNumber: req?.body.userPhoneNumber,
                id: item?._id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "7d",
              }
            );
            res.status(200).json({
              error: false,
              data: item,
              token: token,
              message: "login successfully",
            });
          } else {
            let code = Math.floor(100000 + Math.random() * 900000);
            let updatebody = {
              code: code,
            };
            UserModel.updateOne(
              { userPhoneNumber: item?.userPhoneNumber, _id: item?._id },
              { $set: updatebody },
              (err, data) => {
                if (err) {
                  res
                    .status(400)
                    .json({ error: true, message: "Nothing Found" });
                } else {
                  if (data?.modifiedCount > 0) {
                    res.status(400).json({
                      error: true,
                      link: `verify/${item.id} `,
                      email: item?.email,
                      userPhoneNumber: item?.userPhoneNumber,
                      code: code,
                    });
                  } else {
                    res.status(400).json({
                      error: true,
                      message: "something went wrong try agian",
                    });
                  }
                }
              }
            );
          }
        } else {
          res
            .status(400)
            .json({ error: true, message: "wrong authentication" });
        }
      } else {
        res.status(400).json({ error: true, message: "Nothing Found" });
      }
    }
  );
};
// get user
exports.getUser = async (req, res) => {
  UserModel.findOne(
    { userPhoneNumber: req.userPhoneNumber, _id: req.id },
    async (err, item) => {
      if (item?.userPhoneNumber) {
        res.status(400).json({
          error: false,
          data: item,
          message: "data fetch successfully",
        });
      } else {
        res.status(400).json({ error: true, message: "Nothing Found" });
      }
    }
  );
};
