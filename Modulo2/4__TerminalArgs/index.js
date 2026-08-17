console.log(process.argv)
const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1]

console.log(nome)

const idade = args[1].split("=")[1]

console.log(idade)

console.log(`Seu nome é ${nome} e você tem ${idade} anos`)

//node index.js nome=Manuel idade=30 
//Este foi o comando usado no terminal para aparecer, ajuste ao seu caso