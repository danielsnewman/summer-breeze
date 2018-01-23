const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

router.get('/amenities', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/amenities.html'));
});

router.get('/availibility', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/availibility.html'));
});

router.post('/availibility', (req, res) => {
  req.check('name', 'Name must be longer than 2 letters').isLength({min:2});
  req.check('email','Must be a valid email').isEmail();
  let errors = req.validationErrors();
  console.log(errors);
});


module.exports = router;
