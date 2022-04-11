const quizModel = require("../Models/QuizModel.js");

exports.addQuiz = async (req, res) => {
  quizModel.create(req.body, (err, data) => {
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

exports.getQuiz = async (req, res) => {
  quizModel.count({ courseId: req.body?.courseId }, (err, count) => {
    quizModel.find({ courseId: req.body?.courseId }, (err, data) => {
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
  });
};
