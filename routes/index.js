const express = require('express');
const router = express.Router();

app.get('/', function (req, res) => {
  res.send('Hello World!')
})

module.exports = router;
