var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

// Render static index route
app.use(express.static(path.join(__dirname, './compiled')));
app.use(express.static(path.join(__dirname,'./src')));

app.listen(port, () => console.log('Server listening on', port))