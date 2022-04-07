const express = require("express");
const {
  postPayment,
  succesPayment,
  FailPayment,
  TransactionHistory,
  getSuccesPayment,
} = require("../Controllers/transactionControllers");
const router = express.Router();

router.post("/init", postPayment);
router.post("/success", succesPayment);
router.post("/failure", FailPayment);
router.post("/transaction-history", TransactionHistory);
router.post("/cancel", FailPayment);

module.exports = router;
