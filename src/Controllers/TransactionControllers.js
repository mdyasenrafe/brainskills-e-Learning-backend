const SSLCommerzPayment = require("sslcommerz");
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const CartModel = require("../Models/CartModel");
const TransactionModel = require("../Models/TransactionModal");

const app = express();

app.use(cors());

exports.postPayment = async (req, res) => {
  const paymentData = {
    total_amount: 400,
    currency: "BDT",
    tran_id: uuidv4(),
    // success_url: "http://localhost:5001/payment/success",
    success_url: "https://brainskillapi.herokuapp.com/payment/success",
    fail_url: "https://brainskillapi.herokuapp.com/payment/failure",
    cancel_url: "https://brainskillapi.herokuapp.com/payment/cancel",
    ipn_url: "https://brainskillapi.herokuapp.com/payment/ipn",
    shipping_method: "Courier",
    product_name: "course",
    product_category: "Salary",
    product_profile: "general",
    cus_name: "req.body.userName",
    cus_email: "req.body.userEmail",
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    // cus_phone: "018258746987",
    // cus_fax: "018258746987",
    cus_phone: "req.body.userPhoneNumber",
    cus_fax: "req.body.userPhoneNumber",
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
  console.log(postBody);
  sslcommer.init(paymentData).then(async (data) => {
    TransactionModel.create(postBody, (err, item) => {
      if (err) {
        res.status(400).json({ status: 400, error: true, message: err });
      } else {
        res.status(200).json({
          error: false,
          data: item,
          url: data.GatewayPageURL,
          message: "data fetched succesfully",
        });
        // res.redirect(data.GatewayPageURL);
      }
    });
  });
};

exports.succesPayment = async (req, res) => {
  TransactionModel.updateOne(
    { tran_id: req.body.tran_id },
    {
      $set: {
        val_id: req.body.val_id,
        paymentStatus: "SUCCESS",
      },
    },
    (err, info) => {
      TransactionModel.findOne({ tran_id: req.body.tran_id }, (err, data) => {
        CartModel.deleteMany(
          {
            userId: data.userId,
          },
          (err, item) => {
            console.log(err, item);
            if (err) {
              res.status(400).json({ error: true, message: err });
            }
            console.log(info, data);
          }
        );
      });
    }
  );

  res.redirect(`http://localhost:3000/payment/success/${req.body.tran_id}`);
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
  TransactionModel.find({ _id: req.id }, (err, data) => {
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
