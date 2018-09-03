var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.get('/v1/user/:id', function(req, res, next) {
  res.send({ 'User Id': req.params.id });
});

module.exports = router;
