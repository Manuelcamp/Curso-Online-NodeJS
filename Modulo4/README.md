# 📦 Módulo 4

Módulo focado nos **fundamentos do NPM**. Nada de scripts ou algoritmos complicados nas pastas — o foco aqui são os fundamentos, os principais comandos e suas explicações!

## 🗃️ Conteúdo

### `1__PROJECT_CREATE`
Começamos o módulo criando um projeto simples pelo comando `npm init`. É explicada a base dos arquivos `.json` e o comando `npm run test`.

### `2__NPM_FAST_INIT`
Foi demonstrado como iniciar um projeto de maneira rápida com o `npm init`, apenas adicionando o `-y` na frente, fazendo com que todas as perguntas sejam respondidas automaticamente com "yes". Comando completo:

```bash
npm init -y
```

### `3__NPM_MODULES`
```bash
npm install
```
Verifica e instala todos os módulos que faltam e são necessários — útil, por exemplo, ao clonar um projeto do GitHub. Isso foi demonstrado utilizando o módulo `lodash` de maneira simples, com a criação de um algoritmo básico de **diferença** e **interseção** entre dois conjuntos, seguindo o modelo matemático.

### `4__DEV_MODULES`
Foi demonstrado como deixar um módulo como dependência exclusiva do ambiente de desenvolvimento, através do comando `--save-dev`, instalando o pacote `chalk` como exemplo:

```bash
npm install --save-dev chalk
```

Também foram demonstrados os comandos:

```bash
npm update
npm update lodash
```

que verificam, de forma geral ou específica (passando o nome do pacote), se os módulos precisam de atualização. E também:

```bash
npx npm-check-updates -u
```

que verifica, por varredura, quais pacotes ao todo precisam da última versão.

### `5__SCRIPT_NPM`
Foi demonstrado como criar um script dentro do `package.json`, acrescentando uma linha de comando com a nomenclatura:

```json
"start": "node index.js"
```

O `start` sinaliza qual comando deve ser executado assim que o `npm start` é chamado — no caso deste app, a inicialização do `index.js`.

### `6__GLOBAL_PATH`
Foi demonstrado como instalar um pacote de forma **global**, sem a necessidade de criá-lo na pasta `node_modules` do projeto, exemplo:

```bash
npm install -g lodash
```

Também foi corrigido o erro que alguns desses pacotes podem gerar por precisarem ser linkados ao projeto, através do comando de link, como no exemplo do `lodash`:

```bash
npm link lodash
```

Além disso, foi demonstrado o comando de desinstalação:

```bash
npm uninstall <nome>
```