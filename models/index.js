var mongoose = require('mongoose');
var album = require('../models/Album');
var Song = require('../models/Song');

var AlbumSchema = mongoose.Schema({
  name: String,
  artist: String,
  release_date: String,
  genre: String,
  image: String,
  created_at: Date,
  updated_at: Date,
  //embedding songs schema
  songs: [SongSchema]
});

var Song = mongoose.model('Song', SongSchema);
