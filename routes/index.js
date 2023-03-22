var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {   //each rout is used by adding "/" after the localhost:9000
  res.render('index', { title: 'Omar' });
});

router.get('/:msg', function (req, res, next) {
  res.render('index', { title: req.params.msg });
});

module.exports = router;
