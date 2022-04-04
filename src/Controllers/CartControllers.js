const CartModel = require("../Models/CartModel");

exports.addCart = async (req, res) => {
  //   const id = req.id;
  CartModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        message: data,
      });
    }
  });
};

exports.getCart = async (req, res) => {
  CartModel.find({}, (err, data) => {
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
  });
};

exports.getSingleCart = async (req, res) => {
  CartModel.findOne({ _id: req.body.id }, (err, data) => {
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
  });
};
