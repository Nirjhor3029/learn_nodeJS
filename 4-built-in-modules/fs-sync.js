const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../content');
// console.log(filePath);
console.log("Start.");
const first = fs.readFileSync(filePath + "/first.txt", 'utf8');
const second = fs.readFileSync(filePath + "/second.txt", 'utf8');
// console.log(first, second);
// fs.writeFileSync(filePath + "/result.txt", 'The result is: ' + first);
fs.writeFileSync(filePath + "/result.txt", `The result is:  ${first} \n `, { flag: 'a' }); //flag a means append.

console.log("Done with this task.");
console.log("starting the next one.");