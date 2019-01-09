const fs = require('fs');
const util = require('util');
let rugsJson = require('../data/austindata.json');

const itemModifier = rug => {
    const {sizeCategory, sizeTrue} = rug;
    if(sizeCategory === '2 X 3' || sizeCategory === '2 X 5'){
        //set sizeCatergory to 2x4
        rug.sizeCategory = '2 X 4';
        return;
    } else if(sizeCategory === '3 X 5' && sizeTrue === '2-5 X 7-7'){
        //set sizeCategory to 2x8
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '3 X 5' && sizeTrue === '2-4 X 7-9'){
        //set sizeCategory to 2x8
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '3 X 5' && sizeTrue === '2-3 X 8-0'){
        //set sizeCategory to 2x8
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '4 X 6' && sizeTrue === "2-7 X 8-0"){
        //set sizeCategory to 2x8
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '4 X 6' && sizeTrue === '2-2 X 10'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '4 X 6' && sizeTrue === '2-7 X 8-0'){
        //set sizeCategory to 2x8
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '4 X 6' && sizeTrue === '2-7 X 8'){
        //set sizeCategory to 2x8
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '8 X 10' && sizeTrue === '9-6 X 13-6'){
        //set sizeCategory to 9x12
        rug.sizeCategory = '9 X 13';
        return;
    } else if(sizeCategory === '8 X 10' && sizeTrue === '9-6 X 12-6'){
        //set sizeCategory to 9x12
        rug.sizeCategory = '9 X 13';
        return;
    } else if(sizeCategory === '8 X 10' && sizeTrue === '9-6 X 13'){
        //set sizeCategory to 9x12
        rug.sizeCategory = '9 X 13';
        return;
    } else if(sizeCategory === '8'){
        //set sizeCategory to 8ft Round
        rug.sizeCategory = '8ft Round';
        return;
    } else if(sizeCategory === '9 X 12'){
        //set sizeCategory to 9x13
        rug.sizeCategory = '9 X 13';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '5-6 X 8-6'){
        //set sizeCategory to 6x9
        rug.sizeCategory = '6 X 9';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-7 X 10-0'){
        //set sizeCategory to 5x8
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-8 X 10-0'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-6 X 9-9'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-6 X 10-0'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-2 X 10-6'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-3 X 10-0'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '2 X 12' && sizeTrue === '2-8 X 10-6'){
        //set sizeCategory to 2x10
        rug.sizeCategory = '2 X 10';
        return;
    } else if(sizeCategory === '10 X 14' && sizeTrue === '8-6 X 11-6'){
        //set sizeCategory to 9x13
        rug.sizeCategory = '9 X 13';
        return;
    } else if(sizeCategory === '10 X 14' && sizeTrue === '9-8 X 12-8'){
        //set sizeCategory to 9x13
        rug.sizeCategory = '9 X 13';
        return;
    } else if(sizeCategory === '10 X 14' && sizeTrue === '13 X 18'){
        //set sizeCategory to 9x13
        rug.sizeCategory = '12 X 15';
        return;
    } else if(sizeCategory === '2 X 10' && sizeTrue === '2-6 X 7-6'){
        //set sizeCategory to
        rug.sizeCategory = '2 X 8';
        return; 
    } else if(sizeCategory === '2 X 10' && sizeTrue === '2-7 X 7-7'){
        //set sizeCategory to 
        rug.sizeCategory = '2 X 8';
        return;
    } else if(sizeCategory === '2 X 10' && sizeTrue === '2-6 X 7-9'){
        //set sizeCategory to
        rug.sizeCategory = '2 X 8';
        return; 
    } else if(sizeCategory === '2 X 10' && sizeTrue === '2-6 X 8-0'){
        //set sizeCategory to
        rug.sizeCategory = '2 X 8';
        return; 
    } else if(sizeCategory === '2 X 10' && sizeTrue === '3-3 X 6'){
        //set sizeCategory to
        rug.sizeCategory = '4 X 6';
        return; 
    } else if(sizeCategory === '2 X 10' && sizeTrue === '2-8 X 7-6'){
        //set sizeCategory to
        rug.sizeCategory = '2 X 8';
        return; 
    } else if(sizeCategory === '2 X 10' && sizeTrue === '2-6 X 7-7'){
        //set sizeCategory to
        rug.sizeCategory = '2 X 8';
        return; 
    }
};

rugsJson.forEach(item => itemModifier(item));



fs.writeFile('../data/result1.json', util.inspect(JSON.stringify(rugsJson)), 'utf8', function(err){
    if(err){console.log(err)};
});





/* 
fs.writeFile('../data/result1', rugsJson, 'utf8', function(err){
    if(err){console.log(err)};
});


if(sizeCategory === '2x3' || sizeCategory === '2x5'){
    //set sizeCatergory to 2x4
} else if(sizeCategory === '3x5' && sizeTrue === '2-5 X 7-7'){
    //set sizeCategory to 2x8
} else if(sizeCategory === '3x5' && sizeTrue === '2-4 X 7-9'){
    //set sizeCategory to 2x8
} else if(sizeCategory === '3x5' && sizeTrue === '2-3 X 8-0'){
    //set sizeCategory to 2x8
} else if(sizeCategory === '4x6' && sizeTrue === "2-7 X 8-0"){
    //set sizeCategory to 2x8
} else if(sizeCategory === '4x6' && sizeTrue === '2-2 X 10'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '4x6' && sizeTrue === '2-7 X 8-0'){
    //set sizeCategory to 2x8
} else if(sizeCategory === '4x6' && sizeTrue === '2-7 X 8'){
    //set sizeCategory to 2x8
} else if(sizeCategory === '8x10' && sizeTrue === '9-6 X 13-6'){
    //set sizeCategory to 9x12
} else if(sizeCategory === '8x10' && sizeTrue === '9-6 X 12-6'){
    //set sizeCategory to 9x12
} else if(sizeCategory === '8x10' && sizeTrue === '9-6 X 13'){
    //set sizeCategory to 9x12
} else if(sizeCategory === '8'){
    //set sizeCategory to 8ft Round
} else if(sizeCategory === '9x12'){
    //set sizeCategory to 9x13
} else if(sizeCategory === '2x12' && sizeTrue === '5-6 X 8-6'){
    //set sizeCategory to 6x9
} else if(sizeCategory === '2x12' && sizeTrue === '2-7 X 10-0'){
    //set sizeCategory to 5x8
} else if(sizeCategory === '2x12' && sizeTrue === '2-8 X 10-0'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '2x12' && sizeTrue === '2-6 X 9-9'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '2x12' && sizeTrue === '2-6 X 10-0'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '2x12' && sizeTrue === '2-2 X 10-6'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '2x12' && sizeTrue === '2-3 X 10-0'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '2x12' && sizeTrue === '2-8 X 10-6'){
    //set sizeCategory to 2x10
} else if(sizeCategory === '10x14' && sizeTrue === '8-6 X 11-6'){
    //set sizeCategory to 9x13
} else if(sizeCategory === '10x14' && sizeTrue === '9-8 X 12-8'){
    //set sizeCategory to 9x13
} else if(sizeCategory === '10x14' && sizeTrue === '13 X 18'){
    //set sizeCategory to 9x13
} else if(sizeCategory === '2x10' && sizeTrue === '2-6 X 7-6'){
    //set sizeCategory to 
} else if(sizeCategory === '2x10' && sizeTrue === '2-7 X 7-7'){
    //set sizeCategory to 
} else if(sizeCategory === '2x10' && sizeTrue === '2-6 X 7-9'){
    //set sizeCategory to 
} else if(sizeCategory === '2x10' && sizeTrue === '2-6 X 8-0'){
    //set sizeCategory to 
} else if(sizeCategory === '2x10' && sizeTrue === '3-3 X 6'){
    //set sizeCategory to 
} else if(sizeCategory === '2x10' && sizeTrue === '2-8 X 7-6'){
    //set sizeCategory to 
} else if(sizeCategory === '2x10' && sizeTrue === '2-6 X 7-7'){
    //set sizeCategory to 
} */