const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboards', (req, res) =>{
    const items = ['item a', 'item b','item c', 'item d']

    res.render('dashboards', {items})
})

app.get('/blogpost', (req, res) => {
    const post = {
        title: 'Aprender Java',
        category: 'Java',
        body: 'Este artigo fala sobre java...',
        comments: 4,
    } 

    res.render('blogpost', {post})
})


app.get('/blog', (req, res) =>{
    const posts = [
        {
            title: "Aprender Python",
            category: "Python",
            body: "Python é bom",
            comments: 12
        },
        {
            title: "Aprender Java",
            category: "Java",
            body: "Java é bom",
            comments: 1
        },
        {
            title: "Aprender Ruby",
            category: "Ruby",
            body: "Ruby é bom",
            comments: 100
        },
    ]
    res.render('blog', {posts})
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