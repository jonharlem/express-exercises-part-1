var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send("Hello, Express!")
});

// app.get('/harlem' function(req, res) {
// 	res.send("Hello, Harlem!")
// })

app.get('/:name', function(req, res) {
	var words = req.params.name.split("-");
	var capWords = [];
	for (var i = 0; i < words.length; i++) {
		capWords.push(words[i][0].toUpperCase() + words[i].slice(1))
	};
	res.send("Hello, " + capWords.join(" ") + "!")
})

app.listen(8000, function() {
	console.log("Listening on port 8000...");
});