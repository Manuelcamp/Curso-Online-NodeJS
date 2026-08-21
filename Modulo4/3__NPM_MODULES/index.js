const _ = require('lodash')
// o Lodash é o _ de comum uso de nomeclatura para quando importado

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)
const intersection = _.intersection(a, b)
console.log(diff)
console.log(intersection)