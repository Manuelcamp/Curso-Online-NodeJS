const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(`Nome del é ${nome} e trabalha como ${profissao}`)

//Comando Terminal Exemplo:
//node index.js --nome=Manuel --profissao=JuniorDeveloper