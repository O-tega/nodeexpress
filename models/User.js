const mongoose = require('mongoose');
const bcyrpt = require('bcryptjs')

const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please include your name']
    },
    email:{
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'user with the given email already exist']
    },
    password:{
        type: String,
        min: 6,
        max: 12,
        required: [true, 'must include password'],
    },
    role:{
        type: String,
        enum: ['admin', 'user', 'cashier'],
        default: 'user',  
    }
},
{
    timestamps: true,
    toJSON: {virtual:true},
    toObject: {virtual:true}, 
});


Userschema.pre('save', async function() {
    this.password = await bcyrpt.hash(this.password, 10);
});

const User= mongoose.model('User', userschema);

module.exports = User;
//TODO: create user route e.g register