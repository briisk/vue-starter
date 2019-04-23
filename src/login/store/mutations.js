import { PURGE_AUTH, SET_AUTH } from '@/login/store/mutations.type';
import JwtService from '@/common/services/jwt.service';

export default {
  [SET_AUTH](state) {
    state.isAuthenticated = true;
    JwtService.saveToken();
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    JwtService.destroyToken();
  },
};
