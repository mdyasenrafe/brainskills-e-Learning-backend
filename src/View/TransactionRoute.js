const express = require("express");
const {
  postPayment,
  succesPayment,
  FailPayment,
  TransactionHistory,
  getSuccesPayment,
} = require("../Controllers/transactionControllers");
const checkLogin = require("../Middleware/CheckLogin");
const router = express.Router();

router.post("/init", checkLogin, postPayment);
router.post("/success", checkLogin, succesPayment);
router.post("/failure", checkLogin, FailPayment);
router.post("/transaction-history", checkLogin, TransactionHistory);
router.post("/cancel", checkLogin, FailPayment);

module.exports = router;
