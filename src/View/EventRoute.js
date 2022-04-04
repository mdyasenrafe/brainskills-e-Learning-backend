const express = require("express");

const { addEvent, getEvent } = require("../Controllers/EventControllers");

const router = express.Router();

router.post("/addEvent", addEvent)
router.get("/getEvent", getEvent)

module.exports = router;