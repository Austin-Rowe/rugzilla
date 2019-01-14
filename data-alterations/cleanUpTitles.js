const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/result7.json');


const rugsJsonModded = rugsJson.filter(item => item.availableQuantity > 5 && item.availableQuantity < 15 && item.images.length >= 3);

console.log(rugsJsonModded[0])
console.log(rugsJson.length);
console.log(rugsJsonModded.length);


fs.writeFile('/home/austin/Desktop/nodePractice/data/result8.json', util.inspect(JSON.stringify(rugsJsonModded)), 'utf8', function (err) {
    if (err) { console.log(err) };
});







