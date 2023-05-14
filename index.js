const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const app = express();
//mongo database setup
mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("set view engine", "ejs");
//set static folder
app.use(express.static(path.join("public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));
//routes

//error handler

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
