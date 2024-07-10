## Front-end 
Feito pela equipe no geral, utilizamos o Vue.js, .

## Back-end 
Feito pelo Cauã Cardozo Guimarães, utilizando o java.
Os caminhos das requisições da api, em resumo são:
 
http://localhost:8080/api/v1/usuario para os methods: GET e POST

http://localhost:8080/api/v1/usuario/(id) para os methods: PUT, GET BY ID e DELETE

## Deploy
O deploy foi feito no firebase pelo Cauã Cardozo Guimarães, onde ele fez as seguintes etapas:
Primeiramente instalar o firebase na sua máquina usando o "npm install firebase-tools -g"
criar um projeto e uma conta caso não tenha no firebase e após isso dar os seguintes comandos
"npm run build"dentro do projeto para "buildar" o projeto, dentro do mesmo projeto dar um "firebase-login" para logar na sua conta do firebase,
após isso apenas iniciar o hosting do firebase com o comando "firebase init hosting" selecionar as opções que fazem sentido com o seu projeto, após essa etapa dar apenas um
"firebase deploy --only hosting" e seu projeto já irá estar na web.

## Dia 21/06/2024
Possui já uma API que está conectada ao banco h2, não consegui no momento conectar ainda no sql, mas logo farei.
Por enquanto é possivel fazer as alterações no banco h2 com as funções que foram feita no back, salvar, listar, editar, achar alguma entidade pelo id especifico e deletar também, por enquanto a unica entidade que foi adicionada, foi a dos Users, que são os funcionarios que irão trabalhar na empresa, como por exemplo: GERENTE, RECEPCIONISTA E LIMPEZA, que pode ser visto na classe UsuarioType.


## Dia 24/06/2024
Consegui fazer a conexão ao banco, o problema estava no Mysql mesmo, conectei no banco postgress e agora está funcionando perfeitamente.
![image](https://github.com/caique-probst/quinta-do-ypua/assets/83767012/ff5625e1-94bd-4748-8453-b6bd2cc6969e)
