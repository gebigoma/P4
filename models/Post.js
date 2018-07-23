const 
  mongoose = require('mongoose'), 
  postSchema = new mongoose.Schema({
    title: String, 
    body: String,
    img: String, 
    tags: [String],
    _by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  })

  const Post = mongoose.model('Post', postSchema)
  module.exports = Post

  "sdjfnsdkjfn"