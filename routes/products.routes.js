const express = require('express');
const Product = require('../models/Products');
const router = express.Router();

//get
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render('products/list.ejs', {
      title: 'Products',
      products,
      server_url: req.server_url,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/create', (req, res, next) => {
  res.render('products/create.ejs', {
    title: 'Create New Products',
    server_url: req.server_url,
  });
});

router.post('/create', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.redirect('/product');
  } catch (error) {
    next(error);
  }
});

//edit
router.get('/edit/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    res.render('products/edit', {
      title: 'Edit Product',
      product,
      server_url: req.server_url,
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/edit', async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.body.productId },
      req.body,
      {
        new: true,
      }
    );
    res.redirect(`/product/${product._id}`);
  } catch (error) {
    next(error);
  }
});

//delete
router.delete('/delete', (req, res, next) => {
  res.redirect('/product');
});

//get single product
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    res.render('products/single', {
      title: 'Edit Product',
      product,
      server_url: req.server_url,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
