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
    var id = req.params.id;
    console.log(id)
    Album.findById({_id: id}, function(err, data){
      err ? console.log(err) : res.render('../views/albums/edit', {album: data});
    })
  },
  update: function(req, res) {
    var id = req.params.id;

    var name = req.body.name;
    var artist = req.body.artist;
    var release_date = req.body.release_date;
    var genre = req.body.genre
    var image = req.body.image

    Album.findById({_id: id}, function(err, data){
      if (err) { console.log(err) }
      if (name) {data.name = name};
      if (artist) {data.artist = artist};
      if (release_date) {data.release_date = release_date};
      if (genre) {data.genre = genre};
      if (image) {data.image = image};
      data.save(function(err) {
        if(err) res.json({messsage: 'Could not save updated quote: ' + err});
      });
      res.redirect('/');
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

