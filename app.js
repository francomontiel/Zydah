var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

var port = 8080;
app.listen(port);
console.log('listening port: ' + port);