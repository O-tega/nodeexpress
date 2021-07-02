const User = require('../models/User')

exports.register = async (req, res, next) =>{
    try{
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
        });

        await user.save();
        res.status(201).json({
            status: 'success',
            data: user,
        });
    }catch(error){
        next(error);
    }
};


exports.login = async(req, res, next)=>{
    try{
        res.status(200).json({
            status: 'success',
            data: req.body,
        });

    }catch(error){
        next(error)
    }
};
