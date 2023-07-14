const ReversoLanguages = {
    Arabic: "ara",
    Chinese: "chi",
    Czech: "cze",
    Danish: "dan",
    Dutch: "dut",
    English: "eng",
    French: "fra",
    German: "ger",
    Greek: "gre",
    Hebrew: "heb",
    Hindi: "hid",
    Hungarian: "hun",
    Italian: "ita",
    Japanese: "jpn",
    Korean: "kor",
    Persian: "per",
    Polish: "pol",
    Portuguese: "por",
    Romanian: "rum",
    Russian: "rus",
    Slovak: "slo",
    Spanish: "spa",
    Swedish: "swe",
    Thai: "tha",
    Turkish: "tur",
    Ukrainian: "ukr"
}

const reverso = (
    input,
    from,
    to,
    {
        sentenceSplitter = false,
        origin = "translation.web",
        contextResults = false,
        languageDetection = false
    }
) => new Promise((resolve, reject) => {
    const https = require("https");

    const playload = JSON.stringify({
        format: "text",
        from,
        to,
        input,
        options: {
            sentenceSplitter,
            origin,
            contextResults,
            languageDetection
        }
    });

    const req = https.request({
        hostname: "api.reverso.net",
        path: "/translate/v1/translation",
        method: "POST",
        headers: {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            "Content-Type": "application/json",
            "Content-Length": playload.length
        }
    }, (res) => {
        const chunks = [];
        res.on("error", (err) => reject(err));
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
            const bodyParsed = JSON.parse(Buffer.concat(chunks).toString("utf-8"));
            resolve(bodyParsed);
        });
    });

    req.on("error", (err) => reject(err));
    req.write(playload);
    req.end();
});

module.exports = { reverso, ReversoLanguages };
