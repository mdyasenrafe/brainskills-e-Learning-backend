const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// file
const courseRoute = require("./src/View/CourseRoute");
const instructorRoute = require("./src/View/InstructorRoute");
const blogRoute = require("./src/View/BlogRoute");
const reviewRoute = require("./src/View/ReviewRoute");
const eventRoute = require("./src/View/EventRoute");
const userRoute = require("./src/View/UserRoute");
const cartRoute = require("./src/View/CartRoute");
const check = require("./src/View/CheckRoute");

require("dotenv").config();
const port = process.env.PORT || 5000;

// file call
const app = express();

// middle wares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ivs2y.mongodb.net/brainSkill?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Mongodb connected....");
  })
  .catch((err) => console.log(err.message));

// routing
app.use("/course", courseRoute);
app.use("/instructor", instructorRoute);
app.use("/blog", blogRoute);
app.use("/review", reviewRoute);
app.use("/event", eventRoute);
app.use("/signin", userRoute);
app.use("/cart", cartRoute);
app.use("/check", check);

// cors error resolve
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers : Origin, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// first route
app.get("/", (req, res) => {
  res.send("This is Brain skill server");
});

// Undefined Route Implement
app.use((req, res, next) => {
  res.status(404).json({ error: true, message: "Not Found this route" });
});

//   test
app.listen(port, () => {
  console.log("successfully run by port", port);
});
