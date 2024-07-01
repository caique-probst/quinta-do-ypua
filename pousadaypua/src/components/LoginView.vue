<template>
  <div class="background-wrapper">
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
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('red-background');
  },
  beforeUnmount() {
    document.body.classList.remove('red-background');
  }
};
</script>

<style>
  .red-background {
    background-color: rgb(188, 11, 39);
    min-height: 100vh;
    margin: 0;
  }
  

</style>
