const express = require("express");
const {
  addBookmark,
  GetBookmark,
} = require("../Controllers/BookmarkControllers");
const checkLogin = require("../Middleware/CheckLogin");

const router = express.Router();

router.post("/addBookmark", checkLogin, addBookmark);
router.get("/getBookmark", checkLogin, GetBookmark);

module.exports = router;
