## OmniStack
A OmniStack é um evento realizado de forma periódica, onde a empresa Rocketseat propõem o desenvolvimento de um aplicativo, o tutor é Diego.
Esse aplicativo é referente a 11° edição do OmniStack realizado entre os dias 23/03/2020 à 29/03/2020, onde o aplicativo proposto foi Be The Hero.

## Be The Hero
Be The Hero é um aplicativo para Ongs encontrarem pessoas para os apoiarem, esse aplicativo contém uma página web, voltada para as Ongs se cadastrarem e gerenciar seus casos, e um aplicativo mobile, onde os ajudadores podem ver os casos que as ongs estão precisando de ajuda.

### Web
A página web do Be The Hero serve para as Ongs se cadastrarem, assim um ID único é gerado. Com o ID as ongs podem se logarem a página e cadastram casos que precisam de ajuda.

### Mobile
O aplicativo mobile é feito para pessoas poder ver os casos que todos Ongs cadastraram, se quiser apoiar algum caso é só acessar os detalhes do caso e entrar em contato com a Ongs por e-mail ou whatsapp.

## Especificações
O aplicativo foi desenvolvido com o conceito MVC, onde temos um Backend, que faz a comunicação com o banco de dados e retornam os dados no formato JSON, e clientes que consomem esse Backend, no caso uma página WEB escrita com React, e um aplicativo mobile escrito com React Native

### Backend
O Backend foi feito usando Nodejs. Algumas dependências principais usadas foram, Express para controle de rotas e Knex como query builder.
Para o teste das rotas foi usado o programa Insomnia, na pasta do Backend temos uma pasta docs, onde contém as rotas para serem importada para o Insomnia.

### Frontend
O Frontend foi feito usando React. As estilizações foram feitas usando CSS puro. Algumas dependencias usandas foram, React Router Dom, para controle de rotas dentro das páginas e Axios para fazer requisições ao Backend.

### Mobile
O Aplicativo mobile foi feito usando React Native, foi utilizado Expo para ambiente de desenvolvimento. Algumas dependências usadas foram, React Native Navigation, para controle de navegação entre páginas, e Axios para fazer requisições ao Backend.
