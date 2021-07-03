const router = require('express').Router();

const productController = require('../controller/productController');
const { Authorization, roles } = require('../controller/authController');

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProductById);

router.use(Authorization);
router.post(
  '/create',
  roles('admin', 'guide'),
  productController.createProduct
);
router.patch('/update/:id', roles('admin'), productController.updateProduct);
router.delete('/delete/:id', roles('admin'), productController.deleteProduct);

module.exports = router;
