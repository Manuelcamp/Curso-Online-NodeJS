Modulo 6 Iniciado com foco no Express, ensinando sobre rotas, integração com HTML, CSS, Post e URL.


1__EXPRESS---1__INSTAL: Começamos o módulo instalando em uma subspasta da pasta 1__EXPRESS o modulo express e também iniciando um projeto, comando: npm init -y / npm install express

2__SETUP: Tendo aprendido importa e iniciar o projeto, agora utilizamos as funções iniciais de rotear, criar a porta e vincular ao listen do app, entender oq é o app que é nada mais que inicializar o framework do express, e entender o req e o res para enviar dados ou receber.

3__HTML_EXPRESS: Criamos uma rota simple no sistema e mandamos um arquivo html para aparecer no servidor.

4__UPDATE_PROBLEM: Adicionamos um novo modulo nodemon para o problema de ter que reniciar o servidor
 depois de alterar alguma coisa nos arquivos do servidor, e colocamos um script de start com os seguintes parâmetros: "start": "nodemon ./index.js localhost 3020" e para rodar agora o servidor ao inves de usar o node index.js usamos npm start

 5__MIDDLEWARE: Ensinado a criação de middwlare, quando devemos ter etapas no processo, seja de autenticação ou outras situações para definir a continuidade do usuário.

 6__PARAM_URL: Foi ensinado sobre como criar diferentes rotas e rotas dinâmicas que aceitam diferentes parametros como argumento, tudo de maneira iniciante sem realmente ter consultas em Bancos de dados.

 7__POST_PARAMS: Criamos um formulário simples em HTML e ainda usando o conceitos de rotas para criar a rota até ele e pede o nome e a idade, e após isso exibimos no console uma mensagem com o nome e idade dos dados enviados.

 8__ROOTS_MODULE: Criamos uma pasta externa para rooteamento, onde ficam as rotas que o programa principal acessa, deixando menos linhas de código no programa principal.

 9__CSS: Foi ensinado sobre como adicionar links em principal o css para estilização das páginas em rota.

 10__404_PAGE: Foi criado uma página para quando o usuário digita qualquer coisa depois / a famosa página 404 NOT FOUND.