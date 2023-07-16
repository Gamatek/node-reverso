# node-reverso

### Setup

* Dowload `reverso.js` from this github.
* `npm i axios`

### Usage
```js
const { reverso, ReversoLanguages } = require("./reverso");

reverso("Hello World", ReversoLanguages.English, ReversoLanguages.French).then((translation, res) => {
    console.log(translation);

    // Advance
    console.log(res);
}).catch((err) => {
    console.log(err);
};
```
