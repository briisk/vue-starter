<template>
  <div>
    <h1>this is login page</h1>
    <button
        type="button"
        @click="login">
      Login
    </button>
  </div>
</template>

<script>
  import { LOGIN } from '@/login/store/actions';

  export default {
    name: 'Login',
    methods: {
      login() {
        this.$store.dispatch(LOGIN)
          .then(() => this.$router.push({ path: '/' }));
      },
    },
  };
</script>

<style scoped></style>
