///tested
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const auth = require("./auth/Auth-JWT.js");
try {
  app.use(express.json());
  app.use(auth);
  //////Database Connection
  mongoose
    .connect(
      "mongodb+srv://shaon046:VhN0ejESv1UbGwXH@mycluster.avivtrp.mongodb.net/Ecom?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database is connected"))
    .catch(() => console.log("Database not connected"));

  //////ROUTES
  const login = require("./routes/login/login.js");
  const signup = require("./routes/signup/signup.js");

  app.use(login);
  app.use(signup);

  app.listen(3000, () => {
    console.log("server is live");
  });
} catch (err) {
  throw err;
}
