const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userPhoneNumber: {
    type: String,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "student",
  },
  photoUrl: {
    type: String,
    default: "https://i.ibb.co/MGMchh7/925px-Unknown-person.jpg",
  },
  status: {
    type: String,
    default: "unverified",
  },
  code: {
    type: String,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  purchaseHistories: [
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

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
