const jwt = require("jsonwebtoken");
const CustomError = require("../errors/custom-error");

const logon = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    throw new CustomError("Please provide email and password");
  }

  const token = jwt.sign({ name }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.status(200).json({ token });
  console.log(name, password);
  res.send("Fake Login");
};

const hello = async (req, res) => {
  res.status(200).json({
    msg: `Hello, ${req.user.name}!`,
  });
};

module.exports = {
  logon,
  hello,
};
