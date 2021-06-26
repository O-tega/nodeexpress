const Category = require('../models/Catergory');
const Product = require('../models/Product');

exports.create = async (req, res, next) =>{
    try{
        const category = await Category.create(req.body); 
        res.status(201).json({
            status: 'success',
            data: req.body,
        })
    }
    catch(error){
        next(error)

    }
}

exports.getAllCategory = async (req, res, next) =>{
    try{
        const category = await Category.find(); 
        res.status(201).json({
            status: 'success',
            data: category,
        })
    }
    catch(error){
        next(error)

    }
}

exports.getCategoryProduct = async (req, res, next) =>{
    try{
        const category = await Product.find({category: req.params.id}); 
        res.status(201).json({
            status: 'success',
            data: category,
        })
    }
    catch(error){
        next(error)

    }
}