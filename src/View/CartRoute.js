const express = require("express");
const { addCart, getCart } = require("../Controllers/CartControllers");

const router = express.Router();

router.post("/addCart", addCart);
router.get("/getCart", getCart);

module.exports = router;
