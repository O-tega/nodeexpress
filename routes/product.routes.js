const router = require('express').Router();

const productController = require('../controller/productController');

router.post('/create', productController.createProduct);

router.get('/', productController.getAllProduct);

router.get('/:id', productController.getProductById);

router.patch('/update/:id', productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
