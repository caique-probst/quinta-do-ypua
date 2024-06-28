import { createRouter, createWebHistory } from 'vue-router';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
import UserList from './components/UserList.vue';
import MainMenu from './components/MainMenu.vue';
import ReservasView from './components/ReservasView.vue';
import LoginView from './components/LoginView.vue';

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
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;