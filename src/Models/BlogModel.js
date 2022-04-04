const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogPhoto: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  categroy: {
    type: String,
  },
  blogShortDescription: {
    type: String,
    required: true,
  },
  blogLongdescription: {
    type: String,
  },
});

const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;
