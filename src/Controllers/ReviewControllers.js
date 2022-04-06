const ReviewModel = require("../Models/ReviewModel.js");

exports.addReview = async (req, res) => {
  ReviewModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "Thank you for Feedback",
      });
    }
  });
};

// get review

exports.getReview = async (req, res) => {
  ReviewModel.find({}, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "Data fetch successfully",
      });
    }
  });
};
exports.getReview = async (req, res) => {
  ReviewModel.find({}, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "Data fetch successfully",
      });
    }
  });
};
