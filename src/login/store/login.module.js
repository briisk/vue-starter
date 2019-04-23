import JwtService from '@/common/services/jwt.service';
import mutations from '@/login/store/mutations';
import actions from '@/login/store/actions';
import getters from '@/login/store/getters';

const state = {
  isAuthenticated: !!JwtService.getToken(),
};

export default {
  state,
  actions,
  mutations,
  getters,
};
