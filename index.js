const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const textRoutes = require("./routes/textRoutes");
const imageRoutes = require("./routes/imageRoutes");
const sourceRoutes = require("./routes/sourceRoutes");

const app = express();
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

app.listen(PORT, () => console.log("Server running on port",  PORT));
