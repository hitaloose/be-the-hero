# Be The Hero

## OmniStack
A OmniStack é um evento realizado de forma periodica, onde a empresa Rocketseat propoem o desenvolvimento de um aplicativo, o tutor é Diego.
Esse aplicativo é referente a 11° edição do OmniStack realizado entre os dias 23/03/2020 à 29/03/2020, onde o aplicativo proposto foi Be The Hero.

## Be The Hero
Be The Hero é um aplicativo para Ongs encontrarem pessoas para os apoiarem, esse aplicativo contem uma pagina web, voltada para as Ongs se cadastrarem e gerenciar seus casos, e um aplicativo mobile, onde os ajudadores podem ver os casos que as ongs estão precisando de ajuda.

## Especificações
O aplicativo foi desenvolvido com o conceito MVC, onde temos um Backend, que faz a comunicação com o banco de dados e retornam os dados no formato JSON, e clientes que consomem esse Backend, no caso uma página WEB escrita com React, e um aplicativo mobile escrito com React Native

### Backend
O Backend foi feita usando Nodejs. Algumas dependencias principais usadas foram, Express para constrole de rotas e Knex como query builder.
Para o teste das rotas foi usado o programa Insomnia, na pasta do Backend temos uma pasta docs, onde contem as rotas para serem importada para o Insomnia.

### Frontend
O Frontend foi feito usando React. As estilizações foram feitas usando CSS puro. Algumas dependencias usandas foram, React Router Dom, para controler de rotas dentro das paginas e Axios para fazer requisições ao Backend.

### Mobile
O Aplicativo mobile foi feito usando React Native, foi utilizado Expo para ambiente de desenvolvimento. Algumas dependencias usadas foram, React Native Navigation, para controle de navegação entre paginas, e Axios para fazer requisições ao Backend.
