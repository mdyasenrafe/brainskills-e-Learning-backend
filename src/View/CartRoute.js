const express = require("express");
const {
  addCart,
  getCart,
  getSingleCart,
} = require("../Controllers/CartController");

const router = express.Router();

router.post("/addCart", addCart);
router.get("/getCart", getCart);

module.exports = router;
