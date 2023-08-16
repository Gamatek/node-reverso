# Reverso Translation

The `reverso` module provides a simple way to translate text using the Reverso.net API. It supports translation between various languages and provides options for enhancing translation quality.

## Installation

Before using the `reverso` module, make sure you have the required dependency installed in your project:

```bash
npm install axios
```

## Usage

1. Import the necessary constants and function:

```javascript
const { reverso, ReversoLanguages } = require('./reverso'); // Replace with the actual path
```

2. Choose the languages for translation using the `ReversoLanguages` constant:

```javascript
const sourceLanguage = ReversoLanguages.English;
const targetLanguage = ReversoLanguages.French;
```

3. Translate text using the `reverso` function:

```javascript
const inputText = "Hello, how are you?";
reverso(inputText, sourceLanguage, targetLanguage)
    .then(translation => {
        console.log(`Translation: ${translation}`);
    })
    .catch(error => {
        console.error('Translation error:', error);
    });
```

4. The `reverso` function takes an additional optional parameter, `options`, which allows you to customize translation behavior:

```javascript
const translationOptions = {
    sentenceSplitter: true,
    origin: "translation.web",
    contextResults: true,
    languageDetection: true
};

reverso(inputText, sourceLanguage, targetLanguage, translationOptions)
    .then(translation => {
        console.log(`Translation: ${translation}`);
    })
    .catch(error => {
        console.error('Translation error:', error);
    });
```

## Supported Languages

The `ReversoLanguages` constant provides language codes for various languages that are supported by the Reverso.net API. You can use these codes to specify the source and target languages for translation.
