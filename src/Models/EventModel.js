const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: {
    type: String,
    require: true,
  },
  eventType: {
    type: String,
    require: true,
  },
  // date
  eventDate: {
    type: Date,
    require: true,
  },
  // trying deploy 2
  // trying deploy
  eventLink: {
    type: String,
  },
  speaker: {
    type: String,
    require: true,
  },
});

const EventModel = mongoose.model("event", EventSchema);
module.exports = EventModel;
