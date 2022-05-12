const express = require("express");
const {
  addBlog,
  getBlog,
  getSingleBlog,
} = require("../Controllers/BlogControllers");

const router = express.Router();

router.post("/addBlog", addBlog);
router.get("/getBlog", getBlog);
router.post("/getSingleBlog", getSingleBlog);

module.exports = router;
