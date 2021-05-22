const express = require("express");
const router = express.Router();

require("../db/connection");
const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("Hello world from Server!!!");
});

//using async await
router.post("/register", async (req, res) => {
  //object destructuring
  const { name, username, password, cpassword, email } = req.body;

  if (!name || !username || !password || !cpassword || !email) {
    return res.status(422).json({ error: "Please fill all fileds" });
  }
  try {
    const usernameTaken = await User.findOne({ username: username });

    if (usernameTaken) {
      return res.status(422).json({ error: "Username Already Taken" });
    }

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res
        .status(422)
        .json({ error: "User with email already exists..!" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password doesn't match! Try Again" });
    } else {
      const user = new User({ name, username, password, cpassword, email });
      await user.save();
      res.status(201).json({ message: "Registration Successful!" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(422)
      .json({ message: "Please fill username and password" });
  }
  try {
    const userIsPresent = await User.findOne({ username: username });

    if (userIsPresent) {
      const isMatched = await bcrypt.compare(password, userIsPresent.password);
      const token = await userIsPresent.generateAuthToken();
      if (isMatched) {
        res.json({ message: "Login Successful!" });
      } else {
        res
          .status(400)
          .json({ message: "Login Failed! Please check credentials again" });
      }
    } else {
      res
        .status(400)
        .json({ message: "Login Failed! Please check credentials again" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
