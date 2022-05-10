const express = require("express");
const { addCart, getCart } = require("../Controllers/CartControllers");
const checkLogin = require("../Middleware/CheckLogin");

const router = express.Router();

router.post("/addCart", checkLogin, addCart);
router.get("/getCart", checkLogin, getCart);

module.exports = router;
