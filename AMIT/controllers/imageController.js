const { searchImageBuffer } = require("../utils/googleApi.js");

exports.verifyImage = async (req, res) => {
  try {
    if (!req.files || !req.files.image)
      return res.status(400).json({ message: "Image required" });

    const imgBuffer = req.files.image.data;
    const matches = await searchImageBuffer(imgBuffer);

    return res.json({
      result: matches.length > 0 ? "NEEDS_VERIFICATION" : "UNKNOWN",
      matches,
    });
  } catch (err) {
    return res.status(500).json({ message: "Image verification failed" });
  }
};
