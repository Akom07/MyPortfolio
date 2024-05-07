const mongoose = require('mongoose');
const Certificate = require('./models/certificatesModel')
///////// Database /////////

mongoose.connect('mongodb://127.0.0.1:27017/mySite')
    .then(() => { console.log('conncted') })
    .catch(e => { console.log(e) })



const a = [

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

    {
        image: './img/certificate.jpg',
        name: 'Fake',
        description: 'Fake'
    },

]

Certificate.insertMany(a)
    .then(p => { console.log(a) })
    .catch(e => { console.log(e) })





// const p = new Certificate({
//     image: './img/certificate.jpg',
//     name: 'Fake',
//     description: 'Fake'

// })
// p.save()
//     .then(p => { console.log(p) })
//     .catch(e => { console.log(e) })