const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 6001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// DB Config
const db = process.env.MY_DB || process.env.MONGODB_URI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log(db))
  .catch((err) => console.log(err));

// Import Routes
app.use("/api/books", require("./routes/api/books"));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
