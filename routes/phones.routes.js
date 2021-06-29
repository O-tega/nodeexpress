const express = require('express');
const router = express.Router();
const { phones } = require('../data');

router.get('/', (req, res, next) => {
  res.render('phones/list.ejs', {
    title: 'Phone list title',
    phones,
  });
});

module.exports = router;
