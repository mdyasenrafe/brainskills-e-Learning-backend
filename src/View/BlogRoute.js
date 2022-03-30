const express = require("express");
const { addBlog, getBlog } = require("../Controllers/BlogControllers");

const router = express.Router();

router.post("/addBlog", addBlog);
router.get("/getBlog", getBlog);

module.exports = router;
