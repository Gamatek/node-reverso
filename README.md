# node-reverso

### Usage
```js
const { reverso, ReversoLanguages } = require("./reverso");

reverso("Hello World", ReversoLanguages.English, ReversoLanguages.French).then((result) => {
    console.log(result);
});
```
