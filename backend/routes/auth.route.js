const express = require("express");

const route = express.Router();

route.post("auth/signup", async (req, res) => {
  try {
    var incomingUser = req.body;
    if (
      incomingUser.name === undefined ||
      incomingUser.username == undefined ||
      incomingUser.email == undefined ||
      incomingUser.password == undefined
    ) {
      //pass for now
    }
    if (incomingUser.username.length < 2) {
      //notify the use that the username is not long enough
    }
    var emailRegEx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    var regExResult = emailRegEx.test(incomingUser.email);
    if (!regExResult) {
      //notify the user that the email format is not correct
    }
    const newUser = {
      name: incomingUser.name,
      username: incomingUser.username,
      email: incomingUser.email,
      password: incomingUser.password,
      //add default values for the rest of the properties in the schemaÍ
    };

    //check if the username is already taken -> tricky
    //check if the user already exists in the database using its email
    //register the user
    //hash the password
    //register the user
    //return the necassary information
  } catch (error) {}
});

route.get("/signin", (req, res) => {});

route.post("/resetPassword", (req, res) => {});
