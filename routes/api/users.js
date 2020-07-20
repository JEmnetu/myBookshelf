const dotenv = require("dotenv").config();
const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route POST api/users
// @desc Register new user
// @access Public

router.post("/", (req, res) => {
  const { email, password, books } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields." });
  }

  // Check for existing User
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists." });

    const newUser = new User({
      email,
      password,
      books,
    });
    // Create slat & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  books: user.books,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
