const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
const userRoutes = require('./routes/user.routes');

const ApiError = require('./utils/apiError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/user', userRoutes);

//catching 404 on get method
//BUG: document your apiErrror class
app.all('*', (req, res, next) => {
  return next(new ApiError('route does not exist', 404));
});

//set global error
app.use((err, req, res, next) => {
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
    useCreateIndex: true,
  })
  .then(() => {
    console.log('database connection is successfull');
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
