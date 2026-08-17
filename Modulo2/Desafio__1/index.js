const inquirer = require('inquirer')
const chalk = require("chalk")

inquirer.prompt([{
    name: 'nome', 
    message: 'Qual seu nome?'
},
{
    name: 'idade',
    message: 'Qual sua idade?',
},
]).then((answers) =>{
    const nome = answers.nome;
    const idade = parseInt(answers.idade);
    if(!answers.nome || !answers.idade){
        throw new Error('O nome e idade são obrigatórios!')
    }
    if(!Number.isInteger(idade)){
        throw new Error("Sua idade precisar ser um número inteiro")
    }
    console.log(chalk.bgYellow.black(`Registrado com sucesso! \n Nome: ${nome} \n Idade:${idade}`));
}).catch(err => console.log(err))