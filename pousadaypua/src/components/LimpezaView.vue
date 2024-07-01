<template>
    <div>
      <h1>Limpeza</h1>
      <div class="reservas-container">
        <ReservaLimpezaItem v-for="reserva in reservas" :key="reserva.id" :reserva="reserva" :reservaId="reserva.id" />
      </div>
    </div>
  </template>
  
  <script>
  import ReservaLimpezaItem from './ReservaLimpezaItem.vue'
  
  export default {
    name: 'LimpezaView',
    components: {
      ReservaLimpezaItem
    },
    data() {
      return {
        reservas: [
          {
            id: 1,
            nome: 'Thaina Silva',
            entrada: '03/02/25',
            saida: '06/02/25',
            status: 'Limpo',
            acomodacao: '01',
            responsaveis: ['Ivan Santos', 'Jane Silva'],
            checkIn: '03/02/25 9:30',
            checkOut: '06/02/25 19:00',
            limpeza: [
              { data: '04/02/25', hora: '10:30', responsavel: 'Ivan' },
              { data: '05/02/25', hora: '11:30', responsavel: 'Jade' },
              { data: '06/02/25', hora: '8:30', responsavel: 'Jane' }
            ]
          },
          {
            id: 2,
            nome: 'Pedro Kabral',
            entrada: '03/02/25',
            saida: '06/02/25',
            status: 'Limpar',
            acomodacao: '01',
            responsaveis: ['Ivan Santos', 'Jane Silva'],
            checkIn: '03/02/25 9:30',
            checkOut: '06/02/25 19:00',
            limpeza: [
              { data: '04/02/25', hora: '10:30', responsavel: 'Ivan' },
              { data: '05/02/25', hora: '11:30', responsavel: 'Jade' },
              { data: '06/02/25', hora: '8:30', responsavel: 'Jane' }
            ]
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