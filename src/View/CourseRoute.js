const express = require("express");
const {
  addCourse,
  getCourse,
  getSingleCourse,
} = require("../Controllers/CourseController");

const router = express.Router();

router.post("/addCourse", addCourse);
router.get("/getCourse", getCourse);
router.post("/courseDetails", getSingleCourse);

module.exports = router;
