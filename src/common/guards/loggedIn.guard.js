import store from '@/store';

const loggedInGuard = () => (to, from, next) => {
  const isLoggedIn = store.getters.isAuthenticated;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !isLoggedIn) {
    next('/login');
  } else if (requiresAuth && isLoggedIn) {
    next();
  } else {
    next();
  }
};

export default loggedInGuard;
