const { searchWeb } = require("../utils/googleApi.js");
const scoringEngine = require("../utils/scoringEngine.js");

exports.verifyText = async (req, res) => {
  try {
    const { text } = req.body;

    const results = await searchWeb(text);
    const score = scoringEngine(text, results);

    return res.json({
      accuracy: score,
      result: score > 70 ? "TRUE" : score > 40 ? "NEEDS VERIFICATION" : "FALSE",
      sources: results.slice(0, 5),
    });
  } catch (err) {
    console.error("Verification error:", err);
    return res.status(500).json({ message: "Text verification failed" });
  }
};
