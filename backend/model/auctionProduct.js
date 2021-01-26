const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Auction = new Schema({
    title : {
        type: String
    },
    start_time : {
        type: String
    },
    end_time : {
            type: String
    },
    image : {
        type: String
    }

})
const product = mongoose.model('productAuction', Auction)
module.exports = product;