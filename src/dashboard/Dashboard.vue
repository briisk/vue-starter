<template>
  <div id="nav">
    <div>
      This is dashboard view after login
      <button
          type="button"
          @click="logout">
        Logout
      </button>
    </div>
    <router-link to="/">
      Homepage
    </router-link> |
    <router-link to="/example">
      Vuex Store Example
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import { LOGOUT } from '@/login/store/actions';

  export default {
    name: 'Dashboard',
    methods: {
      logout() {
        this.$store.dispatch(LOGOUT)
          .then(() => this.$router.push({ path: '/login' }));
      },
    },
  };
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
