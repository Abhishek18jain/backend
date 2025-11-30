const express = require("express");
const { verifySource } = require("../controllers/sourceController");
const router = express.Router();

router.post("/verify", verifySource);

module.exports = router;
