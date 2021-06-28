// create and initialize the express server
// import express
const express = require('express');

// import modules that we will be working with
const path = require('path');

// initiaze express
const app = express();

// set up the view engine to be able to read files
app.set('view engine', 'ejs');

//set views directory
app.set('views', path.join(__dirname, 'views'));

// setting our static directory
app.use(express.static(path.join(__dirname, 'public')));

// =======================================================================================================================
//============================================CREATING AN ECOMMERCE WEBSITE===============================================

// importing routes
const phoneRoutes = require('./routes/phone.routes');
const homeRoutes = require('./routes/home.routes');
const { urlencoded } = require('express');


// calling the routes
app.use('/phones', phoneRoutes);
app.use('/', homeRoutes);

// request middle ware that helps us interface with data from the front-end to the server
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// creating a global varaible that will represent local host
app.use((req, res, next)=>{
    req.server_url = 'http://localhost/5000/';
    next();
})




// create port
const PORT = process.env.PORT || 5000;

// creating your local server
app.listen(PORT, ()=>{
    console.log(`server is running on http://127.0.0.1:${PORT} \nor http://localhost:${PORT}`)
})