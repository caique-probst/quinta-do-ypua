<template>
  <div class="user-item">
    <div class="user-info">
      <div class="user-info-item">
        <p>Nome:</p>
        <p>{{ user.nome }}</p>
      </div>
      <div class="user-info-item">
        <p>Função:</p>
        <p>{{ user.função }}</p>
      </div>
      <div class="user-info-item">
        <p>Status:</p>
        <p>{{ user.status }}</p>
      </div>
      <div class="user-info-item">
        <button class="actions-button" @click="showActionsPopup = true">⋮</button>
        <UserActionsPopup 
          v-if="showActionsPopup" 
          @close="showActionsPopup = false" 
          @edit="editUser" 
          @delete="deleteUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserActionsPopup from './UserActionsPopup.vue';

export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    UserActionsPopup
  },
  data() {
    return {
      showActionsPopup: false
    };
  },
  methods: {
    editUser() {
      alert(`Editando usuário: ${this.user.nome}`);
      this.$emit('edit', this.user);
    },
    deleteUser() {
      alert(`Excluindo usuário: ${this.user.nome}`);
      this.$emit('delete', this.user);
    }
  }
}
</script>

<style scoped>
.user-item {
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
}

.user-item:hover {
  background-color: rgba(255, 192, 67, 0.25);
}

.user-info {
  display: flex;
  justify-content: space-between;
}

.user-info-item {
  flex: 1;
  text-align: center;
  padding: 40px;
}

.user-info-item p {
  margin: 0;
  padding-top: 15px;
}

.actions-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.actions-button:hover {
  color: #007bff;
}
</style>
