<template>
  <div class="popup">
    <div class="popup-content">
      <button class="action-button" @click="$emit('close')">Fechar</button>
      <button class="action-button" @click="$emit('edit')">Editar</button>
      <button class="action-button" @click="$emit('delete')">Excluir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserActionsPopup'
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  text-align: center; /* Centraliza os botões horizontalmente */
}

.action-button {
  display: block;
  width: 100%; /* Botões ocupam toda a largura do modal */
  margin-bottom: 10px;
  padding: 15px; /* Aumenta o padding para aumentar o tamanho dos botões */
  font-size: 18px; /* Aumenta o tamanho da fonte */
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.action-button:hover {
  background-color: #369f6e;
}
</style>
