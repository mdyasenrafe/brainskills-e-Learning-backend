const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    courseId: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },

    quizAnswer: [
        {
            quizTitle: {
                type: String,
            },
            quizAnswer: {
                type: String,
            },
        },
    ],
    createAt: {
        type: Date,
        default: new Date(),
    },

});

const AnswerModel = mongoose.model("answer", AnswerSchema);
module.exports = AnswerModel;
