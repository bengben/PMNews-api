var express = require('express');
var router = express.Router();
var mysql =  require('mysql');
var db = require('../db/db.js');

let pool =  mysql.createPool(db.mysql);

/* GET users listing. */
router.get('/list', function(req, res, next) {
	
	pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results[0].solution);
	});

  res.send({'router':'news'});
});

module.exports = router;
