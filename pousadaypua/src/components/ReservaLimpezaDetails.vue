<template>
  <div class="reserva-details">
    <h1>Informações da Reserva</h1>
    <div class="reserva-info">
      <div class="reserva-info-item">
        <p class="label">Responsável:</p>
        <p class="value">{{ reserva.responsaveis.join(', ') }}</p>
      </div>
      <div class="reserva-info-item">
        <p class="label">Check in:</p>
        <p class="value">{{ reserva.checkIn }}</p>
      </div>
      <div class="reserva-info-item">
        <p class="label">Check out:</p>   
        <p class="value">{{ reserva.checkOut }}</p>
      </div>
    </div>

    <div class="trocados">
      <h2>Itens Trocados</h2>
      <div class="trocados-item" v-for="(item, index) in reserva.itensTrocados" :key="item.nome">
        <div class="checkbox-container">
          <input type="checkbox" :checked="item.trocado" @change="toggleItemTrocado(index)">
          <p class="item-name">{{ item.nome }}:</p>
        </div>
        <p class="item-quantity">{{ item.quantidade }}</p>
      </div>
    </div>

    <div class="limpeza">
      <h2>Limpeza</h2>
      <div class="limpeza-item" v-for="item in reserva.limpeza" :key="item.data">
        <p>{{ item.data }} - {{ item.hora }} - {{ item.responsavel }}</p>
      </div>
    </div>

    <div class="buttons">
      <button class="btn save" @click="saveChanges">Salvar</button>
      <button class="btn cancel" @click="cancelChanges">Cancelar</button>
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
        itensTrocados: [
          { nome: 'Roupa de cama', quantidade: '', trocado: false },
          { nome: 'Toalhas', quantidade: '', trocado: false },
          { nome: 'Sabonete', quantidade: '', trocado: false },
          { nome: 'Shampoo', quantidade: '', trocado: false },
          { nome: 'Condicionador', quantidade: '', trocado: false },
          { nome: 'Saco de lixo', quantidade: '', trocado: false }
        ],
        limpeza: []
      }
    }
  },
  mounted() {
    this.fetchReservaDetails();
  },
  methods: {
    fetchReservaDetails() {
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
          { nome: 'Roupa de cama', quantidade: '', trocado: false },
          { nome: 'Toalhas', quantidade: '', trocado: false },
          { nome: 'Sabonete', quantidade: '', trocado: false },
          { nome: 'Shampoo', quantidade: '', trocado: false },
          { nome: 'Condicionador', quantidade: '', trocado: false },
          { nome: 'Saco de lixo', quantidade: '', trocado: false }
        ],
        limpeza: [
          { data: '04/02/25', hora: '10:30', responsavel: 'Ivan' },
          { data: '05/02/25', hora: '11:30', responsavel: 'Jade' },
          { data: '06/02/25', hora: '8:30', responsavel: 'Jane' }
        ]
      };
    },
    toggleItemTrocado(index) {
      this.reserva.itensTrocados[index].trocado = !this.reserva.itensTrocados[index].trocado;
    },
    saveChanges() {
      alert('As informações foram atualizadas');
      this.$router.push({ name: 'LimpezaView' });
    },
    cancelChanges() {
      this.$router.push({ name: 'LimpezaView' });
    }
  }
}
</script>

<style scoped>
.reserva-details {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.reserva-info,
.trocados,
.limpeza {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.reserva-info-item,
.trocados-item,
.limpeza-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  color: #555;
}

.value {
  color: #777;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-container input {
  margin-right: 10px;
}

.item-name,
.item-quantity {
  margin: 0;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.save {
  background-color: #4caf50;
  color: white;
}

.cancel {
  background-color: #f44336;
  color: white;
}

.save:hover {
  background-color: #45a049;
}

.cancel:hover {
  background-color: #e53935;
}
</style>