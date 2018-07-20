const Post = require('../models/Post')

exports.index = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: posts })
    }
  })
}

exports.show = (req, res) => {
  Post.findById(req.params.id, (err, postFromDB) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: postFromDB })
    }
  })
}

exports.create = (req, res) => {
  const tags = req.body.tags.split(', ')
  Post.create({ ...req.body, _by: req.user, tags}, (err, newPost) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: newPost })
    }
  })
}

exports.update = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, posts) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: posts })
    }
  })
}

exports.destroy = (req, res) => {
// remove is for mulitiple objects
  Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: deletedPost })
    }
  })
}