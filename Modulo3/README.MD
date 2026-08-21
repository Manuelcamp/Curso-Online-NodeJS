Este modulo foi focado principalmente em Core Modules, http, path, fs, url, dados de arquivos externos dentre outros, segue a especificação de cada pasta e conteúdo trabalhado: 

1__HTTP: Aprendemos sobre os conceitos inicias de reposta e query com node puro e só a biblioteca HTTP para criação de um servidor web simples.

2__HTML: Evoluimos a aplicação anterior, fazendo com que ela responda agora um HTML, permitindo tags de marcação superiores!

3__URLMODULE: Utilizamos o module URL para fazermos requisições a um endereço ficticio das informações que estavam no url e exibindo na tela.

4__URLandHTTP: Utilizamos o URL para guarda uma váriavel nome e exibir posteriormente na tela uma saudação de acordo com o nome enviado na variável, sendo dado como um input pelo usuário, mas input em html.

5__FSCORE: Utilizamos os conceitos ainda de HTML, e novamente o Modulo FS, para leitura de arquivos, e agora não mandamos só um texto, mas sim um arquivo HTML.

6__WRITINGArchives: Agora quando o usuário escreve o nome, ele é escrito em um arquivo.txt, e não redirecionado para página de saudação, e caso escreva novamente, sera reescrito o nome antigo para o atual enviado.

7__UPDATING_FILE: Mesmo o arquivo que antes, porém, quando o usuário entrega um novo nome, ele não mais sobrescreve, mas sim, escreve na próxima linha por meio de uma quebra.

8__DELETING_FILE: Criamos uma função simples com fs para remover um arquivo constante chamado "arquivo.txt" caso não tenha arquivo ele lança um erro, e caso tenha, ele remove pela função unlink e exibe no terminal a mensagem: "Arquivo Removido!"

9__RENAME_FILES: Criamos um programa que lê duas váriaveis, um arquivo com nome antigo, e depois o novo nome para colocar nesse, e com isso ele renomeia esse arquivo pela função do fs.rename

10__ROOTS: Adicionamos rotas básicas e simples, em que o servidor index.js recebe arquivos html, dentre a rotas que criamos incluem 3, index.html sendo a page principal, contato.html e 404.html, caso escreva algo com um endereço que não exista e o .html no final ele te manda para essa página, foi um sistema bem simples e rápido, mas funcional.

11__FILES_DETAILS: Como o nome diz, pegamos os detalhes de algum arquivo ou pasta que passamos o endereço e o nome do arquivo ou pasta, revelando para nós se é um arquivo(devolvendo um boolean), se é um diretório, se é um link simbólico, a data de criação com o horário, e o tamanho.

12__PATH_MODULE: Utilizamos o modulo path para verificarmos a informação de um caminho, dando informações como o caminho completo sem o nome do arquivo, só o nome do arquivo do caminho, e somente a extensão do arquivo.