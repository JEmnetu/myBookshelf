const dotenv = require("dotenv").config();
const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// @route POST api/auth
// @desc Auth user
// @access Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields." });
  }

  // Check for existing User
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      console.log(user);

      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          return res.json({
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
// @route GET api/auth/user
// @desc Get user data
// @access Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      return res.json(user);
    });
});
module.exports = router;
