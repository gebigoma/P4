const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js'), 
	{ verifyToken } = require('../serverAuth.js')

usersRouter.get('/', usersCtrl.index)
usersRouter.get('/:id/submissions', usersCtrl.showSubmissions)
usersRouter.post('/', usersCtrl.create)
usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)
usersRouter.get('/:id', usersCtrl.show)
usersRouter.patch('/me', usersCtrl.update)
usersRouter.delete('/me', usersCtrl.destroy)

module.exports = usersRouter