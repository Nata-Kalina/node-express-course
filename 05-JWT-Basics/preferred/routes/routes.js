const express = require("express");
const router = express.Router();

const { logon, hello } = require("../controllers/controllers");

const authMiddleware = require("../middleware/auth");

router.route("/hello").get(authMiddleware, hello);
router.route("/logon").post(logon);

module.exports = router;
