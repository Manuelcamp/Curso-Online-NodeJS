# 📦 Módulo 3

Este módulo foi focado principalmente em **Core Modules**: `http`, `path`, `fs`, `url`, dados de arquivos externos, entre outros. A seguir, a especificação de cada pasta e o conteúdo trabalhado:

## 🗃️ Conteúdo

### `1__HTTP`
Aprendemos os conceitos iniciais de resposta e query com Node puro, utilizando apenas a biblioteca `http` para a criação de um servidor web simples.

### `2__HTML`
Evoluímos a aplicação anterior, fazendo com que ela responda agora um HTML, permitindo o uso de tags de marcação.

### `3__URLMODULE`
Utilizamos o módulo `url` para fazer requisições a um endereço fictício, obtendo as informações que estavam na URL e exibindo-as na tela.

### `4__URLandHTTP`
Utilizamos o `url` para guardar uma variável de nome e exibir posteriormente na tela uma saudação de acordo com o nome enviado — dado como input pelo usuário, mas via um formulário HTML.

### `5__FSCORE`
Utilizamos ainda os conceitos de HTML, e novamente o módulo `fs`, para leitura de arquivos. Agora não enviamos apenas um texto, mas sim um arquivo HTML completo.

### `6__WRITINGArchives`
Agora, quando o usuário escreve o nome, ele é gravado em um arquivo `.txt` em vez de ser redirecionado para a página de saudação. Caso escreva novamente, o nome antigo é reescrito pelo novo valor enviado.

### `7__UPDATING_FILE`
Mesmo arquivo do exercício anterior, porém agora, quando o usuário informa um novo nome, ele não sobrescreve mais o conteúdo — em vez disso, escreve na próxima linha por meio de uma quebra de linha.

### `8__DELETING_FILE`
Criamos uma função simples com `fs` para remover um arquivo constante chamado `arquivo.txt`. Caso o arquivo não exista, um erro é lançado; caso exista, ele é removido pela função `unlink`, exibindo no terminal a mensagem: `"Arquivo Removido!"`.

### `9__RENAME_FILES`
Criamos um programa que lê duas variáveis — o nome antigo de um arquivo e o novo nome a ser atribuído — e, com isso, renomeia o arquivo usando a função `fs.rename`.

### `10__ROOTS`
Adicionamos rotas básicas e simples, em que o servidor `index.js` retorna arquivos HTML. Entre as rotas criadas estão: `index.html` (página principal), `contato.html` e `404.html` — que é exibida caso o usuário acesse um endereço `.html` que não exista. Um sistema bem simples e rápido, porém funcional.

### `11__FILES_DETAILS`
Como o nome sugere, obtemos os detalhes de um arquivo ou pasta a partir do caminho e nome informados, revelando se é um arquivo (retornando um `boolean`), se é um diretório, se é um link simbólico, a data de criação com horário e o tamanho.

### `12__PATH_MODULE`
Utilizamos o módulo `path` para verificar as informações de um caminho, obtendo dados como o caminho completo sem o nome do arquivo, somente o nome do arquivo e somente a extensão.

### `13__PATH_ABSOLUTE`
Aprendemos a criar, de forma dinâmica, um caminho para armazenar arquivos usando o módulo `path`, e também como obter o caminho 100% exato de um arquivo específico.

### `14__DIRS`
Criamos um algoritmo que verifica, de forma síncrona, se determinada pasta X existe. Caso não exista, ela é criada pelo método `mkdir` do `fs`; caso exista, o terminal exibe a mensagem `"Existe!"`.

### `15__MODULE_OS`
Utilizamos o módulo `os` para verificar a quantidade de CPUs da máquina, exibindo no terminal a quantidade de memória RAM livre, o diretório home da máquina e o sistema operacional.

### `CHALLENGE_1`
Utilizando o sistema de role play da Udemy, conversamos com uma I.A. que nos ensina a configurar um servidor simples, que retorna uma resposta em HTML utilizando o core module **Express**. Um desafio incrível e funcional!

---

✅ **MÓDULO 3 — FINALIZADO!**