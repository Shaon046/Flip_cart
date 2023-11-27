const mongoose = require("mongoose");
const user = require("./userModel");

const Schema = mongoose.Schema;

const userSchema = new Schema(user);

const User = mongoose.model("User", userSchema);

module.exports = User;
