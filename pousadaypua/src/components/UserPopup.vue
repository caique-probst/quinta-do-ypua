<template>
    <div class="popup-overlay">
      <div class="popup-container">
        <div class="popup-content">
          <h2>Novo Usuário</h2>
          <slot></slot>
          <button @click="closePopup">Fechar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserPopup',
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .popup-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .popup-content {
    max-width: 500px;
    text-align: center;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>