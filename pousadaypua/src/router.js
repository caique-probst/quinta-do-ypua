import { createRouter, createWebHistory } from 'vue-router';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
import UserList from './components/UserList.vue';
import MainMenu from './components/MainMenu.vue';
import ReservasView from './components/ReservasView.vue';

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
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;