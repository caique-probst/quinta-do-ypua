<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Adicione seus estilos globais aqui */
body {
  background-color: #f0f0f0; /* Cor de fundo cinza */
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

#app {
  display: flex;
}

.main-content {
  margin-left: 200px; /* Espaço para a sidebar */
  flex-grow: 1;
  text-align: center;
  padding: 20px;
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