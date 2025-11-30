const axios = require("axios");

exports.verifySource = async (req, res) => {
  try {
    const { url } = req.body;

    const whoisRes = await axios.get(
      `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.WHOIS_KEY}&domainName=${url}&outputFormat=JSON`
    );

    const age = whoisRes.data.WhoisRecord?.registryData?.domainAge || 0;

    return res.json({
      domainAge: age,
      safe: age > 2 ? "TRUE" : "FALSE",
      result: age > 2 ? "TRUE" : "FALSE",
    });
  } catch (err) {
    return res.status(500).json({ message: "Source verification failed" });
  }
};
