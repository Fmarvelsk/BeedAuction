const express = require('express')
const cors =  require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config')

const app = express()
const dburl = process.env.DB_CONNECTION
const auctionRoute = require('./routes/autionRoute')

mongoose.connect(dburl, {useNewUrlParser: true,useUnifiedTopology: true})
.then( () => {
    console.log(`Connected to Database`)
})
.catch( err => console.log('Error connecting to Database', err))

app.use(cors())
app.use(bodyParser.urlencoded({limit : '1mb', extended: true}))
app.use(bodyParser.json({limit:'1mb'}))

app.use('/', auctionRoute)

const port = process.env.PORT || 4444

app.listen(port, () => {
    console.log(`listening to ${port}`)
})

module.exports = app