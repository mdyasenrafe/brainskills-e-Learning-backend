const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  userId: {
    type: String,
  },
  userPhoneNumber: {
    type: String,
  },
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  lesson: {
    type: String,
    required: true,
  },
  videoTitle: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

const BookmarkModel = mongoose.model("bookmark", BookmarkSchema);
module.exports = BookmarkModel;
