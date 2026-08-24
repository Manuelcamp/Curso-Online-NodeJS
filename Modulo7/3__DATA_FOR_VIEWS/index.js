const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{

    const user ={
        name: "Matheus",
        sobrenome: "Batista",
        age: 30,
    }

    const palavra = 'Lamburger'

    res.render('home', {user: user, palavra})

})

app.listen(5020, () =>{
    console.log("App Funcionado")
})