//Mais de um valor imprimido
const x = 10
const y = "Jose"
const z = [1,2]
console.log(x,y,z)

//Contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//Variável entre string
console.log("O nome é %s, ele é programador", y)

// limpar o console
setTimeout(() => {
    console.clear()
}, 2000);