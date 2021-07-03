const Product = require('../models/Product');
const product = require('../models/Product');
const User = require('../models/User');


exports.addToCart = async (req, res, next) =>{
    try{
        const productId = req.params.id;
        const product = await Product.findById({ _id: productId});
        const user = req.user;

        let cartItem = await user.addToCart(product);
        let {cart: {items}} = cartItem

        res.status(201).json({
            status: 'success',
            data: items,
            total: items.length,
        });

    }catch(error){
        next(error);
    }
}

exports.removeFromCart = async(req, res, next)=>{
    try{
        const productId = req.params.id;
        const product = await Product.findById({ _id: productId});
        const user = req.user;

        let cartItem = await user.removeFromCart(product);
        let {cart: {items},} = cartItem;

        res.status(201).json({
            status: 'success',
            data: items,
            total: items.length,
        });

    }catch(error){
        next(error)
    }
}

exports.clearCart = async(req, res, next)=>{
    try{
        const user = req.user;

        let cartItem = await user.emptyCart();
        let {cart: {items},} = cartItem;

        res.status(204).json({
            status: 'cleared',
            data: items,
            total: items.length,
        });

    }catch(error){
        next(error)
    }
}