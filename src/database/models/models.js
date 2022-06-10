const { Schema, model } = require('mongoose');

const homesSchema = Schema({
    houseType: {
        type: String,
        trim: true,
        required: [true, 'specify a house type, e.g bungalow'],
    },

    rooms: {
        type: Number,
        required: [true, 'input number of rooms'],
    },

    toilet: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: [true, 'provide price for the house'],
    },

    region: {
        type: String,
        required: [true, 'kindly provide a region'],
    },

    photos: [
        {
            type: String,
            required: [true, 'kindly provide a photo'],
        },
    ],

    status: {
        type: String,
        enum: ['Rent', 'sell', 'Buy'],
        required: true,
    },

    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Homes', homesSchema);
