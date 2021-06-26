const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A category must have a title 😡😡😒']
    }
},
{timestamp: true});

const Category = mongoose.model('Category', categorySchema);


module.exports = Category;