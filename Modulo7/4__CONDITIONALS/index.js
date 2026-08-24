const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboards', (req, res) =>{
    res.render('dashboards')
})

app.get('/', (req, res) =>{

    const user ={
        name: "Matheus",
        sobrenome: "Batista",
        age: 30,
    }

    const palavra = 'Lamburger'

    const auth = true

    res.render('home', {user: user, palavra, auth})

})

app.listen(5020, () =>{
    console.log("App Funcionado")
})