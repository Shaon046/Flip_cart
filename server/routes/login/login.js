////// tested

const express = require("express");
const jwt=require("jsonwebtoken")
const User = require("../../Schema/user/userSchema");
const router = express.Router();
const dotenv=require("dotenv");
dotenv.config()


const JWT_SECTREAT=process.env.JWT_SECTREAT;



const login = router.get("/login", async (req, res) => {


  try {

    ////find user by email or phone
    if (req.body.email || (req.body.phone && req.body.password)) {
      const user =
        (await User.findOne({ email: req.body.email })) ||
        (await User.findOne({ phone: req.body.phone }).catch((err) => {
          throw err;
        }));


        /////execute if user find then match password
      if (user) {

        const userMatched = user.password === req.body.password;

      /////creating token   
const token= jwt.sign({ email: user.email }, JWT_SECTREAT ,);

//////conditional responce

        (userMatched && res.cookie("auth",token).status(202).send(user)) ||
          res.status(401).send({ message: "wrong password" });
      } else {
        res.status(404).send({ message: "user not matched" });
      }
    } else {
      res.status(400).send({ " message": "email/phone & password required" });
    }
  } catch (err) {
    throw err;
  }
});

module.exports = login;
