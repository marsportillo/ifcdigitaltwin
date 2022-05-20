var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ifc Digital Twin' });
});

router.get('/quickViewer', function(req, res, next) {
  res.render('quickViewer', { title: 'Ifc Digital Twin - Quick Viewer' });
});

module.exports = router;
