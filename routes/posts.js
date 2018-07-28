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
// current index is not refreshing need to go up level to render list with edited post
postsRouter.delete('/:id', postsCtrl.destroy)
// make a new filtered list with the post deleted

module.exports = postsRouter