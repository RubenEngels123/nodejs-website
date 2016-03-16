var express = require('express');
var router = express.Router();

/* GET "PAGE NAME HERE" page. */
router.get('/', function (req, res, next) {
    res.render('move', {title: 'move'});
});


module.exports = router;