const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRouter = require("./routes/auth.route");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/auth", authRouter);

app.listen(3000, () => {
    console.log("server is running");
});