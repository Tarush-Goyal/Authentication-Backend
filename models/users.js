const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  type: { type: String, required: true },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Userss", usersSchema);
