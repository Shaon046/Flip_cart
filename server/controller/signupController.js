//tested
const User = require("../Schema/user/userSchema");

const signupController = (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  user
    .save()
    .then(() => {
      res.status(201);
      res.send({ message: "user registered" });
    })
    .catch((err) => {
      res.status(400);
      res.send({ message: "user NOT registered", error: err.message });
    });
};

module.exports = signupController;
