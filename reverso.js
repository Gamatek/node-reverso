const axios = require("axios");

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
};

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
 * @returns {Promise<String>} Translation from your test.
 */
const reverso = (input, from, to) => new Promise((resolve, reject) => {
    axios("https://api.reverso.net/translate/v1/translation", {
        method: "POST",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        },
        data: {
            format: "text",
            from,
            to,
            input,
            options: {
                sentenceSplitter: true,
                origin: "translation.web",
                contextResults: true,
                languageDetection: true
            }
        }
    }).then((res) => {
        const { translation } = res.data;
        resolve(translation.join(""), res);
    }).catch(reject);
});

module.exports = { reverso, ReversoLanguages };
