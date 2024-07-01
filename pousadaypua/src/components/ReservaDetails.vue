<template>
    <div class="reserva-details">
      <h1>Informações da Reserva</h1>
      <div class="reserva-info">
        <div class="reserva-info-item">
          <p>Nome Hóspede:</p>
          <p>{{ reserva.nome }}</p>
        </div>
        <div class="reserva-info-item">
          <p>Check in:</p>
          <p>{{ reserva.entrada }}</p>
        </div>
        <div class="reserva-info-item">
          <p>Check out:</p>
          <p>{{ reserva.saida }}</p>
        </div>
        <div class="reserva-info-item">
          <p>Status:</p>
          <p>{{ reserva.status }}</p>
        </div>
        <div class="reserva-info-item">
          <p>Número de hóspedes:</p>
          <p>{{ reserva.numHospedes }}</p>
        </div>
        <div class="reserva-info-item">
          <p>CPF reservista:</p>
          <p>{{ reserva.cpf }}</p>
        </div>
        <div class="reserva-info-item">
          <p>Telefone reservista:</p>
          <p>{{ reserva.telefone }}</p>
        </div>
        <div class="reserva-info-item">
          <p>Forma Pagamento:</p>
          <p>{{ reserva.formaPagamento }}</p>
        </div>
      </div>
      <div class="consumidos">
        <h2>Consumidos</h2>
        <div class="consumidos-item">
          <p>Total 1x Água c/gás:</p>
          <p>R$4,00</p>
        </div>
        <div class="consumidos-item">
          <p>3x Lata Pepsi:</p>
          <p>R$3,00</p>
        </div>
        <div class="consumidos-item">
          <p>3x Lata Pepsi:</p>
          <p>R$3,00</p>
        </div>
        <div class="consumidos-item">
          <p>3x Lata Pepsi:</p>
          <p>R$3,00</p>
        </div>
        <div class="consumidos-item">
          <p>Total:</p>
          <p>R$40,00</p>
        </div>
      </div>
      <div class="limpeza">
        <h2>Limpeza</h2>
        <div class="limpeza-item">
          <p>Responsáveis:</p>
          <p>Ivan Santos, Jane Silva</p>
        </div>
        <div class="limpeza-item">
          <p>Check in:</p>
          <p>03/02/25 9:30</p>
        </div>
        <div class="limpeza-item">
          <p>Check out:</p>
          <p>06/02/25 19:00</p>
        </div>
        <div class="limpeza-item">
          <p>Limpeza:</p>
          <ul>
            <li>04/02/25 10:30 Ivan</li>
            <li>05/02/25 11:30 Jade</li>
            <li>06/02/25 8:30 Jane</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservaDetails',
    props: {
      id: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .reserva-details {
    padding: 20px;
  }
  
  .reserva-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .reserva-info-item {
    text-align: left;
  }
  
  .reserva-info-item p {
    margin: 0;
  }
  
  .consumidos, .limpeza {
    margin-top: 40px;
  }
  
  .consumidos-item, .limpeza-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  </style>