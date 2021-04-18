const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../content');
// console.log(filePath);
fs.readFile(filePath + "/first.txt", 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile(`${filePath}/second.txt`, 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(first, second);
        fs.writeFile(`${filePath}/result-async.txt`, `Here is the A-Sync result: ${first}, ${second} \n`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            } 
            console.log(result);
        });
    });
});
// console.log(first, second);
// fs.writeFileSync(filePath + "/result.txt", `The result is:  ${first} \n `, { flag: 'a' }); 