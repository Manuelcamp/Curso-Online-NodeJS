//Como ler um arquivo usando um módulo próprio do node.js

const fs = require('fs');
fs.readFile('arquivo.txt', 'utf-8', (err, data) => {

    if(err){
        console.log(err)
    }
    console.log(data)

})