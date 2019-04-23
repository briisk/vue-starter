import * as R from 'ramda';
import { uuid } from 'vue-uuid';

export const ADD_TODO_MUTATION = 'add TODO';
export const REMOVE_TODO_MUTATION = 'Remove TODO';

export default {
  [ADD_TODO_MUTATION](state, title) {
    const newToDo = {
      id: uuid.v4(),
      title,
      checked: false,
    };
    state.toDo = R.append(newToDo)(state.toDo);
  },
  [REMOVE_TODO_MUTATION](state, id) {
    state.toDo = R.reject(R.propEq('id', id))(state.toDo);
  },
};
