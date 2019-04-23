import { PURGE_AUTH, SET_AUTH } from '@/login/store/mutations.type';

export const LOGIN = 'login';
export const LOGOUT = 'logout';

export default {
  [LOGIN](context) {
    context.commit(SET_AUTH);
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
};
