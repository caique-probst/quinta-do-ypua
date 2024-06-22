<template>
  <div>
    <h1>Reservas</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Entrada</th>
          <th>Saída</th>
          <th>Status</th>
          <th>Acomodação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" :key="reserva.nome">
          <td>{{ reserva.nome }}</td>
          <td>{{ reserva.entrada }}</td>
          <td>{{ reserva.saida }}</td>
          <td>{{ reserva.status }}</td>
          <td>{{ reserva.acomodacao }}</td>
          <td>
            <!-- Adicione ações aqui, como editar ou cancelar -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReservasView',
  data() {
    return {
      reservas: [
        { nome: 'Thaina Silva', entrada: '03/02/25', saida: '06/02/25', status: 'Pago', acomodacao: '01' },
        { nome: 'João Bruti', entrada: '08/02/25', saida: '--/--/--', status: 'A pagar', acomodacao: '02' }
      ]
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
    border: 1px solid #000000;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>