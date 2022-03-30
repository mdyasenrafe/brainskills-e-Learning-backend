const express = require("express");

const {
    addReview,
    getReview
} = require("../Controllers/ReviewControllers");

const router = express.Router();

router.post("/addReview", addReview)
router.get("/getReview", getReview)

module.exports = router;