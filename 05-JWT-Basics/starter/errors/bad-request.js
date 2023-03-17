const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.ctatusCode = StatusCodes.BAD_REQUEST;
    // this.statusCode = resultCode;
  }
}

module.exports = BadRequest;
