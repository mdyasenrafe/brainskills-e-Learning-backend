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
  let pageNo = parseInt(req.query.page);
  let size = parseInt(req.query.size);
  let query = {};
  query.skip = size * pageNo;
  query.limit = size;

  quizModel.count({ courseId: req.body?.courseId }, (err, count) => {
    quizModel.find({ courseId: req.body?.courseId }, query, (err, data) => {
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
