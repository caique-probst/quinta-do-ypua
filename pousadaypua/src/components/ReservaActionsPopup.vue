<template>
    <div class="popup">
      <div class="popup-content">
        <button @click="$emit('close')">Fechar</button>
        <button @click="$emit('edit')">Editar</button>
        <button @click="$emit('delete')">Excluir</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservaActionsPopup'
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
  }
  
  button {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f6e;
  }
  </style>