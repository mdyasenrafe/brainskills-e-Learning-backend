const express = require("express");
<<<<<<< HEAD
const {
    addQuiz,
    getQuiz,
} = require("../Controllers/QuizControllers");
=======
const { addQuiz, getQuiz } = require("../Controllers/QuizControllers");
const checkLogin = require("../Middleware/CheckLogin");
>>>>>>> 1d52531abd82499e5643cc435e662b38711c5d16

const router = express.Router();

router.post("/addQuiz", addQuiz);
<<<<<<< HEAD
router.get("/getQuiz", getQuiz);
=======
router.post("/getQuiz", checkLogin, getQuiz);
>>>>>>> 1d52531abd82499e5643cc435e662b38711c5d16

module.exports = router;
