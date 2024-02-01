var fs = require('fs');

const file_name1 = 'canada.txt';
const file_name2 = 'us.txt';

function addTitle(file_name){
    const title="country,year,population"
    fs.writeFileSync(file_name,title);
}

function addCanada(country, year, population){
    var country = `\n${country},${year},${population}`;
    fs.appendFileSync(file_name1,country);
}

function addUs(country, year, population){
    var country = `\n${country},${year},${population}`;
    fs.appendFileSync(file_name2,country);
}

addTitle(file_name1);
addTitle(file_name2);
addCanada('Canada', 2017, 36290000);
addCanada('Canada', 2018, 36690000);  
addCanada('Canada', 2019, 37060000);

addUs('United States', 2017, 325700000);
addUs('United States', 2018, 327200000);
addUs('United States', 2019, 328200000);
