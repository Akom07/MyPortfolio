if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
///////// packages /////////
const express = require('express')
const path = require('path')
const mongoose = require('mongoose');

const app = express()

///////// Database /////////

mongoose.connect('mongodb://127.0.0.1:27017/mySite')
  .then(() => { console.log('conncted') })
  .catch(e => { console.log(e) })



///////// Use /////////
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

///////// Set /////////
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

///////// Routes /////////
const home = require('./routes/home')
app.use('/', home)

const skills = require('./routes/skills')
app.use('/skills', skills)

const certificatespage = require('./routes/certificates');
app.use('/certificates', certificatespage)




app.listen(process.env.port, () => {
  console.log('on port', process.env.port)
})