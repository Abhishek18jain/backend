module.exports = function scoringEngine(claim, results) {
    if (!claim || !Array.isArray(results)) return 0;

    const text = claim.toLowerCase();
    let score = 0;

    // FACT-CHECKERS (TIER-1)
    const factCheckers = [
        "altnews.in", "boomlive.in", "factcheck.afp.com", "snopes.com",
        "factcheck.org", "reuters.com/fact-check", "politifact.com",
        "africacheck.org", "fullfact.org", "newsmobile.in", "factly.in"
    ];

    // MAINSTREAM NEWS (TIER-2)
    const mainstreamNews = [
        "bbc.com", "cnn.com", "ndtv.com", "indiatoday.in",
        "thehindu.com", "timesofindia.com", "hindustantimes.com",
        "aljazeera.com", "reuters.com", "apnews.com",
        "theguardian.com", "indianexpress.com", "news18.com",
        "livemint.com", "deccanchronicle.com"
    ];

    // LOW-CREDIBILITY DOMAINS (TIER-7 Negative)
    const lowCredibilityTLD = [
        ".blogspot.com", ".wordpress.com", ".xyz", ".info", ".me",
        ".buzz", ".click", ".news", ".site"
    ];

    // CONTRADICTION TRIGGERS
    const negativeSignals = [
        "fake", "hoax", "debunked", "misleading", "false",
        "not true", "incorrect", "fabricated", "rumour", "rumor"
    ];

    let factSupport = 0, factDebunk = 0;
    let newsSupport = 0, newsContradict = 0;
    let mainstreamVolume = 0;
    let supportSemantic = 0, contradictSemantic = 0;

    // -------------------------------------
    // PROCESS RESULTS
    // -------------------------------------
    results.forEach((r) => {
        const link = (r.link || "").toLowerCase();
        const content = `${r.title || ""} ${r.snippet || ""}`.toLowerCase();

        const contradiction = negativeSignals.some(n => content.includes(n));

        // --------------------------
        // Tier-1: Fact-checker strong evidence
        // --------------------------
        if (factCheckers.some(fc => link.includes(fc))) {
            contradiction ? factDebunk++ : factSupport++;
        }

        // --------------------------
        // Tier-2: Mainstream news
        // --------------------------
        if (mainstreamNews.some(m => link.includes(m))) {
            mainstreamVolume++;
            contradiction ? newsContradict++ : newsSupport++;
        }

        // --------------------------
        // Tier-5: Semantic Claim Similarity
        // --------------------------
        const words = text.split(" ").filter(w => w.length > 3);
        let overlap = 0;

        words.forEach(w => {
            if (content.includes(w)) overlap++;
        });

        if (overlap > words.length / 2) supportSemantic++;
        if (contradiction) contradictSemantic++;

        // --------------------------
        // Tier-7: Low credibility penalty
        // --------------------------
        if (lowCredibilityTLD.some(tld => link.includes(tld))) {
            score -= 8;
        }
    });

    // --------------------------
    // SCORING WEIGHTS
    // --------------------------

    // Tier-1 (Fact-checkers)
    score += factSupport * 35;
    score -= factDebunk * 45;

    // Tier-2 (Mainstream)
    score += newsSupport * 15;
    score -= newsContradict * 20;

    // Tier-4 (Event detection via volume)
    if (mainstreamVolume >= 3) score += 20;
    if (mainstreamVolume >= 6) score += 35;
    if (mainstreamVolume >= 10) score += 50;

    // Tier-5 (Semantic similarity)
    score += supportSemantic * 8;
    score -= contradictSemantic * 12;

    // Tier-8 (Multi-source consistency)
    const totalSupport = factSupport + newsSupport + supportSemantic;
    const totalContradict = factDebunk + newsContradict + contradictSemantic;

    if (totalSupport >= 5) score += 20;
    if (totalContradict >= 5) score -= 25;

    // FINAL RANGE FIX
    if (score < 0) score = 0;
    if (score > 100) score = 100;

    return score;
};
