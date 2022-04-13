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
  },
  courseName: {
    type: String,
  },
  lesson: {
    type: String,
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
