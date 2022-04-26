const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    isQuiz: {
        default: true,
    },
    AnswersText: [
        {
            Answers: {
                type: String,
                required: true,
            },
            isCorrect: {
                default: false,
            }
        },
    ],
    createAt: {
        type: Date,
        default: new Date(),
    },
});

const quizModel = mongoose.model("quiz", QuizSchema);
module.exports = quizModel;
