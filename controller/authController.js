const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const ApiError = require('../utils/apiError');
const { registerValidation } = require('../utils/validation');

//TODO: document function
const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

exports.register = async (req, res, next) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) {
      return next(new ApiError(error, 400));
    }

    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return next(new ApiError('user has already been taken', 400));
    }
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
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    //check if user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(
        new ApiError(
          'the user with this information does not exist please register',
          400
        )
      );
    }

    //check for correct password
    let correctPassword = await user.correctPassword(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      return next(new ApiError('password incorrect', 400));
    }

    user.password = undefined;
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      data: user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

exports.Authorization = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ApiError('please login to gain access', 401));
    }

    let decode = await jwt.verify(token, process.env.JWT_SECRET);

    let user = await User.findById({ _id: decode.id });

    if (!user) {
      return next(new ApiError('unauthorized access', 401));
    }

    // user.password = undefined;

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

/**
 * 
 * @param  {...any} roles 
 * @returns 
 * @description restricts any role passed into the middleware
 */

exports.roles = (...roles) => {
  console.log(roles);
  return (req, res, next) => {
    if (roles.includes(req.user.roles)) {
      return next(new ApiError('Forbidden', 403));
    }
    return next();
  };
};
