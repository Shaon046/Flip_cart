const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;

const userModel = {
  id: objectId,

  fname: {
    type: String,
    required: true,
    min: 2,
  },
  lname: {
    type: String,
    required: true,
    min: 3,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    min: 8,
  },
};

module.exports = userModel;
