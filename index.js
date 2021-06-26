// import express server
const express = require('express');
const app = express();
const mongoose = require('mongoose');


// import routes
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');



// call routes
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);





// recieve request from your server
// app.use(express.json());
// app.use(express.json())
app.use(express.urlencoded({extended: true}));



mongoose.connect('mongodb://localhost:27017/eShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('database connection is successful');
})
.catch((err)=>{
    console.log(err);
});


// Creating the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} `)
})


