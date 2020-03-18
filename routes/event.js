var express = require('express');
var eventRouter = express.Router();
const createEventHandler =  require('../controllers/createEventHandler ');
const allEventHandler = require('../controllers/allEventHandler');
let multer = require('multer');
let aws = require('aws-sdk');
let multerSharpS3 = require("multer-sharp-s3");
require('dotenv').config();

let endpoint = 'nyc3.digitaloceanspaces.com'

const s3 = new aws.S3({
    endpoint: endpoint,
    secretAccessKey: process.env.SPACE_ACCESS_SECRET,
    accessKeyId: process.env.SPACE_ACCESS_KEY
});


const uploadPowerPoint = multer({
    storage: multerSharpS3({
        s3: s3,
        Bucket: process.env.BUCKET_NAME,
        ACL: 'public-read',
        Key: function (request, file, cb) {  
            console.log('uploading')
            cb(null, file.originalname);   
        },
        resize: {
            width: 400,
            height: 400
          },
    })  
});


eventRouter.post('/create', uploadPowerPoint.array('pictures', 4),createEventHandler);

eventRouter.get('/all', allEventHandler);

module.exports = eventRouter;

