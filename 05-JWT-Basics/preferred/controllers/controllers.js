const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ msg: `Please provide name and password` });
    }
    const token = jwt.sign({ name }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
    return res.status(200).json(token);
  } catch (error) {}
};

const hello = async (req, res) => {
  try {
    //console.log(req.headers);
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: `Unathorized` });
    }
    const token = authHeader.split(" ")[1];
    //console.log(token);
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);
      res.status(200).json({ msg: `Hello, ${req.user.name}!` });
    } catch (error) {
      return res.status(401).json({ msg: `Unathorized` });
    }
  } catch (error) {}
};

module.exports = { logon, hello };
