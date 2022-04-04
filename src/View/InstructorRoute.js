const express = require("express");
const {
  addInstructor,
  getInstructor,
} = require("../Controllers/InstructorContollers");

const router = express.Router();

router.post("/addInstuctor", addInstructor);
router.get("/getInstructor", getInstructor);

module.exports = router;
