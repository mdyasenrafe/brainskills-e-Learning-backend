const express = require("express");
const {
    addQuiz,
    getQuiz,
} = require("../Controllers/QuizControllers");

const router = express.Router();

router.post("/addQuiz", addQuiz);
router.get("/getQuiz", getQuiz);

module.exports = router;
