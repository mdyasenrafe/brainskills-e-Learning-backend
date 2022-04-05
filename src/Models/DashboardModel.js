const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    userPhoneNumber: {
        type: Number,
        required: true,
    },
    CourseName: {
        type: String,
        required: true,
    },
    coursePrice: {
        type: Number,
        required: true,
    },
    coursePhoto: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
});

const DashboardModel = mongoose.model("dashboard", DashboardSchema);
module.exports = DashboardModel;