const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventName: {
        type: String,
        require: true
    },
    eventType: {
        type: String,
        require: true
    },
    eventDescription: {
        type: String,
        require: true
    },
    eventDate: {
        type: Date,
        require: true
    }

})


const EventModel = mongoose.model("event", EventSchema);
module.exports = EventModel;