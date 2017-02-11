var express = require("express");

var app = express();

var multer = require("multer");

var path = require("path");

var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	res.sendFile( path.join( __dirname + "/index.html" ) );
});

var upload = multer().single("file");

app.post("/upload", function(req, res) {

	upload(req, res, function(err) {

		if (err) console.log(err);

		var fileDetails = {
	        name: req.file.originalname,
	        size: req.file.size,
	        date: new Date().toLocaleString(),
	        type: req.file.mimetype
	      };

		res.json(fileDetails);

	});

});

app.listen(port);
console.log(`Server listening on ${port}`);
