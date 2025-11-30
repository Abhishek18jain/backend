const express = require("express");
const { verifyImage } = require("../controllers/imageController");
const router = express.Router();

router.post("/verify", verifyImage);

module.exports = router;
