const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../Controllers/MessageControllers");
const { protect } = require("../Middleware/CheckLogin");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;