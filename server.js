const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 6001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = process.env.MY_DB || process.env.MONGODB_URI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(db))
  .catch((err) => console.log(err));

// Import Routes
app.use("/api/books", require("./routes/api/books"));

//server static assets
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
