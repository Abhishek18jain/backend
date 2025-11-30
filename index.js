const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const textRoutes = require("./routes/textRoutes");
const imageRoutes = require("./routes/imageRoutes");
const sourceRoutes = require("./routes/sourceRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/api/text", textRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/source", sourceRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
