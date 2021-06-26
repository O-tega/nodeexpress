// const mongoose = require('mongoose');


// const productSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: [true, 'A product must have a name'],
//     },
//     product_type:{
//         type: String,
//         required: [true, 'please include a type of product']
//     },
//     product_img:{
//         type: String,
//         default: 'uploads/product_img/default.jpg'
//     },
//     description:{
//         type: String,

//     },
//     //can also be written as description: String;
//     quantity: Number, 
//     category: {
//         type: mongoose.Schema.ObjectId,
//         ref: 'Category',
//         required: 'A product must have a category'
//     }
// })

// const Product = mongoose.model('product', productSchema);

// module.exports = Product;