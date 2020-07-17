const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Book model
const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  bookUrl: {
    type: String,
  },
  pageCount: {
    type: String,
  },
});

module.exports = Book = mongoose.model("Book", BookSchema);
