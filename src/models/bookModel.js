const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id: Number, 
    prices: Number,
    Rating: Number,
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
