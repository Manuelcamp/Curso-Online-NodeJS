const _ = require('lodash')

const arr = [1,2,3,4,5]
const arr2 = [2,3,6,7]
const diference = _.difference(arr, arr2)

console.log(diference)