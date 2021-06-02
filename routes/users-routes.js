const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");
// const fileUpload = require("../middleware/file-upload");

// const upload = require("../middleware/mongodb-file-upload");

const router = express.Router();

// router.get("/ngos", customerController.getNgoNames);
// router.get("/emails", customerController.getEmails);

// router.post(
//   "/signup",
//   fileUpload.single("image"),
//   [
//     check("firstName").not().isEmpty(),
//     check("email").normalizeEmail().isEmail(),
//     check("password").isLength({ min: 6 }),
//   ],
//   usersController.signup
// );

// router.post("/login", usersController.login);
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);

module.exports = router;
