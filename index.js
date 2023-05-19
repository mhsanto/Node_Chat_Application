//external imports
const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");
//internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();

//mongo database setup
mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() =>
    console.log(`Database connection successfully ${process.env.MONGO_SERVER}`)
  )
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
//set static folder
app.use(express.static(path.join("public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));
//routes
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 error handler
app.use(notFoundHandler);
//common error handler
app.use(errorHandler);
//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
