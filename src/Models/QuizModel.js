const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    QuizQuestion: {
        type: String,
        required: true,
    },
    QuizAnswer: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
});

const instructorModel = mongoose.model("quize", QuizSchema);
module.exports = instructorModel;
