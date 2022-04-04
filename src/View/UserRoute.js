const express = require("express");
const {
  signUpUser,
  updateUser,
  loginUser,
} = require("../Controllers/UserControllers");

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/verifyAceount", updateUser);
router.post("/signin", loginUser);

module.exports = router;
