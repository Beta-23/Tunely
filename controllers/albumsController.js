var Album = require('../models/Album')

var albumsController = {
  index: function(req,res) {
    Album.find({}, function(err, data) {
      err ? console.log(err) : res.render('../views/albums/index', {albums: data});
    })
  },
  new: function(req, res) {
    res.render('../views/albums/new');
  },
  create: function(req,res) {
    var name = req.body.name;
    var artist = req.body.artist;
    var release_date = req.body.release_date;
    var genre = req.body.genre
    var image = req.body.image
    Album.create({name: name, artist: artist, release_date: release_date,
                  genre: genre, image: image}, function(err, data){
                    err ? console.log(err) : res.redirect('/albums');
                  })
  }
}

module.exports = albumsController;

