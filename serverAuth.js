const 
  jwt = require('jsonwebtoken'),
  User = require('./models/User.js'),
  { JWT_SECRET } = process.env

function signToken(user) {
  const userData = user.toObject()
  delete userData.password
  return jwt.sign(userData, JWT_SECRET)
}

function verifyToken(req, res, next) {
  // get token from the headers of the incoming request:
  const token = req.get('token')
  // if no token is provided deny access:
  if(!token) return res.json({ message: "ERROR", error: "No token provided." })
  // otherwise, try to verify token:
  jwt.verify(token, JWT_SECRET, (err, decodedData) => {
    // if there's a problem with verification, deny access:
    if(err) return res.json({ message: "ERROR", error: "Invalid token." })
    // otherwise, search for user by the id that was embedded in token:
    User.findById(decodedData._id, (err, user) => {
      // if no user, deny access:
      if(!user) return exports.json({ message: "ERROR", error: "Invalid token." })
      // add the user to the requist object (the current user):
      req.user = user
      //  go on to process the route:
      next()
    })
  })
}

module.exports = {
  signToken, 
  verifyToken
}