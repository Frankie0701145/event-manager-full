const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const pictureSchema = new Schema({
    url: {
        type: String,
        required: true
    }
});

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDateTime: {
        type: Date,
        required: true
    },
    endDateTime: {
        type: Date,
        required: true
    },
    pictures: [pictureSchema]
},{timestamps: true});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;