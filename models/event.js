const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    url: {
        type: String
    }
});

const eventSchema = new Schema({
    title: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    startDateTime: {
        type: Date
    },
    endDateTime: {
        type: Date
    },
    pictures: [pictureSchema]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;