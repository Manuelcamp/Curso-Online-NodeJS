Módulo 4 Focado nos fundamentos de NPM 

1__PROJECT_CREATE: Começamos o módulo criando um projeto simples pelo comando npm init, e é explicado as bases dos arquivos json e o comando npm run test.

2__NPM_FAST_INIT: Foi demonstrado como iniciar um projeto de mandeira rápida no npm init, apenas colocando o -y na frente, fazendo dar yes para todas perguntas, comando completo: npm init -y


3__NPM_MODULES: npm install - Verifica todos os módulos que não tem e precisa, necessário para quando clona um projeto do gitHub. isso foi demonstrado utilizando o modulo lodash de maneira simples, e foi criado um algoritmo simples de diference entre dois conjutos e intersecção de dois conjutos, igual o modelo matemático, de maneira simples.

4__DEV_MODULES: foi demonstrado como deixar um modulo como uma dependência de apenas no ambiente de desenvolvimento como comando --save-dev e instalado o pacote chalk para demonstração do tal, exemplo de código: npm install --save-dev chalk, também foi demonstrado o comando npm update, npm update loadsh, que verifica o geral dos modulos se precisam de atualização no modulo ou especificamente no pacote passado a frente do update. 
e o comando npx npm-check-updates -u que verifica quais pacotes no total precisam de ultima versão por varredura.

5__SCRIPT_NPM: foi demonstrado como criar um script dentro do package.json, acrescentando uma linha de comando com a nomeclatura "start": "node index.js" / o start sinaliza qual comando é para rodar assim que der o comando de rodar o npm, no caso desse app, de inicializar o index.js 