const express = require("express");
const router = express.Router();
// const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Question = require("../models/question");

router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  const { question, answer, category, points } = req.body;
  try {
    const newQuestion = new Question({
      question,
      answer,
      category,
      points
    });
    const addQuestion = await newQuestion.save();
    res.json(addQuestion);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Test");
  }
});

module.exports = router;
