<template>
  <div class="sidebar">
    <div class="logo-container">
      <img src="@/assets/Logoypua.png" alt="Logo" class="logo" />
    </div>
    <ul>
      <li><router-link to="/">Menu Principal</router-link></li>
      <li><router-link to="/reservas">Reservas</router-link></li>
      <li><router-link to="/usuarios">Usuários</router-link></li>
      <li><router-link to="/limpeza">Limpeza</router-link></li>
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
  background-color: rgb(188, 11, 39);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
}

.logo-container {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 160px; /* Ajuste o tamanho conforme necessário */
  height: 130px;
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

.sidebar ul li a.router-link-active {
  color: rgb(255, 191, 67);
}
</style>