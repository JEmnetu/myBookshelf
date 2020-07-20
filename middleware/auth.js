const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) res.status(401).json({ msg: "No Token, authorization denied" });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "token is not valid." });
  }
};

module.exports = auth;