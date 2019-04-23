import actions from '@/dashboard/components/store-example/store/actions';
import mutations from '@/dashboard/components/store-example/store/mutations';
import getters from '@/dashboard/components/store-example/store/getters';
import { uuid } from 'vue-uuid';

const state = {
  toDo: [{ id: uuid.v4(), title: 'first TODO', checked: false }],
};

export default {
  state,
  actions,
  mutations,
  getters,
};
