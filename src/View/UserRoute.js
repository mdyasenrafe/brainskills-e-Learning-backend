const express = require("express");
const { addAceount } = require("../Controllers/UserControllers");

const router = express.Router();

router.post("/addAceount", addAceount);
router.post("/verifyAceount");

module.exports = router;
