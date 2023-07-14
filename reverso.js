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

/**
 * Translate a text with Reverso.net.
 * @param {String} input The input string.
 * @param {String} from The source language.
 * @param {String} to The target language.
 * @param {Object} options 
 *     @param {boolean} options.sentenceSplitter Indicates whether sentence splitting is enabled. Default value is false.
 *     @param {string} options.origin The origin of the data. Default value is "translation.web".
 *     @param {boolean} options.contextResults Indicates whether to include contextual results. Default value is false.
 *     @param {boolean} options.languageDetection Indicates whether language detection is enabled. Default value is false.
 * @returns {Promise<String>} The translated text
 */
const reverso = (
    input,
    from,
    to,
    options
) => new Promise((resolve, reject) => {
    const https = require("https");

    options = Object.assign({
        sentenceSplitter: false,
        origin: "translation.web",
        contextResults: false,
        languageDetection: false
    }, options);

    const playload = JSON.stringify({
        format: "text",
        from,
        to,
        input,
        options
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
            resolve(bodyParsed.translation[0], bodyParsed);
        });
    });

    req.on("error", (err) => reject(err));
    req.write(playload);
    req.end();
});

module.exports = { reverso, ReversoLanguages };
