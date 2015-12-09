var express = require('express')
var app = express();

// app.get('/add/2/3'), function(req, res) {
// 	res.send("5")
// }

app.get('/:operator/:num1/:num2', function(req, res) {
	var operator = req.params.operator;
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);

	var op = {
		"addition": function(num1, num2) {
			return num1 + num2;
		},
		"subtraction": function(num1, num2) {
			return num1 - num2;
		},
	}

	var total = op[operator](num1, num2)

	res.send(total.toString());
});

app.listen(8000, function() {
	console.log("Listening on port 8000...");
});
