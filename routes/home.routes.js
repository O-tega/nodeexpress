const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/complaint_img/');
  },

  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 100000 },
  fileFilter: (req, file, callback) => {
    const extname = path.extname(file.originalname);
    if (extname === '.jpg' || extname === '.png' || extname === '.txt') {
      return callback(null, true);
    }
    return callback(new Error('file type not supported'), false);
  },
}).single('file');

router.get('/', function (req, res, next) {
  res.render('index.ejs', {
    title: 'Home',
    server_url: req.server_url,
  });
});

router.get('/about', (req, res, next) => {
  res.render('about.ejs', {
    title: 'About',
    server_url: req.server_url,
  });
});

router.get('/contact', (req, res, next) => {
  res.render('contact.ejs', {
    title: 'Contact',
    server_url: req.server_url,
  });
});

router.post('/complain', (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return next(new Error(err));
    }

    res.send({ body: req.body, file: req.file });
  });
});

module.exports = router;

// router.get('/', function (req, res, next) {

//   // res.status(200).render('./views/index.html');
//   res.status(200).sendFile(__dirname + '/views/index.html');
// });
