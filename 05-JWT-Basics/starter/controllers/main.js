//chesk username, password in post(login) request in req.body
//if both of them exist create new JWT, if no send back the error response
//send back to front end
//setup authentication so only the request with JWT can access the dashboard

//to check whether the username and the password have been provided we have 3 options:
//1. Mongoose required validation; if the value is not present it throws the errror
//2. To set up the entire additional layer of validation using joi package
//3. Checking the both of these values here using if statement

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(username, password);
  res.status(200).json({ msg: "User created!", token });
};

const dashboard = async (req, res) => {
  //console.log(req.headers);
  //console.log(token);
  //console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}!`,
    secret: `Here is your lil secret, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
