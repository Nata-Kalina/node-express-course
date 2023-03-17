const jwt = require("jsonwebtoken");
const { CustomError } = require("../errors/custom-error");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("unathorized", 401)
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const { name } = decoded;
    req.user = { name };
    next();
  } catch (error) {
    throw new CustomError("Not authorized to access this route", 403);
  }
};

module.exports = authenticationMiddleware;