# node-reverso

### Usage
```js
const { reverso, ReversoLanguages } = require("./reverso");

reverso("Hello World", ReversoLanguages.English, ReversoLanguages.French).then(({ translation ) => {
    console.log(translation[0]);
});
```

### Exemple Response Object
<details>
    <summary>Titre réduit</summary>
```json
{
    "id": "e8aeb41e-9cf6-4288-81a4-cbfae8195c76",
    "from": "eng",
    "to": "fra",
    "input": [
        "Hello World"
    ],
    "correctedText": null,
    "translation": [
        "bonjour tout le monde"
    ],
    "engines": [
        "Context"
    ],
    "languageDetection": {
        "detectedLanguage": "eng",
        "isDirectionChanged": false,
        "originalDirection": "eng-fra",
        "originalDirectionContextMatches": 816,
        "changedDirectionContextMatches": 0,
        "timeTaken": 217
    },
    "contextResults": {
        "rudeWords": false,
        "colloquialisms": false,
        "riskyWords": false,
        "results": [
            {
                "translation": "bonjour tout le monde",
                "sourceExamples": [
                    "Let us continue with the <em>Hello World</em> fax web application.",
                    "In our example, it prints the message <em>Hello World</em>.",
                    "You can see the output <em>Hello World</em> printed on the screen.",
                    "Write the sample implementation to always return \"<em>Hello World</em>\"."
                ],
                "targetExamples": [
                    "Continuons avec le <em>Bonjour tout le monde</em> application web de fax.",
                    "Dans notre exemple, il imprime le message <em>Bonjour tout le monde</em>.",
                    "Vous pouvez voir la sortie <em>Bonjour tout le monde</em> imprimé sur l'écran.",
                    "Écrivez l'exemple d'implémentation pour revenir toujours « <em>Bonjour tout le monde</em> »."
                ],
                "rude": false,
                "colloquial": false,
                "partOfSpeech": "adv.",
                "frequency": 254,
                "vowels": null,
                "transliteration": null
            },
            {
                "translation": "Bonjour le monde",
                "sourceExamples": [
                    "\"<em>Hello World</em>\" will be printed 8 times.",
                    "If you receive a little window saying <em>Hello World</em>!",
                    "All it does is display: <em>Hello World</em> using the PHP echo() statement."
                ],
                "targetExamples": [
                    "\"<em>Bonjour le monde</em>\" sera imprimé 8 fois.",
                    "Si vous recevez une petite fenêtre disant <em>Bonjour le monde</em> !",
                    "Elle ne fait qu'afficher <em>Bonjour le monde</em>, grâce à la fonction echo() de PHP."
                ],
                "rude": false,
                "colloquial": false,
                "partOfSpeech": null,
                "frequency": 58,
                "vowels": null,
                "transliteration": null
            },
            {
                "translation": "Bonjour monde",
                "sourceExamples": [
                    "<em>Hello World</em>!: Great for a morning shower.",
                    "<em>Hello World</em> I'm Baby Outfit.",
                    "A simple \"<em>Hello World</em>\" web page in Word is ten times bigger than it should be."
                ],
                "targetExamples": [
                    "<em>Bonjour monde</em>! : idéal pour une douche le matin.",
                    "<em>Bonjour monde</em> je suis tenue de bébé.",
                    "Dans Word, une simple page « <em>Bonjour monde</em> » est dix fois plus volumineuse qu'elle ne devrait l'être."
                ],
                "rude": false,
                "colloquial": false,
                "partOfSpeech": null,
                "frequency": 11,
                "vowels": null,
                "transliteration": null
            },
            {
                "translation": "Salut le monde",
                "sourceExamples": [],
                "targetExamples": [],
                "rude": false,
                "colloquial": false,
                "partOfSpeech": null,
                "frequency": 7,
                "vowels": null,
                "transliteration": null
            },
            {
                "translation": "Bonjour à tous",
                "sourceExamples": [],
                "targetExamples": [],
                "rude": false,
                "colloquial": false,
                "partOfSpeech": null,
                "frequency": 4,
                "vowels": null,
                "transliteration": null
            },
            {
                "translation": "Hello World",
                "sourceExamples": [],
                "targetExamples": [],
                "rude": false,
                "colloquial": false,
                "partOfSpeech": null,
                "frequency": 337,
                "vowels": null,
                "transliteration": null
            }
        ],
        "totalContextCallsMade": 1,
        "timeTakenContext": 0
    },
    "truncated": false,
    "timeTaken": 217
}
```
</details>
