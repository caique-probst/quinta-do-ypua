<template>
  <AppSidebar/>
  <div>
    <h1>Menu Principal</h1>
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
    ReservaItem,
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
</style>