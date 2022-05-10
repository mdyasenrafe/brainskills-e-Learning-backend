const EventModel = require("../Models/EventModel");

// add event for model
exports.addEvent = async (req, res) => {
  EventModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: err,
      });
    } else {
      res.status(200).json({
        error: false,
        data: data,
        message: "Event add Successfully",
      });
    }
  });
};

// get event
exports.getEvent = async (req, res) => {
  EventModel.find({}, (err, data) => {
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
// get event for sigle
exports.getEvent = async (req, res) => {
  EventModel.find({ id: req.body?._id }, (err, data) => {
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
