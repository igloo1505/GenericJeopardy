const mongoose = require("mongoose");
const assert = require("assert");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"));
};

module.exports = connectDB;
