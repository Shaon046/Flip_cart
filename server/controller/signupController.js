//tested
const User = require("../Schema/user/userSchema");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECTREAT = process.env.JWT_SECTREAT;

const signupController = (req, res) => {
  const token = jwt.sign({ email: req.body.email }, JWT_SECTREAT);

  const user = new User(req.body);
  console.log(req.body);
  user
    .save()
    .then(() => {
      res.cookie("auth", token).status(201);
      res.send({ message: "user registered" });
    })
    .catch((err) => {
      res.status(400);
      res.send({ message: "user NOT registered", error: err.message });
    });
};

module.exports = signupController;
