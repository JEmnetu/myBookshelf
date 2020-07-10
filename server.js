const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 6001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("App is connected to MongoDB"))
  .catch((err) => console.log(err));

// Import Routes
app.use("/api/books", require("./routes/api/books"));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
