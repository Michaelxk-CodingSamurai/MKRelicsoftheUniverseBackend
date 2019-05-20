const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const blogSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }, 
    blogText: {
        type: String,
        required: false,
        trim: true
    }, 
    topic: {
        type: String,
        required: false,
        trim: true
    }, 
    timePlace: {
        type: String,
        required: false,
        trim: true
    }
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog