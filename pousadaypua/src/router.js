import { createRouter, createWebHistory } from 'vue-router';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
import UserList from './components/UserList.vue';
import MainMenu from './components/MainMenu.vue';
import ReservasView from './components/ReservasView.vue';
import ReservaDetails from './components/ReservaDetails.vue';
import LimpezaView from './components/LimpezaView.vue';

const routes = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;