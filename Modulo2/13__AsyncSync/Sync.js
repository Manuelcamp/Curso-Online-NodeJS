const fs = require("fs")

console.log("Start")

fs.writeFileSync("arquivo.txt", 'oi')

console.log('Fim')