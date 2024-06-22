<template>
  <div>
    <h1>Usuários</h1>
    <button @click="showPopup = true">Novo usuário</button>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Função</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.nome">
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.funcao }}</td>
          <td>{{ usuario.status }}</td>
          <td>
            <!-- Adicione ações aqui, como editar ou excluir -->
          </td>
        </tr>
      </tbody>
    </table>
    <UserPopup v-if="showPopup" @close="showPopup = false">
      <CadastroFuncionario @cadastrado="showPopup = false" />
    </UserPopup>
  </div>
</template>

<script>
import UserPopup from './UserPopup.vue';
import CadastroFuncionario from './CadastroFuncionario.vue';

export default {
  name: 'UserList',
  components: {
    UserPopup,
    CadastroFuncionario
  },
  data() {
    return {
      showPopup: false
    };
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
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