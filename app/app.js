var express = require("express");
var app = express();

/* istanbul ignore next */
app.configure('production', function() {});
app.configure('test', function() {});

// Routes
app.get('/', function(req, res) { res.redirect('/hello'); });
app.get('/hello', require("./route-hello"));


module.exports = app;
