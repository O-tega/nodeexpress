// import express and router
const express = require('express');
const router = express.Router();

// import other modules
const path = require('path');


// we will set our base URL to the list page in the views directories
// we use the router.get method to call the function
router.get('/', (req, res, next) => {
    res.render('phones/list.ejs', {
        title: 'Phones List',
    })
})



module.exports = router;

// we have to import the file in our index.js