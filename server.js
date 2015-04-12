'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

var port = 3724;
http.listen(port, function() {
    console.log('listening on *:', port);
  });
