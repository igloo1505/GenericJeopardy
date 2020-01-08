const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

// @route POST api/users
// @desc REGISTER user
// access PUBLIC
router.post(
  "/",
  [
    check("name", "A Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with at least 8 characters"
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const { name, email, password, master } = req.body;

    try {
      let user = await User.findOne({ email: email });
      const masterCheck = await bcrypt.compare(
        master,
        config.get("masterPass")
      );
      if (user) {
        return res.status(400).json({
          msg: "User already exists"
        });
      } else if (masterCheck == false) {
        return res.status(400).json({
          msg: "Master password is required to become an administrator"
        });
      }

      user = new User({
        name,
        email,
        password,
        master
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.msg);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
