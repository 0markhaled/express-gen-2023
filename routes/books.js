const express = require('express');
const router = express.Router();

/* GET home page. */





router.get('/:fro', function (req, res, next) {   //each rout is used by adding "/" after the localhost:9000

    //get bookId :? courld bring record from the database

    res.send(req.params.fro);
});

router.get('/:fromId-:toId', function (req, res, next) {   //each rout is used by adding "/" after the localhost:9000

    //get bookId :? record from the database

    res.render('book', { fromId: req.params.fromId, toId: req.params.toId });
});
//1, 3, 667
//!0, 5
router.get('/:bookId([1-9][0-9]*)', function (req, res, next) {   //each rout is used by adding "/" after the localhost:9000

    //get bookId :? record from the database

    res.render('book', { bookId: req.params.bookId });
});




module.exports = router;
