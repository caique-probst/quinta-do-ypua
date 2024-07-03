<template>
  <div class="availability-table">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Camas</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in rooms" :key="room.name" :class="{highlight: room.highlight}" @click="openModal(room)">
          <td>{{ room.name }}</td>
          <td>{{ room.beds }}</td>
          <td>{{ room.status }}</td>
          <td><div class="status-circle" :class="{available: room.status === 'Disponível'}"></div></td>
        </tr>
      </tbody>
    </table>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">X</button>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>Nome Titular:</label>
              <input type="text" v-model="form.nomeTitular">
            </div>
            <div class="form-group">
              <label>CPF:</label>
              <input type="text" v-model="form.cpf">
            </div>
            <div class="form-group">
              <label>RG:</label>
              <input type="text" v-model="form.rg">
            </div>
            <div class="form-group">
              <label>Data nascimento:</label>
              <input type="date" v-model="form.dataNascimento">
            </div>
            <div class="form-group">
              <label>Número Telefone:</label>
              <input type="text" v-model="form.telefone">
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="email" v-model="form.email">
            </div>
            <div class="form-group">
              <label>Endereço:</label>
              <input type="text" v-model="form.endereco">
            </div>
            <div class="form-group">
              <label>Número:</label>
              <input type="text" v-model="form.numero">
            </div>
            <div class="form-group">
              <label>Bairro:</label>
              <input type="text" v-model="form.bairro">
            </div>
            <div class="form-group">
              <label>Cidade:</label>
              <input type="text" v-model="form.cidade">
            </div>
            <div class="form-group">
              <label>Estado:</label>
              <input type="text" v-model="form.estado">
            </div>
            <div class="form-actions">
              <button type="button" class="btn-cancel" @click="closeModal">Cancelar</button>
              <button type="button" class="btn-save" @click="saveForm">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-if="isConfirmationModalOpen" class="modal-overlay" @click.self="closeConfirmationModal">
      <div class="modal-content">
        <div class="modal-body">
          <img src="../assets/Logoypua2.png" alt="Reserva cadastrada com sucesso">
          <h2>Reserva cadastrada com sucesso!</h2>
          <button @click="closeConfirmationModal">Continuar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        { name: 'Suite Com Cozinha', beds: '1 casal 1 solteiro', status: 'Disponível', highlight: true },
        { name: 'Chalé Família', beds: '2 casal 1 solteiro', status: 'Disponível', highlight: false },
        { name: 'Chalé Família', beds: '1 casal 1 solteiro', status: 'Disponível', highlight: false },
      ],
      isModalOpen: false,
      isConfirmationModalOpen: false,
      selectedRoom: {},
      form: {
        nomeTitular: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
      }
    };
  },
  methods: {
    openModal(room) {
      this.selectedRoom = room;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    closeConfirmationModal() {
      this.isConfirmationModalOpen = false;
    },
    saveForm() {
      // Lógica para salvar o formulário (pode ser uma chamada de API, etc.)
      console.log('Formulário salvo:', this.form);

      // Remove o quarto selecionado da lista de quartos
      this.rooms = this.rooms.filter(room => room.name !== this.selectedRoom.name);

      // Fecha o modal de formulário
      this.closeModal();

      // Abre o modal de confirmação
      this.isConfirmationModalOpen = true;
    }
  }
};
</script>

<style scoped>
.availability-table {
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #f0f0f0;
}
tr{
  cursor: pointer;
}
tr:hover{
  background-color: #fff0e1;
}
.status-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
}
.status-circle.available {
  background-color: #5cb85c;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  position: relative;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-body h2 {
  margin: 20px 0;
}
.modal-body button {
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.btn-cancel {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
.btn-save {
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
