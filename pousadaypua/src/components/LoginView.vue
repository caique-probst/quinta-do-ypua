<template>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <title>Login</title>
  </head>
  <body style="background-color: #BC0B27 !important;">
    <img src="../assets/Logoypua.png" class="img-fluid" alt="..." style="padding-left: 30px;">
      <div class="position-absolute top-50 start-50 translate-middle" style="background: #FFFFFF; border-radius: 30px;">
        <form style="padding: 100px;">
          <b><h1 class="tittleLogin">Login</h1></b>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuário" style="border-radius: 60px; width: 300px;">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" style="border-radius: 60px;">
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button" style="border-radius: 60px; background: C9C9C9;">Entrar</button>
          </div>
        </form>
      </div>
  </body>
</html>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>

<style>

</style>