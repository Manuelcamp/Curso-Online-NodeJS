Este modulo do curso foi bem focado nos fundamentos do node.js e sobre modulos, agora segue o detalhamento de cada pasta:
1__ModuloInterno : Criamos um modulo interno, importamos, e usamos para uma função de soma, que recebe como parametro dois números.
2__ExportImport: é demonstrado uma novamo forma de fazer importação e exportação de modulos interno, simplificando a lógica e deixando em menos linhas.
3__CoreModules: Nesta pasta está uma simples demonstração importando e utilizando o modulo "path" para analisar qual a extensão de um arquivo, no caso o própio index.js.
4__TerminalArgs: Criamos um programa que pelo terminal lê e atribui valores a váriaveis e exibe depois no terminal, veja o arquivo e o faça o exemplo de acordo com você para entender melhor na pratica
5__ExternalModules: Utilizamso um external model chamado minimist para fazer o mesmo processo do terminalArgs de ler valores pelo terminal, porém, de maneira mais simples e didática.
6__PraticeArgsModule: Utilizamos um modulo interno junto com um externo, dando um resultado elegante para o código e evoluindo a prática e a noções de Node, lembrando que o código conta com um exemplo de terminal para execução.
7__StudyingConsole: Aprendendo sobre algumas funções do console além de imprimir, como contagem, imprimir mais de uma variáveis e também de limpar o terminal.
8__ConsoleChalk: Começamos Instalando o modulo Chalk na versão 4.1.2 para atender os requisitos do curso pelo comando: 
npm install chalk@4.1.2
Criamos um programa simples que lê a nota que já está definida, e com base nisso diz se foi aprovado ou não, usando o chalk para mudar as cores de fundo ou da letra no terminal
9__ReadingInputs: Começamos a ler inputs do usuário, criando um programa que lê e imprime de acordo com a resposta da pergunta, e uma condicional.
10__Inquirer: Abstração de input sendo trabalhada, criamos um programa que lê dados do usuário, e calcula a média de notas dele.
11__EventLoop:Programa simples demonstrando como o node executa em sequência por meio da criação de 3 funções simples.
12__EventEmitter: Criamos um evento customizado, e vemos novamente como funciona o sequencial do node.js.
13__AsyncSync: Criamos dois programas, onde um vemos a execução de uma função sicrona, onde o programa espera para ser finalizado só após ser executado a função também e na assicrona onde o programa não espera o timeout e executa o log("Fim") antes da função assicrona ser finalizada.
14__ErrosNode: Criamos dois programas, um testando o throw, e o outro o try_catch do node, executamos com o erro de proposito e mostramos o na tela.