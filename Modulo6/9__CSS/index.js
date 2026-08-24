const express = require('express')
const path = require('path')
const app = express()
const port = 3020

const users = require('./users')

const checkAuth = function(req, res, next){
    req.authStatus = true
    if(req.authStatus){
        next()
    }else{
        console.log('Não está logado, faça o login para continuar')
        next()
    }
}

app.use(checkAuth)

app.use(express.static('public'))

app.use(
    express.urlencoded({
        extended: true,
    })
)

const basePath = path.join(__dirname, 'templates')

app.use(express.json())

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})