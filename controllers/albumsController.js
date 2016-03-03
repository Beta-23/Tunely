var Album = require('../models/Album')

var candiesController = {
  getAll: function(req,res) {
    Album.find({}, function(err, data) {
      err ? console.log(err) : res.render('../views/albums/index', {albums: data});
    })
  }
}

