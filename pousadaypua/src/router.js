import { createRouter, createWebHistory } from 'vue-router';
import LoginView from './components/LoginView.vue';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
import UserList from './components/UserList.vue';
import MainMenu from './components/MainMenu.vue';
import ReservasView from './components/ReservasView.vue';
import ReservaDetails from './components/ReservaDetails.vue';
import LimpezaView from './components/LimpezaView.vue';
import ReservaLimpezaDetails from './components/ReservaLimpezaDetails.vue';
import NovaReserva from './components/NovaReserva.vue'


const routes = [
  {
    path: '/MainMenu',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/Novareserva',
    name: 'NovaReserva',
    component: NovaReserva
  },
  {
    path: '/cadastro-funcionario',
    name: 'CadastroFuncionario',
    component: CadastroFuncionario
  },
  {
    path: '/usuarios',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/reservas',
    name: 'ReservasView',
    component: ReservasView
  },
  {
    path: '/reserva/:id',
    name: 'ReservaDetails',
    component: ReservaDetails,
    props: true
  },
  {
    path: '/limpeza',
    name: 'LimpezaView',
    component: LimpezaView
  },
  {
    path: '/reserva-limpeza/:id',
    name: 'ReservaLimpezaDetails',
    component: ReservaLimpezaDetails,
    props: true
  },
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;