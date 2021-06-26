const router = require('express').Router();

const {create, getAllCategory, getCategoryProduct} = require('../controller/categoryController');

router.post('/create', create);
router.get('/', getAllCategory)
router.get('/:catId', getAllCategory)


//TODO: complete the crud methods

module.exports = router;