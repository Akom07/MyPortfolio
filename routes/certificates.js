const express = require('express');
const router = express.Router()
const Certificate = require('../models/certificatesModel.js')


router.get('/', async (req, res) => {
    const certificate = await Certificate.find({})
    res.render('certificates.ejs', { certificate })
})



module.exports = router;
