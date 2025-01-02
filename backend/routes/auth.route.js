const express = require("express");
const bcrypt = require("bcrypt");
const {connectMongoDb, userCollection} = require("../database/connectMongoDB");

const router = express.Router();

connectMongoDb();

router.post("auth/signup", async (req, res) => {
  try {
    var incomingUser = req.body;
    if (
      incomingUser.name === undefined ||
      incomingUser.username == undefined ||
      incomingUser.email == undefined ||
      incomingUser.password == undefined
    ) {
      //notify the user that there is a blank section
    }
    if (incomingUser.username.length < 2) {
      //notify the user that the username is not long enough
    }

    if (incomingUser.password.length < 8) {
      //notify the user that the password is not long enough
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
    //check if the user already exists in the database using its email
    const initialQuery = await userCollection.findOne({email: newUser.email})
    if (initialQuery)
    {
      //notify the user that the username is already taken
    }
    //check if the username is already taken -> tricky
    const secondQuery = await userCollection.findOne({username: newUser.username});
    if (secondQuery)
    {
        //notify the user that the username is already taken
    }
    //hash the password
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        
      })
    })
    //register the user
    //return the necassary information
  } catch (error) {}
});

router.get("/signin", (req, res) => {});

router.post("/resetPassword", (req, res) => {});

module.exports = router;
