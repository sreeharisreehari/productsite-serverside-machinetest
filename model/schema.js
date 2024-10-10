const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        // required: true, 
    },
    description: {
        type: String,
        // required: true,
    },
    price: {
        type: Number, 
        // required: true,
    },
    modelNumber: {
        type: String,
        // required: true,
    },
   
});

const schemas = mongoose.model("products", schema);

module.exports = schemas;

