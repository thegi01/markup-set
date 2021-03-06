var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timLog(req, res, next){
    console.log('Time', Date.now());
    next();
});

// define the home page router
router.get('/', function(req, res){
    res.send('Birds home page');
});

// define the about router
router.get('/about', function(req, res){
    res.send('About birds');
});

module.exports = router;