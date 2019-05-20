const Blog = require('../models/blog');
const { blogs } = require('../data/blogs') 

const seedDBBlogs = (req, res) => {
    Blog.create(blogs)
        .then(blogs => res.status(200).json({ blogs }))
        .catch(err => res.status(500).json({ Error: err.message }))
}

const getAllBlogs = (req, res) => {
    Blog.find()
        .exec((err, docs) => {
            if (err) { res.status(500).json({ message: `Database error: ${err}` } )}
            else if (docs.length === 0) { res.status(404).json({ message: "Blogs Database is Empty."}) }
            else { res.status(200).json(docs) }
        })
}
const getBlogById = (req, res) => {
    Blog.findById(req.params.id)
        .exec((err, blog) => {
            if (!blog) {
                resizeBy.status(404).json({ message: "No Blog Found"})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(blog)
            }
        })
}
const createBlog = (req, res) => {
    let blog = {...req.body}
    Blog.create(blog)
        .then(blogs => res.status(200).json({ blogs }))
        .catch(err => res.status(500).json({ Error }))
}
const updateBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true })
        .exec((err, blog) => {
            if(!blog) {
                res.status(404),json({ message: "No Blog Found"})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(blog)
            }
        })
}
const deleteBlog = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .exec((err, blog) => {
            if (!blog) {
                res.status(404).json({ message: "No Blog Found "})
            } else if (err) {
                res.status(500).json({ message: `Database error: ${err}`})
            } else {
                res.status(200).json(blog)
            }
        })
}

module.exports = {
    seedDBBlogs, getAllBlogs, getBlogById,
    createBlog, updateBlog, deleteBlog,
}