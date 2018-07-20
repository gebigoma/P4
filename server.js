require('dotenv').config()

const
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-express-jwt',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js')

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

// tell app to use this public folder step 1
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)

// // tell express app when someone goes to url that doesnt begin with /api serve what's in the public folder
// app.get('*', (req, res) => {
// 	res.sendFile(`${__dirname}/client/build/index.html`)
// })

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})