const mongoose = require("mongoose")
const { Schema } = mongoose;

const certificateSchema = new Schema({
    image: {
        type: String,
        // required: [true, 'Certificate must have a image']
    },
    name: {
        type: String,
        required: [true, 'Certificate must have a name']
    },
    description: {
        type: String,
        required: [true, 'Certificate must have a description']
    },

})
const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate
