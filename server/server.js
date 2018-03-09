'use strict';

// Job-monitoring application dependencies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var flash = require('connect-flash');

// Job application components
var routes = require('./app/routes');
var session = require('./app/session');
var passport = require('./app/auth');
var ioServer = require('./app/socket')(app);
var logger = require('./app/logger');

// Set the port number
var port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

// Middleware to catch 404 errors
app.use(function(req, res, next) {
    res.status(404).sendFile(process.cwd());
});

ioServer.listen(port);