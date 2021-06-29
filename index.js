//import
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
//file import
const { person, students } = require('./data');

//route imports
const phoneRoutes = require('./routes/phones.routes');
const homeRoutes = require('./routes/home.routes');
const productRoutes = require('./routes/products.routes');

//initialize express
const app = express();

//set view engine
app.set('view engine', 'ejs');

//set views directory
app.set('views', path.join(__dirname, 'views'));

//seting up request middleware
//NOTE: this is used for sending data from the frontend to the server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static dir
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(methodOverride('_method'));
//globals
app.use((req, res, next) => {
  req.server_url = 'http://localhost:5000/';
  next();
});

//home routes
app.use('/', homeRoutes);

//phones route
app.use('/phones', phoneRoutes);

//product routes
app.use('/product', productRoutes);

//api routes
app.get('/api/students', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: students,
  });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect('mongodb://localhost:27017/eShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connected successfully');
  })
  .catch((err) => console.log('ERROR: ', err));

//listen to port
app.listen(PORT, () => {
  console.log(
    `server is runing on http://127.0.0.1:${PORT}\nor http://localhost:${PORT}`
  );
});
