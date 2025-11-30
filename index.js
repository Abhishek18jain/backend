const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// Routes
const textRoutes = require("./routes/textRoutes");
const imageRoutes = require("./routes/imageRoutes");
const sourceRoutes = require("./routes/sourceRoutes");

const app = express();

// ----- CORS FIX (DO NOT MODIFY) -----
app.use(cors());


// ----- BODY + FILE PARSING (ORDER MAT BIGAARNA) -----
app.use(express.json());
app.use(fileUpload());

// ----- ROUTES -----
app.use("/api/text", textRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/source", sourceRoutes);

// ----- HEALTH CHECK -----
app.get("/", (req, res) => {
  res.json({ status: "Backend running" });
});

// ----- SERVER -----
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
