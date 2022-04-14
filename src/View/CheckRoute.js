const express = require("express");

const router = express.Router();

router.get("/checkGet", async (req, res) => {
  res.send("This is Get Method");
});
router.post("/postGet", async (req, res) => {
  res.send("This is Post Method");
});

module.exports = router;
