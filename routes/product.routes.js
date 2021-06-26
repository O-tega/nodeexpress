const router = require('express').Router();
const productContoller = require('../controller/productController')
const createProduct = require('../controller/productController')


// create router
router.post('/create', createProduct);

router.get('/', productContoller.getAllProduct );

router.get('/:id', productContoller.getProductById);

router.patch('/update/:id', productContoller.updateProduct);

router.delete('/delete/:id', productContoller.deleteProduct);




module.exports = router;