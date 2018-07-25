const
  Post = require('../models/Post'),
  formidable = require('formidable'),
  fs = require('fs-extra')


exports.index = (req, res) => {
  Post.find({}).populate('_by').exec((err, posts) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: posts })
    }
  })
}

exports.show = (req, res) => {
  Post.findById(req.params.id).populate('_by').exec((err, postFromDB) => {
    if (err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: postFromDB })
    }
  })
}

exports.create = (req, res) => {

  /*
    var s3 = require('s3');
    var client = s3.createClient({
      s3Options: {
        accessKeyId: "your s3 key",
        secretAccessKey: "your s3 secret",
      },
    });
  */



  console.log(req.body)
  const form = new formidable.IncomingForm();
 
  form.parse(req, function(err, fields, files) {
    const tempUploadPath = `temp/${files.image.name}`
    fs.ensureDir(`temp`)
      .then(() => {
        fs.copy(files.image.path, tempUploadPath, (err) => {
          if(err) return res.json({ message: "ERROR" })
          // 1. using tempUploadPath, upload to amazon
          // 2. when Amazon responds ok, create a new post (Post.create)
          //    (your fields are under "fields", not req.body
          // you'll want to combine {...} fields, amazon's image url, and _by: req.user to create the post now.
          // 3. respond to client with JSON ok.


          /*
            var params = {
              localFile: tempUploadPath,
            
              s3Params: {
                Bucket: "s3 bucket name",
                Key: "some/remote/file",
               http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
              },
            };
            var uploader = client.uploadFile(params);
            uploader.on('error', function(err) {
              console.error("unable to upload:", err.stack);
            });
            uploader.on('progress', function() {
              console.log("progress", uploader.progressMd5Amount,
                        uploader.progressAmount, uploader.progressTotal);
            });
            uploader.on('end', function() {
              console.log("done uploading");
              // here you can do the Post.create....
            });
          */
        })
      })
  });
  // const tags = req.body.tags.split(', ')
  // Post.create({ ...req.body, _by: req.user, tags}, (err, newPost) => {
  //   if (err) {
  //     res.json({ status: "FAIL", err })
  //   } else {
  //     res.json({ status: "SUCCESS", payload: newPost })
  //   }
  // })
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