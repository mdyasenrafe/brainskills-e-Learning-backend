const BlogModel = require("../Models/BlogModel");

exports.addBlog = async (req, res) => {
  // create
  BlogModel.create(req.body, (err, data) => {
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
      ``;
    }
  });
};

exports.getBlog = async (req, res) => {
  BlogModel.find({}, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "data fetch successfully",
      });
    }
  });
};
exports.getSingleBlog = async (req, res) => {
  BlogModel.findOne({ _id: req?.body?.id }, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "data fetch successfully",
      });
    }
  });
};
