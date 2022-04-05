const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    UserName: {
        type: String,
        required: true,
    },
    userPhoneNumber: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
    userEmail: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: String,
    },
    Courses: [
        {
            courseTitle: {
                type: String,
            },
            courseId: {
                type: String,
            },
            coursePhoto: {
                type: String,
            },
            coursePrice: {
                type: String,
            },
        },
    ]
});

const PaymentModal = mongoose.model("blogs", PaymentSchema);
module.exports = PaymentModal;
