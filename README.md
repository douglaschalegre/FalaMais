<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://image.flaticon.com/icons/svg/916/916922.svg" 
 alt="Project logo"></a>
</p>

<h3 align="center">FalaMais</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/douglaschalegre/FalaMais.svg)](https://github.com/douglaschalegre/FalaMais/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/douglaschalegre/FalaMais.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-none-orange.svg)](/LICENSE)

</div>

---

<p align="center"> Página web onde clientes podem calcular os valores de ligações.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais.

## ⛏️ Built Using <a name = "built_using"></a>

- [SQLite 3](https://sqlite.org/index.html) - Database
- [Knex.js](http://knexjs.org/) - Query builder
- [ReactJS](https://pt-br.reactjs.org/) - Web Framework
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Jest](https://jestjs.io/docs/en/getting-started.html) - Test Framework

Escolhi nesse projeto o SQLite simplesmente por ser mais fácil de executar para testes em máquinas diferentes, tendo em vista que não é necessário instalar banco de dados na máquina. O sqlite é apenas um arquivo simples, porém a aplicação fica com toda a estrutura para receber um banco de dados mais complexo, basta mudar as configurações do Knex.

## 🏁 Getting Started <a name = "getting_started"></a>

Essas instruções vão te guiar para conseguir rodar localmente uma cópia do projeto para fins de teste e desenvolvimento.

### Pre requisites

Coisas que você tem que ter instalado na máquina e eu não vou abordar nessa documentação

```
Git
Node LTS v12.17.0 ou maior
Npm versão 6.14.5
```

### Installing

Uma série passo a passo te ajudando a rodar localmente o projeto através da linha de comando.

Clonando o repositório do github
```
git clone git@github.com:douglaschalegre/FalaMais.git
```

Dentro da pasta **server** do projeto execute o seguinte comando para instalar as dependências e deixe o npm cuidar do resto por você.
```
npm install
```

Perfeito! Agora vamos rodar nossas migrations para que seja criado no banco de dados nossas tabelas.
```
npm run knex-migrate
```

Quase lá! Vamos popular nosso banco de dados com as informações que vamos utilizar.
```
npm run knex-seed
```

Agora que o nosso back-end já está com suas dependências instaladas, vamos instalar as do nosso SPA. Em um novo terminal, na pasta **web** do projeto execute o seguinte:
```
npm install
```

## Usage

Para executar o servidor express vamos utilizar um script que já deixei configurado no package.json do npm, na pasta **server** digite:
```
npm start
```
Com isso você deve ver na linha de comando a seguinte frase:
```
Rodando servidor na porta 1337...
```
Caso a sua porta 1337 já esteja em uso é possível alterar ela na constante PORT em src/server.ts.

Agora que temos nosso back-end executando, vamos rodar o React! Na pasta **web** execute o seguinte comando:
```
npm start
```
Uma página no seu navegador padrão será aberta com a página web já em execução!

## 🔧 Running the tests <a name = "tests"></a>

Para executar os testes do servidor, basta executar na pasta **server**
```
npm test
```


## ✍️ Authors <a name = "authors"></a>

- [@douglaschalegre](https://github.com/douglaschalegre)

