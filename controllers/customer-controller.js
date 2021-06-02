// // const { validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // const HttpError = require("../models/http-error");
// const Customer = require("../models/customer");
// // const HomeOwner = require("../models/homeowner");
// // const Volunteer = require("../models/volunteer");
// // const NGOOwner = require("../models/ngohead");
// // const Item = require("../models/donationItem");
const mongoose = require("mongoose");

// // const login = async (req, res, next) => {
// //   const { email, password } = req.body;
// //   let existingUser;

// //   try {
// //     existingUser = await User.findOne({ email: email });
// //   } catch (err) {
// //     const error = new HttpError(
// //       "Logging in failed, please try again later.",
// //       500
// //     );
// //     return next(error);
// //   }

// //   if (!existingUser) {
// //     const error = new HttpError(
// //       "Invalid credentials, could not log you in.",
// //       403
// //     );
// //     return next(error);
// //   }

// //   let isValidPassword = false;
// //   try {
// //     isValidPassword = await bcrypt.compare(password, existingUser.password);
// //   } catch (err) {
// //     const error = new HttpError(
// //       "Could not log you in, please check your credentials and try again.",
// //       500
// //     );
// //     return next(error);
// //   }

// //   if (!isValidPassword) {
// //     const error = new HttpError(
// //       "Invalid credentials, could not log you in.",
// //       403
// //     );
// //     return next(error);
// //   }

// //   let token;
// //   try {
// //     if (existingUser.type == "volunteer") {
// //       let existingVolunteer = await Volunteer.findOne({
// //         email: existingUser.email,
// //       });
// //       if (existingVolunteer.status == "Not Approved") {
// //         return next(
// //           new HttpError("Wait until your NGO Head approves you.", 404)
// //         );
// //       }
// //       if (existingVolunteer.status == "Declined") {
// //         return next(new HttpError("NGO HEAD has declined you.", 404));
// //       }
// //     }
// //     token = jwt.sign(
// //       { userId: existingUser.id, email: existingUser.email },
// //       process.env.JWT_KEY,
// //       { expiresIn: "1h" }
// //     );
// //   } catch (err) {
// //     const error = new HttpError(
// //       "Logging in failed, please try again later.",
// //       500
// //     );
// //     return next(error);
// //   }
// //   res.json({
// //     userId: existingUser.id,
// //     email: existingUser.email,
// //     token: token,
// //     type: existingUser.type,
// //   });
// // };

// // const getNgoNames = async (req, res, next) => {
// //   // console.log("ngos");
// //   let ngos;
// //   try {
// //     ngos = await NGOOwner.find({});
// //     console.log(ngos);
// //   } catch (err) {
// //     const error = new HttpError("could not find ngos", 404);
// //     return next(error);
// //   }
// //   res.json({
// //     ngos: ngos.map((ngo) => ngo.toObject({ getters: true })),
// //   });
// // };

// // const getEmails = async (req, res, next) => {
// //   let users;
// //   try {
// //     users = await User.find({});
// //     console.log(users);
// //   } catch (err) {
// //     const error = new HttpError("could not find users", 404);
// //     return next(error);
// //   }
// //   res.json({
// //     users: users.map((user) => user.toObject({ getters: true })),
// //   });
// // };

// exports.signup=signup;
// exports.signup = signup;
// // exports.login = login;
// // exports.getNgoNames = getNgoNames;
// // exports.getEmails = getEmails;
