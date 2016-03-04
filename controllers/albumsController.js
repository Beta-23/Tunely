var Album = require('../models/Album')

var albumsController = {
  index: function(req,res) {
    Album.find({}, function(err, data) {
      // err ? console.log(err) : res.render('./views/albums/index', {albums: data});
      // err ? console.log(err) : res.render("test");
      // console.log(test);
      res.send(data)
    })
  }
}

module.exports = albumsController;

