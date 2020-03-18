let eventModel = require('../models/event');


module.exports =  (req, res)=>{
    
    //create an event
    console.log('events endpoint')
    let {title, description,location, startDateTime, endDateTime}= req.body;
    let files = req.files;

    let pictures = [];
    files.forEach((file) => {
        pictures.push({url: file.Location})
    });
    let event = new eventModel({
        title,
        description,
        location,
        startDateTime,
        endDateTime,
        pictures:pictures
    });
    event.save().then((savedEvent)=>{
   
        res.status(200).send(savedEvent)
    }).catch((err)=>{
        console.error(err);
    });
}