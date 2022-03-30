const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({});

const ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;
