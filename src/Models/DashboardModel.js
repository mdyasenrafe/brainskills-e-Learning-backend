const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  userPhoneNumber: {
    type: Number,
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
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const DashboardModel = mongoose.model("dashboard", DashboardSchema);
module.exports = DashboardModel;
