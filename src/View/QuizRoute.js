const express = require("express");
const { addQuiz, getQuiz } = require("../Controllers/QuizControllers");
const checkLogin = require("../Middleware/CheckLogin");

const router = express.Router();

router.post("/addQuiz", addQuiz);
router.post("/getQuiz", checkLogin, getQuiz);

module.exports = router;
