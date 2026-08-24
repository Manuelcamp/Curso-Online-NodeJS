const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//Define a pasta dos arquivos staticos
app.use(express.static('public'))
const produtos = [
        {
            name: "Naruto Shippuden",
            category:"Funko-POP",
            price: 40,
            id: 1,
        },
        {
            name: "Sasuke Shippuden",
            category:"Funko-POP",
            price: 40,
            id: 2
        },
        {
            name: "Sakura Shippuden",
            category:"Funko-POP",
            price: 40,
            id: 3
        },
         {
            name: "Kakashi Sussano",
            category:"Action-Figure",
            price: 200,
            id: 4
        },
    ]

app.get('/', (req, res) =>{
    res.render('home', {produtos})
})

app.get('/productSolo/:id', (req, res) =>{
    const id = req.params.id
    const produto = produtos[parseInt(req.params.id) - 1]
    if (!produto) {
        return res.status(404).send('Produto não encontrado')
    }
    res.render('productSolo', {produto})
})

app.listen(5020, () =>{
    console.log("Ao infinito e além!")
})