const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/result2.json');

const sizeCatCondenser = item => {
    const { sizeCategory } = item;
    switch(sizeCategory){
        case '2 X 6': item.sizeCategory = "Runner"; break;
        case '2 X 8': item.sizeCategory = "Runner"; break;
        case '2 X 10': item.sizeCategory = "Runner"; break;
        case '2 X 12': item.sizeCategory = "Runner"; break;
        case '2 X 3': item.sizeCategory = "Small Area"; break;
        case '2 X 4': item.sizeCategory = "Small Area"; break;
        case '3 X 3': item.sizeCategory = "Small Area"; break;
        case '4 X 6': item.sizeCategory = "Small Area"; break;
        case '3 X 5': item.sizeCategory = "Small Area"; break;
        case '5 X 8': item.sizeCategory = "Medium Area"; break;
        case '6 X 9': item.sizeCategory = "Medium Area"; break;
        case '8 X 10': item.sizeCategory = "Large Area"; break;
        case '8 X 8': item.sizeCategory = "Large Area"; break;
        case '9 X 13': item.sizeCategory = "Extra Large Area"; break;
        case '12 X 15': item.sizeCategory = "Extra Large Area"; break;
        case '10 X 14': item.sizeCategory = "Extra Large Area"; break;
        case '5': item.sizeCategory = "Round"; break;
        case '8ft Round': item.sizeCategory = "Round"; break;
        case '10': item.sizeCategory = "Round"; break;
        case '3': item.sizeCategory = "Round"; break;
        default: break;
    }
}




rugsJson.forEach(item => {
    sizeCatCondenser(item);
});




fs.writeFile('/home/austin/Desktop/nodePractice/data/result3.json', util.inspect(JSON.stringify(rugsJson)), 'utf8', function(err){
    if(err){console.log(err)};
});