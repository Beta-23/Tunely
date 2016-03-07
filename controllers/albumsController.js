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
  create: function(req, res) {
    var name = req.body.name;
    console.log(name);
    var artist = req.body.artist;
    var release_date = req.body.release_date;
    var genre = req.body.genre;
    var image = req.body.image;
    Album.create({name: name, artist: artist, release_date: release_date,
                  genre: genre, image: image}, function(err, data){
                    err ? console.log('create failed') : res.redirect('/albums');
                  })
  },
  show: function(req, res) {
    var id = req.params.id
    console.log(id)
    console.log("test")
    Album.findById({_id: id}, function(err, data){
      err ? console.log(err) : res.render('../views/albums/show', {album: data});
    })
  },
  edit: function(req, res) {
    res.render('../views/albums/edit')
    var id = req.params.id;
    Album.findById({_id: id}, function(err, data){
      err ? console.log(err) : res.json({data})
    })

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
  },
  search: function(req,res) {
    // var name = req.params.name;
    // use .filter()?
    var id = req.params.id
    console.log(id);
    Album.findById({_id: id}, function(err, data) {
      err ? console.log(err) : res.json({data});
    })
  },
  delete: function(req,res){
    var id = req.params.id
    Album.remove({_id: id}, function(err, data) {
      err ? console.log(err) : res.redirect('/');
      })
  }
}

module.exports = albumsController;

