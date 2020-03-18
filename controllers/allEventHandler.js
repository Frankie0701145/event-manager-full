let eventModel = require('../models/event');

module.exports = async (req, res)=>{
    try{
        let events = await eventModel.find();
        res.status(200).send(events);
    }catch(err){
        console.error(err);
        res.status(500).send()
    }
}