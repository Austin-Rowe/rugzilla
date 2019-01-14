const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/result3.json');

const materialCondenser = item => {
    const {material} = item;
    switch( material ){
        case "100% POLY-ACRYLIC": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% WOOL": item.madeOf = material; item.material = "Natural"; break;
        case "100% COTTON": item.madeOf = material; item.material = "Natural"; break;
        case "100% Wool": item.madeOf = material; item.material = "Natural"; break;
        case "100% POLYESTER": item.madeOf = material; item.material = "Synthetic"; break;
        case "Polypropylene & Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Wool Pile": item.madeOf = material; item.material = "Natural"; break;
        case "Polypropylene | Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "80% Wool / 20% Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "100% WOOL WEAVE": item.madeOf = material; item.material = "Natural"; break;
        case "Jute | Cotton": item.madeOf = material; item.material = "Natural"; break;
        case "100% JUTE": item.madeOf = material; item.material = "Natural"; break;
        case "Wool | Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "Hand Spun Viscose From Bamboo": item.madeOf = material; item.material = "Synthetic"; break;
        case "50% Polypropylene / 50% Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Jute": item.madeOf = material; item.material = "Natural"; break;
        case "100% WOOL.": item.madeOf = material; item.material = "Natural"; break;
        case "100% Polypropylene": item.madeOf = material; item.material = "Synthetic"; break;
        case "Wool | Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "65% Wool / 35% Polyester": item.madeOf = material; item.material = "Mixed"; break;
        case "100% Acrylic": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "85% Viscose, 15% Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% POLYESTER MICROFIBER": item.madeOf = material; item.material = "Synthetic"; break;
        case "Microfiber | Polyester | Lurex": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% FELTED NEW ZEALAND WOOL": item.madeOf = material; item.material = "Natural"; break;
        case "100% Poly-Acrylic": item.madeOf = material; item.material = "Synthetic"; break;
        case "BLEND: 70% Wool Viscose Blend - 30% New Zealand Wool": item.madeOf = material; item.material = "Mixed"; break;
        case "New Zealand Wool | Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "Animal Hide / Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "Polyester | Cotton": item.madeOf = material; item.material = "Mixed"; break;
        case "50% Jute / 50% Leather Hemp": item.madeOf = material; item.material = "Natural"; break;
        case "WOOL & VISCOSE": item.madeOf = material; item.material = "Mixed"; break;
        case "85% Wool / 15% Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "100% New Zealand Hand-Spun Wool": item.madeOf = material; item.material = "Natural"; break;
        case "100% Bamboo Silk": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Viscose from Bamboo": item.madeOf = material; item.material = "Synthetic"; break;
        case "85% Viscose from Bamboo | 15% Cotton": item.madeOf = material; item.material = "Mixed"; break;
        case "Acrylic | Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "Polyester | Wool": item.madeOf = material; item.material = "Mixed"; break;
        case "100% Sari Art Silk": item.madeOf = material; item.material = "Synthetic"; break;
        case "FELTED NEW ZEALAND WOOL SHAG": item.madeOf = material; item.material = "Natural"; break;
        case "Felted New Zealand Wool Shag": item.madeOf = material; item.material = "Natural"; break;
        case "Jute | Wool | Cotton": item.madeOf = material; item.material = "Natural"; break;
        case "Poly-Acrylic Fur": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% ACRYLIC": item.madeOf = material; item.material = "Synthetic"; break;
        case "Seagrass | Cotton": item.madeOf = material; item.material = "Natural"; break;
        case "70% Sisal / 30% Cotton": item.madeOf = material; item.material = "Natural"; break;
        case "100% Viscose": item.madeOf = material; item.material = "Synthetic"; break;
        case "Wool | Cotton": item.madeOf = material; item.material = "Natural"; break;
        case "100% Viscose From Bamboo": item.madeOf = material; item.material = "Synthetic"; break;
        case "Wool | Silk | Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "FELTED NEW ZEAL WL/POLYESTR WV": item.madeOf = material; item.material = "Mixed"; break;
        case "Felted New Zeal Wool | Polyester wv": item.madeOf = material; item.material = "Mixed"; break;
        case "Recycled Wool Sweater": item.madeOf = material; item.material = "Natural"; break;
        case "Chenille | Polypropylene": item.madeOf = material; item.material = "Mixed"; break;
        case "Polyester | Polypropylene": item.madeOf = material; item.material = "Mixed"; break;
        case "50% WOOL 50% VISCOSE": item.madeOf = material; item.material = "Mixed"; break;
        case "Polypropylene | Viscose": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Microfiber-Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "Viscose | Wool | Polyester": item.madeOf = material; item.material = "Mixed"; break;
        case "83% Polypropylene, 17% Acrylic": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Polyester Microfiber": item.madeOf = material; item.material = "Synthetic"; break;
        case "55% Viscose / 45% Cotton": item.madeOf = material; item.material = "Mixed"; break;
        case "100% VISCOSE": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% Hand Spun Vegetable Dyed Wool": item.madeOf = material; item.material = "Natural"; break;
        case "100% WOOL LOOP": item.madeOf = material; item.material = "Natural"; break;
        case "100% New Zealand Wool": item.madeOf = material; item.material = "Natural"; break;
        case "100% NEW ZEALAND WOOL": item.madeOf = material; item.material = "Natural"; break;
        case "Polypropylene": item.madeOf = material; item.material = "Synthetic"; break;
        case "100% RUBBER": item.madeOf = material; item.material = "Synthetic"; break;
        case "Wool | Viscose from Bamboo": item.madeOf = material; item.material = "Mixed"; break;
        case "Jute | Wool": item.madeOf = material; item.material = "Natural"; break;
        case "100% VINYL": item.madeOf = material; item.material = "Synthetic"; break;
        case "10% RUBBER, 90% FELT": item.madeOf = material; item.material = "Synthetic"; break;
        case "10% Rubber | 90% Felt": item.madeOf = material; item.material = "Synthetic"; break;
        case "60% Wool / 40% Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "JUTE AND COTTON": item.madeOf = material; item.material = "Natural"; break;
        case "100% COWHIDE": item.madeOf = material; item.material = "Natural"; break;
        case "100% Cowhide": item.madeOf = material; item.material = "Natural"; break;
        case "100% Silk Sari": item.madeOf = material; item.material = "Natural"; break;
        case "100% Felted New Zealand Wool": item.madeOf = material; item.material = "Natural"; break;
        case "COTTON WITH POLYESTER BACK": item.madeOf = material; item.material = "Mixed"; break;
        case "70% Jute / 30% Wool": item.madeOf = material; item.material = "Natural"; break;
        case "Wool | Sari Silk": item.madeOf = material; item.material = "Natural"; break;
        case "80% Wool / 20% Jute": item.madeOf = material; item.material = "Natural"; break;
        case "90% Felted New Zealand Wool / 10% Cotton": item.madeOf = material; item.material = "Natural"; break;
        case "Felted New Zealand Wool Blend": item.madeOf = material; item.material = "Natural"; break;
        case "SISAL/NATURAL COWHIDE": item.madeOf = material; item.material = "Natural"; break;
        case "Sisal | Natural Cowhide": item.madeOf = material; item.material = "Natural"; break;
        case "100% Microfiber Polyester": item.madeOf = material; item.material = "Synthetic"; break;
        case "NEW ZEALAND WOOL/VISCOSE PILE": item.madeOf = material; item.material = "Mixed"; break;
        case "75% Wool / 25% Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "Wool & Viscose": item.madeOf = material; item.material = "Mixed"; break;
        case "50% Wool / 50% Sari": item.madeOf = material; item.material = "Natural"; break;
        case "80% Wool / 20% Jute ": item.madeOf = material; item.material = "Natural"; break;
        default: break;
    }
}


rugsJson.forEach(item => materialCondenser(item));



fs.writeFile('/home/austin/Desktop/nodePractice/data/result4.json', util.inspect(JSON.stringify(rugsJson)), 'utf8', function(err){
    if(err){console.log(err)};
});