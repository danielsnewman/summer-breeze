const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const flash = require('connect-flash');
const errorHandlers = require('./handlers/errorHandlers');
const expressValidator = require('express-validator');
const expressSession = require('express-session');

const app = express();

app.use(expressValidator());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());
app.use(expressSession({secret: 'summer_breeze', saveUninitialized: false, resave: false}));

app.use(flash());

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
