<template>
  <div>
    <img src="../assets/Ellipse 14.png" alt=""><span>Felipe Apio</span>    
    <hr>
    <button><router-link to="/NovaReserva">Nova Reserva</router-link></button>
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
        // Adicione mais reservas conforme necessário
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
button{
  margin: 10px;
  text-decoration: none;
}

</style>