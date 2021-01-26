const express = require('express')
const Auction = require('../model/auctionProduct')
const { cloudinary } =  require('../utils/upload')
const auctionRoute = express.Router()


auctionRoute.get('/', async (req, res, next) => {
    res.send('Working')
})
auctionRoute.post('/sendAuction', async (req, res, next) => {
    try {
    if(req.body.title && req.body.start_time && req.body.end_time){ 
        const image = req.body.image       
        const uploadResponse = await cloudinary.uploader.upload(image)
    
        const data = new Auction({
            title : req.body.title,
            start_time : req.body.start_time,
            end_time : req.body.end_time,
            image : uploadResponse.url
        })
        data.save().then( (data) => {
            return res.status(200).send(data)
        })
        .catch( err => err)
        
    }
    else{
        return res.status(401).send({response: "Form is incomplete"})
    }
}
catch (err) {
    console.log(error)
    res.status(401).send('something went wrong')
}
})

auctionRoute.get('/getProduct', (req, res, next) => {
    Auction.find({}).then(data => res.status(200).json(data))
    .catch(err => err)
})
module.exports = auctionRoute