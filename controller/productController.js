const multer = require('multer')
const Product = require('../models/Product');



const storage = multer.diskstorage({
  destination (req, file, callback) =>{},
  filename: (req, file, callback)=>{
    
  },
})


exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({ _id: id });

    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

//TODO: create update method for db
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

//TODO: create delete method for db
exports.deleteProduct = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: 'deleted',
  });
};
