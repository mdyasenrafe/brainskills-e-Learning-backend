const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
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

const VideoModel = mongoose.model("videos", VideoSchema);
module.exports = VideoModel;
