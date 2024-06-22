<template>
    <div>
      <h1>Menu Principal</h1>
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
          <tr>
            <td>Thaina Silva</td>
            <td>03/02/25</td>
            <td>06/02/25</td>
            <td>Pago</td>
            <td>01</td>
          </tr>
          <!-- Adicione mais linhas conforme necessário -->
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainMenu'
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