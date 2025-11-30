const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const textRoutes = require("./routes/textRoutes");
const imageRoutes = require("./routes/imageRoutes");
const sourceRoutes = require("./routes/sourceRoutes");

const app = express();

// Railway gives PORT automatically
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
}));

app.use(express.json());
app.use(fileUpload());

app.use("/api/text", textRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/source", sourceRoutes);

// HEALTH CHECK
app.get("/", (req, res) => {
    res.json({ status: "Backend running" });
});

app.listen(PORT, () => console.log("Server running on port", PORT));
