# 📦 Módulo 6

Módulo iniciado com foco no **Express**, ensinando sobre rotas, integração com HTML, CSS, requisições `POST` e URL.

## 🗃️ Conteúdo

### `1__EXPRESS---1__INSTAL`
Começamos o módulo instalando, em uma subpasta da pasta `1__EXPRESS`, o módulo Express, além de iniciar o projeto:

```bash
npm init -y
npm install express
```

### `2__SETUP`
Tendo aprendido a importar e iniciar o projeto, agora utilizamos as funções iniciais de roteamento, criação da porta e vinculação ao `listen` do `app`. Entendemos o que é o `app` — nada mais do que a inicialização do framework Express — além dos objetos `req` e `res`, usados para receber e enviar dados.

### `3__HTML_EXPRESS`
Criamos uma rota simples no sistema e enviamos um arquivo HTML para ser exibido no servidor.

### `4__UPDATE_PROBLEM`
Adicionamos o módulo **Nodemon** para resolver o problema de precisar reiniciar o servidor manualmente após alterar algo nos arquivos. Criamos um script de start com os seguintes parâmetros:

```json
"start": "nodemon ./index.js localhost 3020"
```

Agora, para rodar o servidor, em vez de `node index.js`, usamos:

```bash
npm start
```

### `5__MIDDLEWARE`
Ensinada a criação de **middlewares**, utilizados quando precisamos de etapas intermediárias no processo — seja para autenticação ou outras situações que definem a continuidade (ou não) do fluxo do usuário.

### `6__PARAM_URL`
Ensinado como criar diferentes rotas e **rotas dinâmicas**, que aceitam diferentes parâmetros como argumento — tudo de maneira introdutória, ainda sem consultas reais a bancos de dados.

### `7__POST_PARAMS`
Criamos um formulário simples em HTML e, utilizando os conceitos de rotas, configuramos a rota até ele, solicitando nome e idade. Após o envio, exibimos no console uma mensagem com os dados recebidos.

### `8__ROOTS_MODULE`
Criamos uma pasta externa para roteamento, onde ficam as rotas acessadas pelo programa principal, reduzindo a quantidade de código no arquivo principal.

### `9__CSS`
Ensinado como adicionar, no arquivo principal, os links de CSS para estilização das páginas das rotas.

### `10__404_PAGE`
Criada uma página para quando o usuário acessa qualquer caminho inexistente após a `/` — a famosa página **404 Not Found**.

### `CHALLENGE_1`
Desafio simples de criar duas páginas para testar os conhecimentos de rotas. Foram cometidos muitos erros ao longo do caminho, mas após algumas horas de correções tudo foi normalizado. O resultado foi uma página simples com tema de FNAF, com CSS e HTML gerados com auxílio de I.A., porém todas as rotas foram feitas à mão, junto com os ajustes necessários. Foi divertido, e é engraçado perceber como achamos que sabemos algo e erramos bastante até conseguir de verdade!

---

✅ **MÓDULO 6 — FINALIZADO!**