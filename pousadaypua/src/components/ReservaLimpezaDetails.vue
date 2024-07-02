<template>
    <div class="reserva-details">
      <h1>Informações da Reserva</h1>
      <div class="reserva-info">
        <div class="reserva-info-item">
          <p>Responsável:</p>
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
      <div class="consumidos">
        <h2>Itens Trocados</h2>
        <div class="consumidos-item" v-for="item in reserva.itensTrocados" :key="item.nome">
          <p>{{ item.nome }}:</p>
          <p>{{ item.quantidade }}</p>
        </div>
      </div>
      <div class="limpeza">
        <h2>Limpeza</h2>
        <div class="limpeza-item" v-for="item in reserva.limpeza" :key="item.data">
          <p>{{ item.data }} - {{ item.hora }} - {{ item.responsavel }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'ReservaLimpezaDetails',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      reserva: {
        nome: '',
        entrada: '',
        saida: '',
        status: '',
        acomodacao: '',
        responsaveis: [],
        checkIn: '',
        checkOut: '',
        itensTrocados: [],
        limpeza: []
      }
    }
  },
  mounted() {
    this.fetchReservaDetails();
  },
  methods: {
    fetchReservaDetails() {
      // Aqui você deve fazer uma chamada à API ou buscar os dados de alguma outra forma
      // para obter as informações da reserva com base no id
      // e atualizar o objeto 'reserva' com os dados da reserva
      this.reserva = {
        nome: 'Thaina Silva',
        entrada: '03/02/25',
        saida: '06/02/25',
        status: 'Pago',
        acomodacao: '01',
        responsaveis: ['Ivan Santos', 'Jane Silva'],
        checkIn: '03/02/25 9:30',
        checkOut: '06/02/25 19:00',
        itensTrocados: [
          { nome: 'Roupa de cama', quantidade: '' },
          { nome: 'Toalhas', quantidade: '' },
          { nome: 'Sabonete', quantidade: '' },
          { nome: 'Shampoo', quantidade: '' },
          { nome: 'Condicionador', quantidade: '' },
          { nome: 'Saco de lixo', quantidade: '' }
        ],
        limpeza: [
          { data: '04/02/25', hora: '10:30', responsavel: 'Ivan' },
          { data: '05/02/25', hora: '11:30', responsavel: 'Jade' },
          { data: '06/02/25', hora: '8:30', responsavel: 'Jane' }
        ]
      };
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