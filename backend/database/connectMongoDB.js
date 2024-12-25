const mongoose = require("mongoose");
const { userSchema, productSchema }= require("./schema.js");


const userCollection = "";
const productCollection = "";

async function connectMongoDb() {
    try {
        const connection = await mongoose.connect("db address goes here");
        console.log("database is connected");
    } catch (error) {
        console.log({'error': error})
    }
}

module.exports = connectMongoDb;

