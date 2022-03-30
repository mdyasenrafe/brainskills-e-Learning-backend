const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  instructorName: {
    type: String,
    required: true,
  },
  instructorPhoto: {
    type: String,
    required: true,
  },
  instructorDesignation: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const instructorModel = mongoose.model("instructor", InstructorSchema);
module.exports = instructorModel;
