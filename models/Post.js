const 
  mongoose = require('mongoose'), 
  postSchema = new mongoose.Schema({
    title: String, 
    body: String,
    post_url: String,
    tags: [String],
    _by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    featuredImageName: String
  }, { timestamps: true })

postSchema.virtual('featuredImageUrl').get(function() {
  return `https://s3-us-west-1.amazonaws.com/sugarfree-gallery/${this.featuredImageName}`
})

postSchema.set('toJSON', { getters: true, virtuals: true })

  const Post = mongoose.model('Post', postSchema)
  module.exports = Post