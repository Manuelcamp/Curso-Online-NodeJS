# 📦 Módulo 8

Módulo focado em como fazer a integração de Node.JS com **MySQL**, seja integrando o banco, fazendo deleções, inserindo dados, entre outros.

## 🗃️ Conteúdo

### `1__INSTALL_MYSQL`
Instalando o MySQL e realizando as configurações do ambiente para integração com o Node.JS. Comandos utilizados:

```bash
npm init -y
npm install express express-handlebars nodemon mysql
```

### `2__PUTTING_DATA`
Fizemos a inserção no banco de dados com Node.JS de forma básica: apenas um título e a quantidade de páginas do livro, com o `id` incrementável.

### `3__READ_DATA`
Criamos uma nova visualização e rota, que busca os dados no MySQL e os apresenta ao usuário na tela, já formatados.

### `4__PULLINGA_DATA`
Criamos a possibilidade de pesquisar um livro por `id`, de forma dinâmica — seja clicando em cima do título do livro na aba de livros, ou pesquisando pela URL, informando o `id` diretamente após `/books` na página.

### `5__FORMULARY_DATA`
Criamos um formulário de edição do livro. Agora, ao clicar sobre ele e entrar na página específica, é possível clicar no botão "editar" logo abaixo e ser redirecionado para uma página onde é possível atualizar o nome e a quantidade de páginas do livro.

### `6__DELETING_DATA`
Criada a função de exclusão de maneira simples, apenas com um botão de formulário com valor de "excluir".

### `7__CONECTION_POOL`
Trocamos a forma antiga de fazer a conexão com o banco de dados por uma melhor: criamos um módulo de **connection pool** e o exportamos para o arquivo `index.js`.

### `8__QUERY_INJECTION`
Utilizamos uma maneira de evitar o **SQL Injection**, substituindo os valores nas queries por `?` e passando, em constantes, os valores corretos para substituir os `?` nas queries.

---

✅ **MÓDULO 8 — FINALIZADO!**