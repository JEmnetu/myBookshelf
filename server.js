const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 6001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Import Routes
app.use("/api/books", require("./routes/api/books"));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
