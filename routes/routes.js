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

// redirect / to /albums for now
router.route('/').get(function(req,res){
  res.redirect('/albums')
})
var albumsController = require('../controllers/albumsController');

// show all albums
router.route('/albums')
  .get(albumsController.index);

// new page and create
router.route('/albums/new')
  .get(albumsController.new)

  .post(albumsController.create);

// edit
router.route('/albums/:id')

  .get(albumsController.show)

router.route('/albums/:id/edit')

  .get(albumsController.edit)

  .patch(albumsController.edit)

  .delete(albumsController.delete);


// create route to albums/search
// in this contoller should be the search by id
// params from request

// search bar route
router.route('/search')
  
  .get(albumsController.search)


// sanity check
// router.route('/albums').get(function(req,res) {
//   res.send("check sanity");
// });

module.exports = router;
