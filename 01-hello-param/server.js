var express = require('express');

var app = express();

app.get('/', function(req, res) {
    // write your response here.
});

app.listen(8000, function() {
    console.log("Listening on port 8000...");
});