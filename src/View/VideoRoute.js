const express = require("express");
const { addVideo, getVideo } = require("../Controllers/VideoControllers");
const checkLogin = require("../Middleware/CheckLogin");

const router = express.Router();

router.post("/addQuiz", addVideo);
router.post("/getQuiz", checkLogin, getVideo);

module.exports = router;
