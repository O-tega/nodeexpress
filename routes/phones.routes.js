const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.render('phones/list.ejs');
})

module.exports = router