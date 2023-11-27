////// tested
const express = require("express");
const router = express.Router();
const loginController = require("../../controller/loginController");

const login = router.get("/login", loginController);

module.exports = login;
