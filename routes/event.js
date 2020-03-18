var express = require('express');
var eventRouter = express.Router();
const createEventHandler =  require('../controllers/userController/createEventHandler ')

eventRouter.post('/create',createEventHandler);

module.exports = eventRouter;

