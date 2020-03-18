let eventModel = require('../models/event');


module.exports =  (req, res)=>{
    
    //create an event
    console.log('events endpoint')
    let {title, description,location}= req.body;
    let files = req.files;
    console.log(req.body);
    console.log(req.files)

    eventModel.create({title, description, location}).then((event)=>{
        files.forEach((file) => {
            event.pictures.push({url: file.Location})
        });
        event.save().then((savedEvent)=>{
            console.log(savedEvent)
            res.status(200).send(savedEvent)
        })
    }).catch((err)=>{
        console.error(err)
    });   
}