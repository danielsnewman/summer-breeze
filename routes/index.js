const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/amenities', (req, res) => {
  res.render('amenities');
});

router.get('/availibility', (req, res) => {
  res.render('availibility');
});

router.post('/availibility', (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name').notEmpty();
  req.checkBody('email', 'That email is not valid').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('guestCount', 'Please supply a number of guests').notEmpty();
  const errors = req.validationErrors();
    if(errors) {
      req.flash('error', errors.map(err => err.msg));
      console.log(errors);
    return;
  }
  next();
});


module.exports = router;
