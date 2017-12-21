const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, () =>{
  console.log('app running on port 8080');
});
