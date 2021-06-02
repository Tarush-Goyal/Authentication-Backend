// // const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// // const HttpError = require("../models/http-error");
const Users = require("../models/users");
// // const HomeOwner = require("../models/homeowner");
// // const Volunteer = require("../models/volunteer");
// // const NGOOwner = require("../models/ngohead");
// // const Item = require("../models/donationItem");
const mongoose = require("mongoose");

const signup = async (req, res) => {
  console.log("reached");
  console.log(req.body);
  const { email, password, type } = req.body;
  let existingUser;
  try {
    try {
      existingUser = await Users.findOne({ email: email });
    } catch (err) {
      res.status(500).send("unable to search in database");
    }
    if (existingUser) {
      res.status(500).send("User already exists");
    }
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
      res.status(500).send("Crypting Error");
    }

    const createdUser = new Users({
      email,
      password: hashedPassword,
      type,
    });

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdUser.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      res.status(500).send("Insertion into Database Error");
    }

    let token;
    try {
      token = jwt.sign(
        { userId: createdUser.id, email: createdUser.email },
        process.env.JWT_KEY,
        { expiresIn: "1 min" }
      );
    } catch (err) {
      res.status(500).send("Unable to create token");
    }

    res.status(201).json({
      userId: createdUser.id,
      email: createdUser.email,
      token: token,
      type: createdUser.type,
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    try {
      existingUser = await Users.findOne({ email: email });
    } catch (err) {
      res.status(500).send("Unable to search in Database");
      return next(error);
    }

    if (!existingUser) {
      res.status(500).send("Wrong email entered");
      return next(error);
    }

    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
      res.status(500).send("Could not decrypt password");
      return next(error);
    }

    if (!isValidPassword) {
      res.status(500).send("Wrong password entered");
      return next(error);
    }

    let token;
    try {
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
    } catch (err) {
      res.status(500).send("Unable to create token");
    }
    res.status(200).json({
      userId: existingUser.id,
      email: existingUser.email,
      token: token,
      type: existingUser.type,
    });
  } catch (err) {
    res.status(500).send("Could not log you in");
  }
};

exports.signup = signup;
exports.login = login;
