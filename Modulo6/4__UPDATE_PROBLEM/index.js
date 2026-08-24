const express = require('express')
const path = require('path')

const basePath = path.join(__dirname, 'templates')

const app = express()
const port = 3020

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{

    console.log(`App rodando na porta: ${port}`)

})