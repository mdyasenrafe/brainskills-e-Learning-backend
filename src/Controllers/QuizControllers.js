<<<<<<< HEAD
const QuizModel = require("../Models/QuizModel");

exports.addQuiz = async (req, res) => {
  QuizModel.create(req.body, (err, data) => {
=======
const quizModel = require("../Models/QuizModel.js");

exports.addQuiz = async (req, res) => {
  quizModel.create(req.body, (err, data) => {
>>>>>>> 1d52531abd82499e5643cc435e662b38711c5d16
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
<<<<<<< HEAD
  QuizModel.find({}, (err, data) => {
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
=======
  let pageNo = parseInt(req.query.page);
  let size = parseInt(req.query.size);
  let query = {};
  query.skip = size * pageNo;
  query.limit = size;

  quizModel.count(
    { courseId: req.body?.courseId, lesson: req.body.lesson },
    (err, count) => {
      quizModel.find(
        { courseId: req.body?.courseId, lesson: req.body.lesson },
        query,
        (err, data) => {
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
              count: count,
            });
          }
        }
      );
    }
  );
>>>>>>> 1d52531abd82499e5643cc435e662b38711c5d16
};
