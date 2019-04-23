import Vue from 'vue';
import Vuex from 'vuex';
import login from './login/store/login.module';
import storeExample from '@/dashboard/components/store-example/store/store-example.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    storeExample,
  },
});
