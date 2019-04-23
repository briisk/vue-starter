<template>
  <div class="store-example">
    <h1>This is Store Example page with Vuex</h1>
    <div v-for="toDo in getToDo"
        :key="toDo.id"
        class="todo">
      <span>{{ toDo.title }}</span>
      <button type="button"
          @click="removeToDo(toDo.id)">
        Remove
      </button>
    </div>
    <input
        v-model="title"
        v-validate="'required'"
        name="title"
        type="text"
        class="form-control"
        placeholder="Type TODO name">
    <button
        type="button"
        @click="addToDo(title)">
      Add
    </button>
    <div class="error">
      {{ errors.first('title') }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { ADD_TODO, REMOVE_TODO } from '@/dashboard/components/store-example/store/actions';
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';

  Vue.use(VeeValidate);

  export default {
    name: 'StoreExample',
    data() { return { title: '' }; },
    computed: { ...mapGetters(['getToDo']) },
    methods: {
      addToDo(title) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$store.dispatch(ADD_TODO, title);
            this.title = '';
            this.$validator.reset();
          }
        });
      },
      removeToDo(id) {
        this.$store.dispatch(REMOVE_TODO, id);
      },
    },
  };
</script>

<style scoped></style>
