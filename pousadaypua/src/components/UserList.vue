<template>
  <div>
    <h1>Usuários</h1>
    <button @click="showPopup = true">Novo usuário</button>
    <div class="users-container">
      <UserItem v-for="user in users" :key="user.nome" :user="user" @edit="editarUsuario" @delete="excluirUsuario">
        <button class="actions-button" @click="toggleActions(user.id)">...</button>
      </UserItem>
    </div>
    <UserPopup v-if="showPopup" @close="showPopup = false">
      <CadastroFuncionario @cadastrado="adicionarUsuario" />
    </UserPopup>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';
import UserPopup from './UserPopup.vue';
import CadastroFuncionario from './CadastroFuncionario.vue';

export default {
  name: 'UserList',
  components: {
    UserItem,
    UserPopup,
    CadastroFuncionario
  },
  data() {
    return {
      showPopup: false,
      users: [
        {
          id: 1,
          nome: 'Ivan Santos',
          função: 'Faxina',
          status: 'Trabalhando',
        },
        {
          id: 2,
          nome: 'Rogerio Ceni',
          função: 'Faxina',
          status: 'Trabalhando',
        }
      ],
      actionsVisible: {}
    }
  },
  methods: {
    adicionarUsuario(usuario) {
      this.users.push(usuario);
      this.showPopup = false;
    },
    editarUsuario(usuario) {
      console.log('Editar usuário:', usuario);
    },
    excluirUsuario(usuario) {
      this.users = this.users.filter(u => u.id !== usuario.id);
    },
    toggleActions(userId) {
      this.$set(this.actionsVisible, userId, !this.actionsVisible[userId]);
    }
  }
}
</script>

<style scoped>
.users-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

button {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}

.actions-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #42b983;
}

.actions-button:hover {
  color: #369f6e;
}
</style>
