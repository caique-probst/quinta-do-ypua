<template>
  <div>
    <h1>Usuários</h1>
    <button @click="showPopup = true">Novo usuário</button>
    <div class="users-container">
      <UserItem v-for="user in users" :key="user.nome" :user="user" />
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
          nome: 'Rogerio Ceni',
          função: '03/02/25',
          status: 'Pago',
          ações: '01'
        },
        {
          id: 2,
          nome: 'Ronaldo Silva',
          função: '03/02/25',
          status: 'Pago',
          ações: '01'
        }
      ]
    }
  },
  methods: {
    adicionarUsuario(usuario) {
      this.users.push(usuario);
      this.showPopup = false;
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
</style>