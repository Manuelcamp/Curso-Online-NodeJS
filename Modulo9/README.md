Modulo 9 Iniciado, focado no Modulo Externo Sequelize e suas operações

1__INSTALL_SEQUELIZE: Reutilizamos o projeto final do modulo 9, com apenas o detalhe de instalarmos o sequelize e desinstalar o drive do SQL, comando utilizado: npm install sequelize / npm install mysql2

2__CREATING_MODEL:Criamos o primeiro modelo, sendo o User, que já faz conexão com o banco de dados, e caso não tenha no BD ele já cria. 

3__PUTTING_DATA:Criamos uma view para um formulário permitindo que usuário escreva os dados de um usuário, nome, ocupação, e se gostaria de receber promoções, após isso criamos a rota e os métodos no index.js e concluimos mais uma etapa.

4__PULL_DATA:Colocamso na view home a possibilidade de puxar os dados do banco de dados sobre o usuário e divi-los em caixas apenas com o nom por enquanto.

5__WHERE: Criamos a opção de ao aparecer a lista de usuários estar disponível o botão: ver detalhes, redirecionando para uma página com o usuário escolhido com mais detalhes

6__REMOVING_DATA:Agora criamos um botão excluir dentro da rota home, e podemos excluir com base no id.

7__UPDATE_FILES: Opção de atualizar os dados de determinado usuário criada, agora com isso, é possivel mudar dados como o nome, a profissão, e se ele quer receber ou não as promoções, inclusive arrumado o bug newsLetter, onde não está sendo enviada para o banco de dados devido a um erro de sintaxe.