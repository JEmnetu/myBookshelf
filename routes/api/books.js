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

// @route DELETE api/books/:id
// @desc Delete Book
// @access Public

router.delete("/:id", (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({ success: "True" });
    })
    .catch((err) => {
      res.status(404).json({ success: "False" });
    });
});
module.exports = router;
