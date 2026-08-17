const chalk = require("chalk")

const nota = 10

if(nota >=7){
    console.log(chalk.green.bold("Parabéns! você está aprovado"))
}else{
    console.log(chalk.black.bgRed.bold('Você precisa fazer a prova de recuperação!'))
}
