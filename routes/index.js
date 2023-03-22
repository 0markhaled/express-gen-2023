var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {   //each rout is used by adding "/" after the localhost:9000
  res.render('index', {
    title: 'my site',
    name: req.login.auth ? req.login.username : "guest"
  });
});




router.get('/cats?mdogs', function (req, res, next) {
  res.render('index', { title: "cats", name: "josh" });
});

router.get('/ca+ts', function (req, res, next) {
  res.render('index', { title: "caaaaaats", name: "kendra" });
});
router.get('/c(at)+s', function (req, res, next) {
  res.render('index', { title: "catatatta", name: "dan" });
});


router.get(/cat/, function (req, res, next) {
  res.render('index', { title: "cater", name: "omar" });
});



// router.get('/:msg', function (req, res, next) {
//   res.render('index', { title: req.params.msg });
// });



module.exports = router;
