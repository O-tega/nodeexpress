const router = require('express').Router();

const { register, login, Authorization } = require('../controller/authController');
const {addToCart, removeFromCart, clearCart} = require('../controller/userController');

router.post('/register', register);
router.post('/login', login);

router.use(Authorization);
router.get('/add/cart/:id', addToCart);
router.get('/remove/cart/:id', removeFromCart);
router.get('/clear/cart', clearCart);

module.exports = router;
