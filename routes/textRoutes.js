const express = require("express");
const { verifyText } = require("../controllers/textController");
const router = express.Router();

router.post("/verify", verifyText);

module.exports = router;
