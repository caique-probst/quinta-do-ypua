<template>
  <div class="reserva-details">
    <h1>Informações da Reserva</h1>
    <div class="row">
      <div class="col-md-6">
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
      </div>
      <div class="col-md-6">
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
            <p>Total:</p>
            <p>R$40,00</p>
          </div>
        </div>
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
        <p>06/02/25 --:--</p>
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

    <div class="buttons">
      <button class="btn voltar" @click="voltar">Voltar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservaDetails',
  data() {
    return {
      reserva: {
        nome: 'Thaina Silva',
        entrada: '03/02/25',
        saida: '06/02/25',
        status: 'Pago',
        numHospedes: 2,
        cpf: '123.456.789-00',
        telefone: '(11) 1234-5678',
        formaPagamento: 'Cartão de Crédito'
      }
    };
  },
  methods: {
    voltar() {
      this.$router.push({ name: 'MainMenu' });
    },
  }
};
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

.reserva-info {
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  margin-top: 40px;
  margin-right: 40px;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  
}

.reserva-info-item,
.consumidos-item,
.limpeza-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.reserva-info-item p,
.consumidos-item p,
.limpeza-item p {
  margin: 0;
}

.consumidos,
.limpeza {
  margin-top: 40px;
  margin-left: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.buttons {
  margin-top: 20px;
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

.voltar {
  background-color: #4caf50;
  color: white;
}



.voltar:hover {
  background-color: #45a049;
  color: #a8a8a8;
}

</style>