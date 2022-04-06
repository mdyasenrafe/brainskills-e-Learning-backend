const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPhoneNumber: {
    type: String,
    required: true,
  },

  userEmail: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
  },
  paymentStatus: {
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
  ],
});

const TransactionModel = mongoose.model("transaction", TransactionSchema);
module.exports = TransactionModel;
