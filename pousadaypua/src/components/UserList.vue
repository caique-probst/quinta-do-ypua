<template>
  <div>
    <h1>Usuários</h1>
    <button @click="novoUsuario">Novo usuário</button>
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
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      usuarios: [
        { nome: 'Andreia', funcao: 'Recepcionista', status: 'Ativo' },
        { nome: 'Ivan', funcao: 'Limpeza', status: 'Ativo' },
        { nome: 'Jade', funcao: 'Limpeza', status: 'Ativo' },
        { nome: 'Marcos', funcao: 'Gerente', status: 'Ativo' }
      ]
    };
  },
  methods: {
    novoUsuario() {
      this.$router.push('/cadastro-funcionario');
    }
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