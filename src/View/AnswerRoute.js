const express = require("express");
const { addAnswer, getAnswer } = require("../Controllers/AnswerControllers");

const router = express.Router();

router.post("/addAnswer", addAnswer);
router.get("/getAnswer", getAnswer);

module.exports = router;
