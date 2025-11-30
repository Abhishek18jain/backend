const axios = require("axios");

const GOOGLE_KEY = process.env.GOOGLE_SEARCH_API_KEY;
const GOOGLE_CX = process.env.GOOGLE_SEARCH_CX;

if (!GOOGLE_KEY) {
  console.log("❌ Missing GOOGLE_SEARCH_API_KEY in .env");
}
if (!GOOGLE_CX) {
  console.log("❌ Missing GOOGLE_SEARCH_CX in .env");
}
if (GOOGLE_KEY && GOOGLE_CX) {
  console.log("✅ Google Search API configured");
}
async function searchWeb(query) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          key: GOOGLE_KEY,
          cx: GOOGLE_CX,
          q: query,
        },
      }
    );

    return response.data.items || [];
  } catch (err) {
    console.error("Google Web Search Error:", err.response?.data || err);
    return [];
  }
}

async function searchImageURL(query) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          key: GOOGLE_KEY,
          cx: GOOGLE_CX,
          q: query,
          searchType: "image",
        },
      }
    );

    return response.data.items || [];
  } catch (err) {
    console.error("Google Image Search Error:", err.response?.data || err);
    return [];
  }
}

module.exports = { searchWeb, searchImageURL };
