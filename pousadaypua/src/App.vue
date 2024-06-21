<template>
  <div id="app">
    <header>
      <img src="@/assets/Logoypua2.png" alt="Logo" class="logo" />
    </header>
    <CadastroFuncionario />
  </div>
</template>

<script>
import CadastroFuncionario from './components/CadastroFuncionario.vue';

export default {
  name: 'App',
  components: {
    CadastroFuncionario
  }
};
</script>

<style>
/* Adicione seus estilos globais aqui */
#app {
  text-align: center;
}

header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  height: 50px; /* Ajuste o tamanho conforme necessário */
  margin-right: auto; /* Alinha o logo à esquerda */
}
</style>
