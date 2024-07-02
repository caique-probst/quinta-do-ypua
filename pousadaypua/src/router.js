import { createRouter, createWebHistory } from 'vue-router';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
import UserList from './components/UserList.vue';
import MainMenu from './components/MainMenu.vue';
import ReservasView from './components/ReservasView.vue';
import ReservaDetails from './components/ReservaDetails.vue';
import LimpezaView from './components/LimpezaView.vue';
import ReservaLimpezaDetails from './components/ReservaLimpezaDetails.vue';


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
  },
  {
    path: '/reserva-limpeza/:id',
    name: 'ReservaLimpezaDetails',
    component: ReservaLimpezaDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;