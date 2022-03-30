const CourseModel = require("../Models/CourseModel");

exports.addCourse = async (req, res) => {
  //   const id = req.id;
  //   const phoneNumber = req.phoneNumber;
  CourseModel.create(req.body, (err, item) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    }
  });
};

exports.getCourse = async (req, res) => {
  //   let pageNo = parseInt(req.query.page);
  //   let size = parseInt(req.query.size);
  //   let query = {};
  //   query.skip = size * pageNo;
  //   query.limit = size;
  //   CourseModel.count({}, function (err, count) {
  // if (err) {
  //   res.status(400).json({ error: true, message: err });
  // } else {
  CourseModel.find({}, {}, query, (err, data) => {
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
        // count: count,
      });
    }
  });
  // }
  //   });
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
