const _ = require('lodash');
const items = [
    1,
    [2, 3],
    [4, [5, [6]]]
];
console.log(items);
const newItems = _.flattenDeep(items);
console.log(newItems);