const VideoModel = require("../Models/VideoModel");

exports.addVideo = async (req, res) => {
  VideoModel.create(req.body, (err, data) => {
    console.log(req.body);
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

exports.getVideo = async (req, res) => {
  VideoModel.find({ courseId: req.body?.courseId }, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        count: count,
        message: "data fetch successfully",
      });
    }
  });
};
