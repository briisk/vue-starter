<template>
  <div class="home">
    <img
        alt="Vue logo"
        src="../../../assets/logo.png">
    <HelloWorld
        msg="Welcome to Briisk Starter Vue.js App"></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from '@/dashboard/components/hello-world/HelloWorld.vue';

  export default {
    name: 'HomePage',
    components: {
      HelloWorld,
    },
  };
</script>
