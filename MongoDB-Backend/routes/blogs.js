const express       = require('express')
const router        = express.Router()

router.get('/', function(req, res) {
    res.send({ message: 'index route blogs'})
})

const blogsController = require('../controllers/blogs-controller.js')

router.post('/blogs/seed', blogsController.seedDBBlogs)
router.get('/blogs', blogsController.getAllBlogs)
router.get('/blogs/:id', blogsController.getBlogById)

router.post('/blogs', blogsController.createBlog)
router.put('/blogs/:id', blogsController.updateBlog)
router.delete('/blogs/:id', blogsController.deleteBlog)

module.exports = router