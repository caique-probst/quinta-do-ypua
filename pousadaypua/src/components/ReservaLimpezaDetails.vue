<template>
  <div class="reserva-details">
    <h1>Informações da Reserva</h1>
    <div class="row">
      <div class="col-md-6">
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
      </div>
      <div class="col-md-6">
        <div class="limpeza">
          <h2>Limpeza</h2>
          <div class="limpeza-item" v-for="item in reserva.limpeza" :key="item.data">
            <p>{{ item.data }} - {{ item.hora }} - {{ item.responsavel }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="trocados">
          <h2>Itens Trocados</h2>
          <div class="trocados-item" v-for="(item, index) in reserva.itensTrocados" :key="item.nome">
            <div class="checkbox-container">
              <input type="checkbox" :checked="item.trocado" @change="toggleItemTrocado(index)">
              <p>{{ item.nome }}:</p>
            </div>
               <p>{{ item.quantidade }}</p> 
          </div>
        </div>

      </div>
      <div class="col-md-6">
        <div class="consumidos">
          <h2>Itens Consumidos</h2>
          <div class="consumidos-item">
            <div class="checkbox-container">
              <input type="checkbox" :checked="reserva.itensConsumidos[0].trocado" @change="toggleItemConsumido(0)">
                <p>Água c/gás 510ml</p>
            </div>
          </div>
          <div class="consumidos-item">
            <div class="checkbox-container">
              <input type="checkbox" :checked="reserva.itensConsumidos[1].trocado" @change="toggleItemConsumido(1)">
              <p>Lata Pepsi 350ml</p>
            </div>
          </div>
          <div class="consumidos-item">
            <div class="checkbox-container">
              <input type="checkbox" :checked="reserva.itensConsumidos[2].trocado" @change="toggleItemConsumido(2)">
              <p>Todynho 200ml</p>
            </div>
          </div>
          <div class="consumidos-item">
            <div class="checkbox-container">
              <input type="checkbox" :checked="reserva.itensConsumidos[3].trocado" @change="toggleItemConsumido(3)">
              <p>Bibs 100g</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
<div class="buttons">
  <button class="btn salvar" @click="salvar">Salvar</button>
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
            { nome: 'Saco de lixo', quantidade: '', trocado: false },
          ],
          itensConsumidos: [
          { nome: 'Água c/gás 510ml', quantidade: '', trocado: false },
            { nome: 'Lata Pepsi 350ml', quantidade: '', trocado: false },
            { nome: 'Todynho 200ml', quantidade: '', trocado: false },
            { nome: 'Bibs 100g', quantidade: '', trocado: false }
          ],
          limpeza: []
        }
      }
    },
    mounted() {
      this.fetchReservaDetails();
    },
    methods: {
      toggleItemTrocado(index) {
        this.reserva.itensTrocados[index].trocado = !this.reserva.itensTrocados[index].trocado;
      },
      toggleItemConsumido(index) {
        this.reserva.itensTrocados[index].trocado = !this.reserva.itensTrocados[index].trocado;
      },
      salvar() {
        this.$router.push({ name: 'LimpezaView' });
      },
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
            { nome: 'Roupa de cama', quantidade: '', trocado: false },
            { nome: 'Toalhas', quantidade: '', trocado: false },
            { nome: 'Sabonete', quantidade: '', trocado: false },
            { nome: 'Shampoo', quantidade: '', trocado: false },
            { nome: 'Condicionador', quantidade: '', trocado: false },
            { nome: 'Saco de lixo', quantidade: '', trocado: false },
          ],
          itensConsumidos: [
          { nome: 'Água c/gás 510ml', quantidade: '', trocado: false },
            { nome: 'Lata Pepsi 350ml', quantidade: '', trocado: false },
            { nome: 'Todynho 200ml', quantidade: '', trocado: false },
            { nome: 'Bibs 100g', quantidade: '', trocado: false }
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
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.reserva-info {
  flex: 1;
  margin-right: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.limpeza {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.trocados {
  flex: 1;
  margin-right: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.consumidos {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.reserva-info-item,
.trocados-item,
.consumidos-item,
.limpeza-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.reserva-info-item p,
.trocados-item p,
.consumidos-item p,
.limpeza-item p {
  margin: 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-container input {
  margin-right: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.salvar {
  background-color: #4caf50;
  color: white;
}
</style>