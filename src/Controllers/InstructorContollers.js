const instructorModel = require("../Models/instructorModel");

exports.addInstructor = async (req, res) => {
  instructorModel.create(req.body, (err, data) => {
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

exports.getInstructor = async (req, res) => {
  instructorModel.find({}, (err, data) => {
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
