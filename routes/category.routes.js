const express = require('express');

const {
  create,
  getAllCategory,
  getCategoryProduct,
} = require('../controller/categoryController');

const { Authorization, roles } = require('../controller/authController')

const router = express.Router();

router.get('/', getAllCategory);
router.get('/products', getCategoryProduct);

router.use(Authorization)
router.post('/create', roles('user'), create);

//TODO: complete the crud methods i.e. patch and delete and retrieve documents by id

module.exports = router;
