const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/result4.json');

const condensor = item => {
    const {pileThickness} = item;
    const thickness = pileThickness;
    switch(thickness){
        case "0.50": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "0.25": item.trueThickness = thickness; item.pileThickness = "Thin"; break;
        case "3.00": item.trueThickness = thickness; item.pileThickness = "Extra Thick"; break;
        case "0.75": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "0.01": item.trueThickness = thickness; item.pileThickness = "Extra Thin"; break;
        case "0.20": item.trueThickness = thickness; item.pileThickness = "Thin"; break;
        case "0.40": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "1.60": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        case "0.13": item.trueThickness = thickness; item.pileThickness = "Extra Thin"; break;
        case "1.00": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        case "1.25": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        case "0.38": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "0.70": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        case "2.00": item.trueThickness = thickness; item.pileThickness = "Extra Thick"; break;
        case "0.39": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "0.30": item.trueThickness = thickness; item.pileThickness = "Thin"; break;
        case "0.60": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "2.20": item.trueThickness = thickness; item.pileThickness = "Extra Thick"; break;
        case "1.50": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        case "1.75": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        case "0.35": item.trueThickness = thickness; item.pileThickness = "Thin"; break;
        case "0.63": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "0.80": item.trueThickness = thickness; item.pileThickness = "Medium"; break;
        case "0.03": item.trueThickness = thickness; item.pileThickness = "Extra Thin"; break;
        case "0.06": item.trueThickness = thickness; item.pileThickness = "Extra Thin"; break;
        case "0.88": item.trueThickness = thickness; item.pileThickness = "Thick"; break;
        default: break;
    }
}

rugsJson.forEach(item => condensor(item));


fs.writeFile('/home/austin/Desktop/nodePractice/data/result5.json', util.inspect(JSON.stringify(rugsJson)), 'utf8', function(err){
    if(err){console.log(err)};
});