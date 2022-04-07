const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  userPhoneNumber: {
    type: String,
  },
  tran_id: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  totalAmount: {
    type: String,
  },
  paymentStatus: {
    type: String,
  },
  courses: [
    {
      courseName: {
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
