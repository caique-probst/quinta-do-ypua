import { createRouter, createWebHistory } from 'vue-router';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
import UserList from './components/UserList.vue';
// Importe outros componentes conforme necessário

const routes = [
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
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;