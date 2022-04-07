const express = require("express");
const { getDashboard } = require("../Controllers/DashboardControllers");
const checkLogin = require("../Middleware/CheckLogin");

const router = express.Router();

router.get("/getDashboard", checkLogin, getDashboard);

module.exports = router;
