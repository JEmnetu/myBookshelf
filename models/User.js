const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Book model
const BookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
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

// Create User Model
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  books: [BookSchema],
});

module.exports = mongoose.model("User", UserSchema);
