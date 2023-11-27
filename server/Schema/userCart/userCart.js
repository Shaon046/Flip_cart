const mongoose = require("mongoose");
const userCartModel = require("./userCartModel");
const Schema = mongoose.Schema;

const userCartSchema = new Schema({
  userCartModel,
});

const UserCart = mongoose.model("UserCart", userCartSchema);

module.exports = UserCart;
