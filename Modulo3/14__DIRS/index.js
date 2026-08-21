const fs = require("fs")

if(!fs.existsSync('./minhapasta')){
    console.log("Não existe!")
    fs.mkdirSync("minhaPasta")
}

else if (fs.existsSync('./minhapasta')){
    console.log("Existe!")
}