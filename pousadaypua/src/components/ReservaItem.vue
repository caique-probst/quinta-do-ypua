<template>
  <div class="reserva-item" @click="showReservaDetails(reserva.id)">
    <div class="reserva-info">
      <div class="reserva-info-item">
        <p>Nome:</p>
        <p>{{ reserva.nome }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Entrada:</p>
        <p>{{ reserva.entrada }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Saída:</p>
        <p>{{ reserva.saida }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Status:</p>
        <p>{{ reserva.status }}</p>
      </div>
      <div class="reserva-info-item">
        <p>Acomodação:</p>
        <p>{{ reserva.acomodacao }}</p>
      </div>
      <div class="user-info-item">
        <button @click="showActionsPopup = true">:</button>
        <ReservaActionsPopup v-if="showActionsPopup" @close="showActionsPopup = false" @edit="editUser" @delete="deleteUser"/>
      </div>
    </div>
  </div>
</template>

<script>
import ReservaActionsPopup from './ReservaActionsPopup.vue';

export default {
  name: 'ReservaItem',
  props: {
    reserva: {
      type: Object,
      required: true
    },
    reservaId: {
      type: Number,
      required: true
    }
  },
  components: {
      ReservaActionsPopup
  },
  data() {
      return {
        showActionsPopup: false
      };
    },
  methods: {
    showReservaDetails(id) {
      this.$router.push({ name: 'ReservaDetails', params: { id } });
    },
    editUser() {
      this.$emit('edit', this.reserva);
    },
    deleteUser() {
      this.$emit('delete', this.reserva);
    }
  }
}
</script>
  
  <style scoped>
  .reserva-item {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }
  
  .reserva-item:hover {
    background-color: rgba(255, 192, 67, 0.25);
  }
  
  .reserva-info {
    display: flex;
    justify-content: space-between;
  }
  
  .reserva-info-item {
    flex: 1;
    text-align: center;
    padding: 40px;
  }
  
  .reserva-info-item p {
    margin: 0;
    padding-top: 15px;
  }
  </style>