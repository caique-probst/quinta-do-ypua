<template>
  <div>
    <h1>Cadastro de Funcionários</h1>
    <form @submit.prevent="cadastrarFuncionario">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" v-model="funcionario.nome" id="nome" required />
      </div>
      <div>
        <label for="cpf">CPF:</label>
        <input type="text" v-model="funcionario.cpf" id="cpf" required />
      </div>
      <div>
        <label for="rg">RG:</label>
        <input type="text" v-model="funcionario.rg" id="rg" required />
      </div>
      <div>
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" v-model="funcionario.dataNascimento" id="dataNascimento" required />
      </div>
      <div>
        <label for="telefone">Número de Telefone:</label>
        <input type="text" v-model="funcionario.telefone" id="telefone" required />
      </div>
      <div>
        <label for="estado">Estado:</label>
        <input type="text" v-model="funcionario.estado" id="estado" required />
      </div>
      <div>
        <label for="cidade">Cidade:</label>
        <input type="text" v-model="funcionario.cidade" id="cidade" required />
      </div>
      <div>
        <label for="bairro">Bairro:</label>
        <input type="text" v-model="funcionario.bairro" id="bairro" required />
      </div>
      <div>
        <label for="numero">Número:</label>
        <input type="text" v-model="funcionario.numero" id="numero" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funcionario: {
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: '',
        estado: '',
        cidade: '',
        bairro: '',
        numero: ''
      }
    };
  },
  methods: {
    cadastrarFuncionario() {
      console.log('Funcionário cadastrado:', this.funcionario);
      // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou armazenar localmente
      alert('Funcionário cadastrado com sucesso!');
      this.limparFormulario();
    },
    limparFormulario() {
      this.funcionario = {
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: '',
        estado: '',
        cidade: '',
        bairro: '',
        numero: ''
      };
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
div {
  margin-bottom: 10px;
}
label {
  margin-bottom: 5px;
}
input {
  padding: 8px;
  font-size: 16px;
}
button {
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