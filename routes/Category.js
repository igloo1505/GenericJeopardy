const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const mongodb = require("mongodb");
const mongoClient = require("mongodb").mongoClient;
const config = require("config");
const db = config.get("mongoURI");
const Aggregated = require("../models/Aggregated");

router.get("/", async (req, res) => {
  try {
    const categories = await Aggregated.find();
    res.json(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("failed to get aggregated categories");
  }
});

module.exports = router;
