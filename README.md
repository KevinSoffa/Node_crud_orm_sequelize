# Node.js, Sequelize e MySQL <img height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/> <img height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"/> <img height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original-wordmark.svg"/>



# Projeto de Gerenciamento de Usuários e Endereços

Este é um projeto desenvolvido em Node.js e Express.js, utilizando um banco de dados MySQL para gerenciar informações de usuários e seus endereços. O objetivo principal deste projeto é fornecer uma aplicação web simples para realizar operações básicas de CRUD (Create, Read, Update, Delete) em usuários e endereços, com uma interface de usuário construída utilizando o Handlebars como mecanismo de template.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para Node.js, usado para criar as rotas e manipular as requisições HTTP.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Handlebars**: Mecanismo de template para gerar páginas HTML dinamicamente.

## Funcionalidades

- Criação, visualização, edição e exclusão de usuários.
- Associação de endereços a usuários.
- Criação e exclusão de endereços.

## Como Usar

1. Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.
2. Clone este repositório: `git clone https://github.com/KevinSoffa/Node_crud_orm_sequelize`
3. Instale as dependências do projeto: `npm install`
4. Configure as credenciais do banco de dados no arquivo `./db/conn.mjs`.
5. Execute o script de criação do banco de dados e tabelas, se necessário.
6. Inicie a aplicação: `npm start`.
7. Acesse a aplicação em seu navegador: `http://localhost:3000`.

## Estrutura do Projeto

- `./models`: Contém os modelos de dados para usuários e endereços.
- `./db`: Contém a configuração de conexão com o banco de dados.
- `./public`: Diretório para arquivos estáticos, como CSS, JavaScript, etc.
- `./views`: Diretório para os arquivos de template Handlebars.
- `./app.js`: Arquivo principal da aplicação, onde são definidas as rotas e a configuração do Express.js.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request com melhorias, correções de bugs ou novas funcionalidades.

