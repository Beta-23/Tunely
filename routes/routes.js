var express = require('express'),
     router = express.Router(),
 bodyParser = require('body-parser'), //parses information from POST
   methodOverride = require('method-override'),
   Album = require('../models/Album')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// require the album controller
var albumsController = require('../controllers/albumsController');

router.route('/albums').get(albumsController.index)
  // Get all albums
  // .get(albumsController.index);

// router.route('/albums').get(function(req,res) {
//   res.send("test");
// });
module.exports = router;
