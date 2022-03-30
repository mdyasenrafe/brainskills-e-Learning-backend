const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    userImage: {
        type: String,
        require: true
    },
    userDesignation: {
        type: String,
        require: true
    },
    userDescription: {
        type: String,
        require: true
    },
    userCategory: {
        type: String,
        require: true
    },
    userRating: {
        type: Number,
        require: true
    },
    CreatAt: {
        type: Date,
        default: new Date()
    }
});

const ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;
