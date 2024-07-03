<template>
  <div class="reserva-item" @click="showReservaDetails(reserva.id)">
    <div class="reserva-info">
      <div class="reserva-info-item">
        <p>id:</p>
        <p>{{ reserva.id }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Nome:</p>
        <p>{{ reserva.nome }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Entrada:</p>
        <p>{{ reserva.entrada }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Saída:</p>
        <p>{{ reserva.saida }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Status:</p>
        <p>{{ reserva.status }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Acomodação:</p>
        <p>{{ reserva.acomodacao }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Responsáveis:</p>
        <p>{{ reserva.responsaveis.join(', ') }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Check in:</p>
        <p>{{ reserva.checkIn }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Check out:</p>
        <p>{{ reserva.checkOut }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservaLimpezaItem',
  props: {
    reserva: {
      type: Object,
      required: true
    },
    reservaId: {
      type: Number,
      required: true
    }
  },
  methods: {
    showReservaDetails(id) {
      this.$router.push({ name: 'ReservaLimpezaDetails', params: { id } });
    }
  }
}
</script>
  
<style scoped>
  .reserva-item {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }
  
  .reserva-item:hover {
    background-color: rgba(255, 192, 67, 0.25);
  }
  
  .reserva-info {
    display: flex;
    justify-content: space-between;
  }
  
  .reserva-info-item {
    flex: 1;
    text-align: center;
    padding: 40px;
  }
  
  .reserva-info-item p {  
    margin: 0;
    padding-top: 15px;
  }
  
  .reserva-info-item ul {
    list-style-type: none;
    padding: 0px;
  }
  </style>