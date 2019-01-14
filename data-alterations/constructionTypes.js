const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/result5.json');

const constructor = item => {
    const { construction } = item;
    switch(construction){
        case "Hand Tufted": item.trueConstruction = construction; item.construction = "Tufted"; break;
        case "Hand Woven": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Power Loomed": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Hand Knotted": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Power-loomed": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Machine Made": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Hooked": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Hand Loomed": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Hand-Hooked": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Braided": item.trueConstruction = construction; item.construction = "Woven"; break;
        case "Hand-Tufted": item.trueConstruction = construction; item.construction = "Tufted"; break;
        case "N/A": rugsJson.splice(rugsJson.indexOf(item), 1); break;
        case "FLAT WOVEN DHURRY": item.trueConstruction = construction; item.construction = "Woven"; break;
        default: break;
    }
}

rugsJson.forEach(item => constructor(item));







fs.writeFile('/home/austin/Desktop/nodePractice/data/result6.json', util.inspect(JSON.stringify(rugsJson)), 'utf8', function(err){
    if(err){console.log(err)};
});