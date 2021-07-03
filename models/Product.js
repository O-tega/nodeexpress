const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'a product must have a name'],
    },
    product_type: {
      type: String,
      required: [true, 'please include a type of product'],
    },
    product_img: {
      type: String,
      default: 'uploads/product_img/default.jpg',
    },
    description: {
      type: String,
      required: [true, 'a product must have a description'],
    },
    quantity: Number,
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'a product must belong to a category'],
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
