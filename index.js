const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');

const ApiError = require('./utils/apiError')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);

// catching 404 on my get method
app.all('*', (req, res, next) =>{
  return next(new ApiError('route does not exist', 404))
});


// setting up global error
// TODO: document your apiError class
app.use((err, req, res, next)=>{
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    data: err.message,
    stack: err.stack,
  });
});


mongoose
  .connect('mongodb://localhost:27017/eShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connection is successfull');
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
