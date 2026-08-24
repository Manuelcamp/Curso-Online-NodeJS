const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboards', (req, res) =>{
    const items = ['item a', 'item b','item c', 'item d']
    res.render('dashboards', {items})
})

app.get('/', (req, res) =>{

    const user ={
        name: "Matheus",
        sobrenome: "Batista",
        age: 30,
    }

    const palavra = 'Lamburger'

    const auth = true

    const approved = true

    res.render('home', {user: user, palavra, auth, approved})

})

app.listen(5020, () =>{
    console.log("App Funcionado")
})