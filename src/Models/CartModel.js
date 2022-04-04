const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
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
        type: Boolean,
        required: true,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
    instructorDetail: [
        {
            instructorName: {
                type: String,
            },
            instructorPhoto: {
                type: String,
            },
            instructorDesignation: {
                type: String,
            },
            instructorDetail: {
                type: String,
            },
        },
    ],
});

const CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;