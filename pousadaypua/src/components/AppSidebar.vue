<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/">Menu Principal</router-link></li>
      <li><router-link to="/reservas">Reservas</router-link></li>
      <li><router-link to="/usuarios">Usuários</router-link></li>
      <li><router-link to="/limpeza">Limpeza</router-link></li>
      <li><router-link to="/cadastro-funcionario">Cadastro de Funcionário</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar'
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #343a40;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 10px 20px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}
</style>