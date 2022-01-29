var express = require('express');
var router = express.Router();
var groceries = require('../data/groceries');



router.get('/', function(req, res, next) {
    res.render('index', { groceries });
});


router.post('/groceries', function(req, res) {
    req.body.done = false;
    groceries.push(req.body);
    res.redirect('/');
})


router.delete('/groceries/:idx', function(req, res) {
    groceries.splice(req.params.idx, 1);
    res.redirect('/');
});

module.exports = router;
