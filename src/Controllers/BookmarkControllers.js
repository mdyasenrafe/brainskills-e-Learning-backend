const BookmarkModel = require("../Models/BookmarkModel");

exports.addBookmark = async (req, res) => {
  //   const id = req.id;
  BookmarkModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "data fetch succesfully",
      });
    }
  });
};

exports.GetBookmark = async (req, res) => {
  BookmarkModel.find(
    { userPhoneNumber: req.userPhoneNumber, userId: req.id },
    (err, data) => {
      if (err) {
        res.status(400).json({
          error: true,
          message: err,
        });
      } else {
        res.status(200).json({
          error: false,
          data: data,
          message: "data successfully",
        });
      }
    }
  );
};
