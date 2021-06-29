const express = require('express');

const {
  create,
  getAllCategory,
  getCategoryProduct,
} = require('../controller/categoryController');

const router = express.Router();

router.post('/create', create);
router.get('/', getAllCategory);
router.get('/:catId', getCategoryProduct);

//TODO: complete the crud methods

module.exports = router;
