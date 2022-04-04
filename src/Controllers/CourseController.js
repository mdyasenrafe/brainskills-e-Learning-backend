const CourseModel = require("../Models/CourseModel");

exports.addCourse = async (req, res) => {
  //   const id = req.id;
  //   const phoneNumber = req.phoneNumber;
  CourseModel.create(req.body, (err, data) => {
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

exports.getCourse = async (req, res) => {
  CourseModel.find({}, (err, data) => {
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

exports.getSingleCourse = async (req, res) => {
  CourseModel.findOne({ _id: req.body.id }, (err, data) => {
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
