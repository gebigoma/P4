const
	express = require('express'),
	postsRouter = new express.Router(),
	postsCtrl = require('../controllers/posts.js'),
	{ verifyToken } = require('../serverAuth.js')

postsRouter.get('/', postsCtrl.index)
postsRouter.get('/:id', postsCtrl.show)

postsRouter.use(verifyToken)
postsRouter.post('/', postsCtrl.create)
postsRouter.patch('/:id', postsCtrl.update)
postsRouter.delete('/:id', postsCtrl.destroy)

module.exports = postsRouter