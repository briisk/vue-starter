import {
  ADD_TODO_MUTATION,
  REMOVE_TODO_MUTATION,
} from '@/dashboard/components/store-example/store/mutations';

export const ADD_TODO = 'Add TODO';
export const REMOVE_TODO = 'Remove TODO';

export default {
  [ADD_TODO](context, title) {
    context.commit(ADD_TODO_MUTATION, title);
  },
  [REMOVE_TODO](context, id) {
    context.commit(REMOVE_TODO_MUTATION, id);
  },
};
