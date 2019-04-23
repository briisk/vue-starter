import Vue from 'vue';
import Router from 'vue-router';
import Login from './login/Login.vue';
import dashboardRoutes from './dashboard/dashboardRoutes';
import loggedInGuard from '@/common/guards/loggedIn.guard';

Vue.use(Router);

const baseRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const routes = baseRoutes.concat(dashboardRoutes);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(loggedInGuard());

export default router;
