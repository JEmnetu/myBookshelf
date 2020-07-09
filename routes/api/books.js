const router = require("express").Router();
const Book = require("../../models/Book");

// @route GET api/books
// @desc GET ALL books
// @access Public

router.get("/", (req, res) => {
  Book.find({}).then((books) => {
    res.json(books);
  });
});

// @route POST api/books
// @desc Create new book
// @access Public

router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
  });

  newBook.save().then((book) => res.json(book));
});

module.exports = router;
