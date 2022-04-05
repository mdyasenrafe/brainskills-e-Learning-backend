const express = require("express");
const {
  signUpUser,
  updateUser,
  loginUser,
  getUser,
} = require("../Controllers/UserControllers");
const checkLogin = require("../Middleware/CheckLogin");

const router = express.Router();



router.post("/signup", signUpUser);
router.post("/verifyAceount", updateUser);
router.post("/signin", loginUser);
router.get("/getUser", checkLogin, getUser);

module.exports = router;
