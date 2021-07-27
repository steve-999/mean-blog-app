const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    userId: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;

