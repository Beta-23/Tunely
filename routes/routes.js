var express = require('express');
     router = express.Router(),
 bodyParser = require('body-parser'), //parses information from POST
   methodOverride = require('method-override')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// require the album controller
var albumsController = require('../controllers/albumsController');

router.route('/albums')
  // Get all albums
  .get(albumsController.getAll);

module.exports = router;
