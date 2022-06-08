const { Schema, model } = require('mongoose');

const homesSchema = Schema({
    //
    houseType: {
        type: String,
        trim: true,
        require: [true, 'specify a house type, e.g bungalow'],
    },

    rooms: {
        type: Number,
        require: [true, 'input number of rooms'],
    },

    toilet: {
        type: Number,
    },

    price: {
        type: Number,
        require: [true, 'provide price for the house'],
    },

    region: {
        type: String,
        require: [true, 'kindly provide a region'],
    },
    photos: [
        {
            type: String,
            require: [true, 'kindly provide a photo'],
        },
    ],

    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Homes', homesSchema);
