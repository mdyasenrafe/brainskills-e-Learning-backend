const SSLCommerzPayment = require("sslcommerz");
const { v4: uuidv4 } = require("uuid");
const CartModel = require("../Models/CartModel");
const TransactionModel = require("../Models/TransactionModal");
const transactionModel = require("../Models/TransactionModal");

app.use(cors());
exports.postPayment = async (req, res) => {
  const paymentData = {
    total_amount: req.body.amount,
    currency: "BDT",
    tran_id: uuidv4(),
    success_url: "http://localhost:5000/payment/success",
    fail_url: "http://localhost:5000/payment/failure",
    cancel_url: "http://localhost:5000/payment/cancel",
    ipn_url: "http://localhost:5000/payment/ipn",
    shipping_method: "Courier",
    product_name: "course",
    product_category: "Salary",
    product_profile: "general",
    cus_name: req.body.userName,
    cus_email: req.body.userEmail,
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    // cus_phone: "018258746987",
    // cus_fax: "018258746987",
    cus_phone: req.body.userPhoneNumber,
    cus_fax: req.body.userPhoneNumber,
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
    multi_card_name: "mastercard",
    paymentStatus: "pending",
  };

  const sslcommer = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASSWORD,
    false
  );

  let postBody = {
    userName: paymentData.cus_name,
    userEmail: paymentData.cus_email,
    userPhoneNumber: paymentData.userPhoneNumber,
    userId: req.id,
    totalAmount: paymentData.total_amount,
    tran_id: paymentData.tran_id,
    paymentStatus: paymentData?.paymentStatus,
    courses: req.body.courses,
  };

  sslcommer.init(paymentData).then(async (data) => {
    transactionModel.create(postBody, (err, item) => {
      if (err) {
        res.status(400).json({ status: 400, error: true, message: err });
      } else {
        res.status(200).json({
          error: false,
          data: item,
          url: data.GatewayPageURL,
          message: "data fetched succesfully",
        });
      }
    });
  });
};

exports.succesPayment = async (req, res) => {
  console.log(req.body);
  transactionModel.updateOne(
    { tran_id: req.body.tran_id },
    {
      $set: {
        val_id: req.body.val_id,
        paymentStatus: "SUCCESS",
      },
    },
    (err, info) => {
      console.log(err, info);
      transactionModel.findOne({ tran_id: req.body.tran_id }, (err, data) => {
        console.log(data, err);
        let updateBody = {
          studentMonth: 0,
          studentTotalAmount: 0,
          due: data.remainingMonth,
          paid: data?.paidHistory + data?.studentMonth,
          totalDueAmount: data?.remainingMonth * data.totalAmount,
        };
        CartModel.deleteMany(
          {
            _id: u,
          },
          (err, item) => {
            console.log(err, item);
            if (err) {
              res.status(400).json({ status: 400, error: true, message: err });
            }
          }
        );
      });
    }
  );

  res.redirect(`http://localhost:3000/payment/success/${req.body.tran_id}`);
};
// get success payment data
exports.getSuccesPayment = async (req, res) => {
  const query = req.params.id;
  TransactionModel.findOne(
    {
      tran_id: query,
    },

    (err, data) => {
      if (err) {
        res.status(400).json({ status: 400, error: true, message: err });
      } else {
        if (data) {
          res.status(200).json({
            status: 200,
            error: false,
            message: "fetch successfully",
            data: data,
          });
        }
      }
    }
  );
};

exports.FailPayment = async (req, res) => {
  console.log(req.body);
  TransactionModel.updateOne(
    { tran_id: req.body.tran_id },
    {
      $set: {
        paymentStatus: req?.body?.status,
        val_id: req.body.val_id,
      },
    },
    (err, data) => {}
  );
  res.redirect(`http://localhost:3000/payment/failure/${req.body.tran_id}`);
};

exports.canceelPayment = async (req, res) => {
  console.log(req.body);
  TransactionModel.updateOne(
    { tran_id: req.body.tran_id },
    {
      $set: {
        paymentStatus: req?.body?.status,
        val_id: req.body.val_id,
      },
    },
    (err, data) => {
      console.log(data);
    }
  );
  res.redirect(`http://localhost:3000`);
};

// transction history
exports.TransactionHistory = async (req, res) => {
  transactionModel.find({ _id: req.id }, (err, data) => {
    if (err) {
      res.status(400).json({ status: 400, error: true, message: err });
    } else {
      console.log(data.length);
      if (data.length === 0) {
        res
          .status(400)
          .json({ status: 400, error: true, message: "Not Found" });
      } else {
        res.status(200).json({
          error: false,
          data: data,
          message: "data fetched succesfully",
        });
      }
    }
  });
};