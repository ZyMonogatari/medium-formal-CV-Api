'use strict';
var express = require('express');
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mailer = require('./services/mailer');

var port = (8080);
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.post('/email/send/', mailer.sendMail);





app.listen(port, function() {
    console.log("Node server running on http://localhost:"+port);
  });

