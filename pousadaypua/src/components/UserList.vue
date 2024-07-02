<template>
  <div>
    <h1>Usuários</h1>
    <div class="users-container">
      <UserItem v-for="user in users" :key="user.nome" :user="user" />
    </div>
  </div>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  name: 'UserList',
  components: {
    UserItem
  },
  data() {
    return {
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
  }
}
</script>

<style scoped>
.users-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
