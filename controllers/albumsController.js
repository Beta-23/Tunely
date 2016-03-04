var Album = require('../models/Album')

var albumsController = {
  index: function(req,res) {
    Album.find({}, function(err, data) {
      err ? console.log(err) : res.render('../views/albums/index', {albums: data});
    })
  },
  new: function(req, res) {
    res.render('../views/albums/new', {albums: data});
  },
  create: function(req, res) {
    var name = req.body.name;
    var artist = req.body.artist;
    var release_date = req.body.release_date;
    var genre = req.body.genre
    var image = req.body.image
    Album.create({name: name, artist: artist, release_date: release_date,
                  genre: genre, image: image}, function(err, data){
                    err ? console.log(err) : res.redirect('/albums');
                  })
  },
  show: function(req, res) {
    var id = req.params.id
    console.log("test")
    Album.findById({_id: id}, function(err, data){
      err ? console.log(err) : res.send({data})
    })
  },
  edit: function(req, res) {
    var name = req.body.name;
    var artist = req.body.artist;
    var release_date = req.body.release_date;
    var genre = req.body.genre
    var image = req.body.image
    var id = req.params.id

    Album.findById(id, function(err, data){
      if (err) { console.log(err) }
      if (name) {album.name = name};
      if (artist) {album.artist = artist};
      if (release_date) {album.release_date = release_date};
      if (genre) {album.genre = genre};
      if (image) {album.image = image};
    })
  }
  // },
  // delete: function(req,res){
  //   var id = req.params.id
  //   Album.findById({_id: id})
  // }
}

module.exports = albumsController;

