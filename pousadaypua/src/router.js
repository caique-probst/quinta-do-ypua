import { createRouter, createWebHistory } from 'vue-router';
import CadastroFuncionario from './components/CadastroFuncionario.vue';
// Importe outros componentes conforme necessário

const routes = [
  {
    path: '/cadastro-funcionario',
    name: 'CadastroFuncionario',
    component: CadastroFuncionario
  },
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;