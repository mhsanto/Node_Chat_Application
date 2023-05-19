const bcrypt = require("bcrypt");
const User = require("../models/People");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const getLogin = (req, res, next) => {
  res.render("index");
};
// login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        const userObject = {
          username: user.name,
          mobile: user.mobile,
          email: user.email,
          role: "user",
        };
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });
        // set cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });
        res.locals.loggedInUser = userObject;
        res.render("inbox");
      } else {
        throw createError("Login Failed");
      }
    } else {
      throw createError("Login failed!Try again");
    }
  } catch (error) {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: {
        common: {
          msg: error.message,
        },
      },
    });
  }
};
function logout(req, res) {
  res.clearCookie(process.env.COOKIE_NAME);
  res.send("Logged out");
}
module.exports = {
  getLogin,
  login,
  logout,
};
