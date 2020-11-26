const mongoose = require('mongoose');

const newLike = new mongoose.Schema({
  likes: {
    type: Number,
  },
});

const Like = mongoose.model('Like', newLike);

module.exports = Like;
