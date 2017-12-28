const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

router.get('/availibility', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/availibility.html'));
});

router.get('/amenities', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/amenities.html'));
});

router.post('/', (req, res) => {

});


module.exports = router;
