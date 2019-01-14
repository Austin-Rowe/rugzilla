const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/result1.json');

rugsJson.forEach(item => { item.price = parseInt(item.price)});

fs.writeFile('/home/austin/Desktop/nodePractice/data/result2.json', util.inspect(JSON.stringify(rugsJson)), 'utf8', function(err){
    if(err){console.log(err)};
});  

