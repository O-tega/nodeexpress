const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please include your name'],
    },
    email: {
      type: String,
      required: [true, 'please provide an email'],
      unique: [true, 'user with the given email already exist'],
    },

    password: {
      type: String,
      min: 6,
      max: 12,
      required: [true, 'password must be inlcuded'],
    },

    role: {
      type: String,
      enum: ['admin', 'user', 'cashier'],
      default: 'user',
    },
    cart: {
      items: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: [true, 'A cart must have a product'],
          },
          quantity:{
            type: Number,
            required: [true, 'A cart must have a quantity'],
          },
        }
      ]
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//database middleware
Userschema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

//creating a database method
Userschema.methods.correctPassword = async function (
  inputPassword,
  userPassword
) {
  return bcrypt.compare(inputPassword, userPassword);
};

// cart methods,
Userschema.methods.addToCart = async function (product){
  //check if product exist in the catch
  const cartItemIndex = this.cart.items.findIndex((cart)=>{
    return cart.product._id.toString() === product._id.toString();
  });
let newQuantity = 1
const updatedCartItems = [...this.cart.items];

if (cartItemIndex >= 0 ){
  newQuantity = this.cart.items[cartItemIndex].quantity + 1; 
  updatedCartItems[cartItemIndex].quantity = newQuantity
}else{
  updatedCartItems.push({
    product,
    quantity: newQuantity,
  })
}

const updatedCart = {
  items: updatedCartItems,
};
this.cart = updatedCart
return await this.save()
};

Userschema.methods.removeFromCart = function(product){
  const updatedCartItems = this.cart.items.filter((items)=>{
    return items.product._id.tostring() !== product._id.toString();
  });

  this.cart.items = updatedCartItems;
  return this.save();
};

  Userschema.methods.emptyCart = function () {
    this.cart.items = [];
    return this.save();
  };

const User = mongoose.model('User', Userschema);

module.exports = User;
