<template>
  <div class="reserva-details">
    <div class="info-container">
      <h1>Informações da Reserva</h1>
      <div class="reserva-info">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input v-model="reserva.nome" id="nome" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="cpf">CPF:</label>
          <input v-model="reserva.cpf" id="cpf" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="rg">RG:</label>
          <input v-model="reserva.rg" id="rg" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="dataNascimento">Data de Nascimento:</label>
          <input v-model="reserva.dataNascimento" id="dataNascimento" type="date" class="input-field" />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input v-model="reserva.telefone" id="telefone" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="endereco">Endereço:</label>
          <input v-model="reserva.endereco" id="endereco" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="numero">Número:</label>
          <input v-model="reserva.numero" id="numero" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input v-model="reserva.cidade" id="cidade" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label for="checkIn">Check-in:</label>
          <input v-model="reserva.checkIn" id="checkIn" type="datetime-local" class="input-field" />
        </div>
        <div class="form-group">
          <label for="checkOut">Check-out:</label>
          <input v-model="reserva.checkOut" id="checkOut" type="datetime-local" class="input-field" />
        </div>
        <div class="form-group">
          <label for="formaPagamento">Forma de Pagamento:</label>
          <input v-model="reserva.formaPagamento" id="formaPagamento" type="text" class="input-field" />
        </div>
      </div>

      <div class="acompanhantes">
        <h2>Acompanhantes</h2>
        <div v-for="(acompanhante, index) in reserva.acompanhantes" :key="index" class="acompanhante">
          <h3>Acompanhante {{ index + 1 }}</h3>
          <div class="form-group">
            <label :for="'acompNome' + index">Nome:</label>
            <input v-model="acompanhante.nome" :id="'acompNome' + index" type="text" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompCpf' + index">CPF:</label>
            <input v-model="acompanhante.cpf" :id="'acompCpf' + index" type="text" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompRg' + index">RG:</label>
            <input v-model="acompanhante.rg" :id="'acompRg' + index" type="text" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompDataNascimento' + index">Data de Nascimento:</label>
            <input v-model="acompanhante.dataNascimento" :id="'acompDataNascimento' + index" type="date" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompTelefone' + index">Telefone:</label>
            <input v-model="acompanhante.telefone" :id="'acompTelefone' + index" type="text" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompEndereco' + index">Endereço:</label>
            <input v-model="acompanhante.endereco" :id="'acompEndereco' + index" type="text" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompNumero' + index">Número:</label>
            <input v-model="acompanhante.numero" :id="'acompNumero' + index" type="text" class="input-field" />
          </div>
          <div class="form-group">
            <label :for="'acompCidade' + index">Cidade:</label>
            <input v-model="acompanhante.cidade" :id="'acompCidade' + index" type="text" class="input-field" />
          </div>
        </div>
        <button @click="adicionarAcompanhante">Adicionar Acompanhante</button>
      </div>
    </div>

    <div class="buttons">
      <button class="btn-save" @click="saveChanges">Salvar</button>
      <button class="btn-cancel" @click="cancelChanges">Cancelar</button>
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
  },
  data() {
    return {
      reserva: {
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: '',
        endereco: '',
        numero: '',
        cidade: '',
        checkIn: '',
        checkOut: '',
        formaPagamento: '',
        acompanhantes: []
      }
    };
  },
  methods: {
    adicionarAcompanhante() {
      this.reserva.acompanhantes.push({
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: '',
        endereco: '',
        numero: '',
        cidade: ''
      });
    },
    saveChanges() {
      // Exibe o alert e redireciona para a página de reservas
      alert('As informações foram atualizadas');
      this.$router.push({ name: 'ReservasView' });
    },
    cancelChanges() {
      // Apenas redireciona para a página de reservas
      this.$router.push({ name: 'ReservasView' });
    }
  }
};
</script>

<style scoped>
.reserva-details {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.info-container {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #000;
  padding: 20px;
  border-radius: 8px;
}

.reserva-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.acompanhantes {
  margin-top: 30px;
}

.acompanhante {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.btn-save {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #28a745; /* Verde */
  color: white;
  border: none;
  border-radius: 4px;
}

.btn-save:hover {
  background-color: #218838; /* Verde mais escuro no hover */
}

.btn-cancel {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #dc3545; /* Vermelho */
  color: white;
  border: none;
  border-radius: 4px;
}

.btn-cancel:hover {
  background-color: #c82333; /* Vermelho mais escuro no hover */
}
</style>
