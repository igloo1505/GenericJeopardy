const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Aggregated = require("../models/Aggregated");

router.get("/", async (req, res) => {
  try {
    const categories = await Aggregated.find();
    const respo = res.header();
    res.json(categories);
    console.log(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("failed to get aggregated categories");
  }
});

module.exports = router;
