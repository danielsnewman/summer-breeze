const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/amenities', (req, res) => {
  res.render('amenities');
});

router.get('/availability', (req, res) => {
  res.render('availability');
});

router.post('/availability', (req, res, next) => {
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
      // return res.json(errors);
    } else {
      res.render('index');
    }
    return;
  next();
});

router.get('/todo', (req, res) => {
  res.render('toDo');
});


module.exports = router;
