const path = require("path")

//Path Absolute
console.log(path.resolve('teste.txt'))

//Formar Path
const midFolder = "relatorios"
const fileName= "matheus.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)