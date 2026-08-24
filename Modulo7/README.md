# 📦 Módulo 7

Módulo focado em **Template Engine** com Express, criando layouts, dados para views, CSS com Handlebars, entre outros.

```js
app.engine('handlebars', exphbs.engine())
```

## 🗃️ Conteúdo

### `1__INSTAL_HANDLEBAR`
Começamos instalando os módulos e iniciando o projeto:

```bash
npm init -y
npm install nodemon express express-handlebars
```

Adicionamos o script de start no `package.json` e fizemos o setup inicial do projeto.

### `2__CREATING_LAYOUTS`
Criado o layout inicial, além de vermos como funciona a herança de atributos de uma view para outra, definindo a view principal. Aprendemos os conceitos principais do Handlebars integrado ao Express.

### `3__DATA_FOR_VIEWS`
Aprendemos como enviar dados do back-end para o front-end de maneira simples.

### `4__CONDITIONALS`
Utilizamos condicionais com a variável `auth` para omitir ou exibir conteúdo de acordo com seu valor — quando `true`, o conteúdo era exibido através do `if` no `home.handlebars`.

### `5__ELSE_HANDLEBAR`
Aprendemos a utilizar o `else` no Handlebars, com condicionais definidas no Express e enviadas para o front-end.

### `6__REPEAT`
Aprendemos a estrutura de repetição `each` no Handlebars, para exibição de dados de maneira dinâmica.

### `7__WITH`
Utilizamos a função `with` para acessar um objeto sem precisar repetir seu nome, informando apenas os atributos.

### `8__PARTIALS`
Apresentada e demonstrada a função `partials`, usada para repetição da visualização de dados. Uma ferramenta versátil e útil para conteúdos que aparecem mais de uma vez, alterando apenas as informações.

### `9__CSS_HANDLEBARS`
Utilizamos CSS junto ao Handlebars para criar um padrão de estilo entre todos os HTMLs — versátil e rápido!

### `CHALLENGE__1`
Criamos um site usando CSS, Express, Handlebars e Views, exibindo uma página inicial (home) com uma lista de produtos. Ao clicar no botão de comprar, o usuário é redirecionado para a página daquele produto específico, direcionado pelo seu `id`.

---

✅ **MÓDULO 7 — FINALIZADO!**