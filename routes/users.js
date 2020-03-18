var express = require('express');
var userRouter = express.Router();
const loginHandler = require('../controllers/loginHandler');
/* GET users listing. */
userRouter.post('/login', loginHandler);

module.exports = userRouter;
