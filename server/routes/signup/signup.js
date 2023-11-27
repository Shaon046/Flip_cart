///tested
const express = require("express");
const router = express.Router();
const signupController= require("../../controller/signupController.js")


const registerUser = router.get('/registeruser',signupController );

module.exports = registerUser;
