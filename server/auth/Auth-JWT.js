const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECTREAT = process.env.JWT_SECTREAT;

//This middleware function would only execute when there any AUTH Token receive in header

const verifyToken = (req, res, next) => {
  try {
    ////// if requested url is not "/LOGIN " then token required
    let URL = req.originalUrl;
    let loginRequest = URL === "/login";
    let signupRequest = URL === "/signup";

    ///////////////
    if (req.headers["authorization"]) {
      let token = req.headers["authorization"];
      token = token.split(" ")[1];

      const verified = jwt.verify(token, JWT_SECTREAT);

      const authenticatedUserEmail = verified.email;

      if (verified) {
        req.body.authenticatedUserEmail = authenticatedUserEmail;
      } else {
        res.status(401).send({ message: "token is not valid" });
      }
    } else if (
      !req.headers["authorization"] &&
      !loginRequest &&
      !signupRequest
    ) {
      res.status(400).send({ message: "token required" });
    }

    next();
  } catch (err) {
    throw err;
  }
};

module.exports = verifyToken;
