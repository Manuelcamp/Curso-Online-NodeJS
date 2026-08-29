Modulo 8 Iniciado! Sessão focada em como fazer a integração de Node.JS com MySQL, seja integrando o banco, fazendo deleções, inserindo e etc...

1__INSTALL_MYSQL: Instalando o MySQL e fazendo as configurações do ambiente para integração ao Node.JS, comandos utilizados: npm init -y , npm install express express-handlebars nodemon mysql

2__PUTTING_DATA: Fizemos inserção no banco de dados com Node.JS de forma básica, apenas um titulo, qtde de páginas de livro com o ID incrementável

3__READ_DATA: Agora uma nova visualização e rota, que puxa os dados do MySQL e apresenta para o usuário na tela já formatado.

4__PULLINGA_DATA:Criamos a possibilidade de pesquisar um livro por id, de forma dinâmica, seja clickando em cima do titulo do livro na aba livros, ou então pesquisando pela URL do próprio com o id depois de /books na página.

5__FORMULARY_DATA: Criamos um formulário de edição do livro, agora quando clickar em cima dele e entrar na página do próprio podera clickar no botão editar embaixo e ser redirecionado para uma página, onde pode atualizar, o nome e quantidade de páginas do livro.

6__DELETING_DATA:Criado a função de exclusão de maneira simples, apenas um botão de formulário com valor de excluir.

7__CONECTION_POOL:Trocamos a forma antiga de fazer a conexão com o banco de dados para uma melhor, onde fazemos um modulo de connection pool e exportamos apra o arquivo do index.js