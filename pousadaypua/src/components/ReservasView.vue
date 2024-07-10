<template>
  <div>
    <hr>
    <button class="new-reservation-btn"><router-link to="/NovaReserva">Nova Reserva</router-link></button>
    <br>
    <div class="reservas-container">
      <ReservaItem v-for="reserva in reservas" :key="reserva.nome" :reserva="reserva" />
    </div>
  </div>
</template>

<script>
import ReservaItem from './ReservaItem.vue'

export default {
  name: 'MainMenu',
  components: {
    ReservaItem
  },
  data() {
    return {
      reservas: [
        {
          id: 1,
          nome: 'Thaina Silva',
          entrada: '03/02/25',
          saida: '06/02/25',
          status: 'Pago',
          acomodacao: '01'
        },
        {
          id: 2,
          nome: 'Pedro Kabral',
          entrada: '03/02/25',
          saida: '06/02/25',
          status: 'Pago',
          acomodacao: '01'
        }
        
      ]
    }
  }
}
</script>

<style scoped>
.reservas-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

button {
  margin: 10px;
  text-decoration: none;
}

.new-reservation-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
}

.new-reservation-btn:hover {
  background-color: #42b983;
}

.new-reservation-btn a {
  color: white;
  text-decoration: none;
}
</style>
