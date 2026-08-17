# 📦 Módulo 2

Este módulo do curso foi bem focado nos **fundamentos do Node.js** e sobre **módulos**. A seguir, o detalhamento de cada pasta:

## 🗃️ Conteúdo

### `1__ModuloInterno`
Criamos um módulo interno, importamos e usamos para uma função de soma, que recebe como parâmetro dois números.

### `2__ExportImport`
É demonstrada uma nova forma de fazer importação e exportação de módulos internos, simplificando a lógica e deixando o código em menos linhas.

### `3__CoreModules`
Nesta pasta está uma simples demonstração importando e utilizando o módulo `path` para analisar qual a extensão de um arquivo — no caso, o próprio `index.js`.

### `4__TerminalArgs`
Criamos um programa que, pelo terminal, lê e atribui valores a variáveis e os exibe depois no terminal. Veja o arquivo e faça o exemplo de acordo com você para entender melhor na prática.

### `5__ExternalModules`
Utilizamos um módulo externo chamado `minimist` para fazer o mesmo processo do `TerminalArgs` — ler valores pelo terminal —, porém de maneira mais simples e didática.

### `6__PraticeArgsModule`
Utilizamos um módulo interno junto com um externo, dando um resultado elegante para o código e evoluindo a prática e as noções de Node. O código conta com um exemplo de execução via terminal.

### `7__StudyingConsole`
Aprendendo sobre algumas funções do `console` além de imprimir, como contagem, impressão de mais de uma variável e também limpeza do terminal.

### `8__ConsoleChalk`
Começamos instalando o módulo **Chalk** na versão `4.1.2`, para atender os requisitos do curso:

```bash
npm install chalk@4.1.2
```

Criamos um programa simples que lê uma nota já definida e, com base nisso, diz se o aluno foi aprovado ou não, usando o Chalk para mudar as cores de fundo ou da letra no terminal.

### `9__ReadingInputs`
Começamos a ler inputs do usuário, criando um programa que lê e imprime de acordo com a resposta da pergunta, utilizando também uma condicional.

### `10__Inquirer`
Abstração de input sendo trabalhada. Criamos um programa que lê dados do usuário e calcula a média das suas notas.

### `11__EventLoop`
Programa simples demonstrando como o Node executa em sequência, por meio da criação de 3 funções simples.

### `12__EventEmitter`
Criamos um evento customizado e vemos novamente como funciona a execução sequencial do Node.js.

### `13__AsyncSync`
Criamos dois programas: em um, vemos a execução de uma função **síncrona**, onde o programa espera ela ser finalizada para então continuar. No outro, a execução é **assíncrona**, onde o programa não espera o `timeout` e executa o `console.log("Fim")` antes da função assíncrona ser finalizada.

### `14__ErrosNode`
Criamos dois programas: um testando o `throw`, e o outro o `try/catch` do Node. Executamos com o erro de propósito e o exibimos na tela.

### `Desafio__1`
Para a resolução do desafio, usaremos novamente a biblioteca **Inquirer**, na versão `8.1.2`:

```bash
npm install inquirer@8.1.2
```

E também a biblioteca **Chalk**:

```bash
npm install chalk@4.1.2
```

Usaremos todas as ferramentas aprendidas nas aulas anteriores para fazer duas perguntas ao usuário, como se fosse um "cadastro": primeiro o nome, depois a idade. Após isso, exibiremos no terminal os respectivos dados com fundo amarelo e fonte preta.

---

✅ **MÓDULO 2 — FINALIZADO!**