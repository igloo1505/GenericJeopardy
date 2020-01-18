const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const mongodb = require("mongodb");
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
router.post("/", async (req, res) => {
  try {
    var pipeline = [
      {
        $group: {
          _id: "$category",
          points: {
            $addToSet: "$points"
          }
        }
      },
      {
        $out: "Category"
      }
    ];
    pipeline = req.body;
    // await db.questions.aggregate(pipeline);
    res.data("Success");
  } catch (error) {
    console.error(error.message);
    res.status(404).send("Failed to post aggregation pipeline");
  }
});

module.exports = router;
