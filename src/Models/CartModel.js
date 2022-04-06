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
  courseId: {
    type: Number,
    required: true,
  },
  courseName: {
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

const CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;
