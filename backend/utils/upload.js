const express = require("express");
const path = require('path')
const cloudinary = require('cloudinary').v2;
require('dotenv/config')
//const { CloudinaryStorage } = require('multer-storage-cloudinary');
//const multer = require('multer')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

/*const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'review',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
});
const parser = multer({ storage: storage });
*/

module.exports = { cloudinary }