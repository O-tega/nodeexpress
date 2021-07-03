const Category = require('../models/Category');
const Product = require('../models/Product');
const ApiError = require('../utils/apiError');

exports.create = async (req, res, next) => {
  try {
    const categoryExists = await Category.findOne({title: req.body.title});

    
    if (categoryExists) {
      return next(new ApiError('category already exist', 400))
    }
    
    const category = await Category.create(req.body);
    res.status(201).json({
      status: 'success',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllCategory = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.status(201).json({
      status: 'success',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCategoryProduct = async (req, res, next) => {
  try {
    const category = await Product.find().populate({
      path: 'category',
      select: ' title _id',
      exclude: 'createdAt updatedAt',
    });
    res.status(201).json({
      status: 'success',
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
