var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */


router.get('/', function(req, res, next) {
    fs.readFile(__dirname + "/db/tsconfig.json", function (err, data) {
        res.render('index', JSON.parse(data.toString()));
    });
});

module.exports = router;
