const express = require('express');
const router = express.Router();

/* GET home page. */


router.get('/:bookId([1-9][0-9]*)', function (req, res, next) {   //each rout is used by adding "/" after the localhost:9000

    //get bookId :? record from the database

    res.render('book', { bookId: req.params.bookId });
});




module.exports = router;
