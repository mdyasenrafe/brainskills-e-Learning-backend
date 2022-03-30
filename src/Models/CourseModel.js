const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  CoursePhoto: {
    type: String,
    required: true,
  },
  coursePrice: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  courseShortDescription: {
    type: String,
  },
  courseLongDescription: {
    type: String,
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

const CourseModel = mongoose.model("courses", CourseSchema);
module.exports = CourseModel;
