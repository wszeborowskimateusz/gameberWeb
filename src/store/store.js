import Vue from 'vue';
import Vuex from 'vuex';

import users from './user_authentication_store';
import userProfile from './user_profile_store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    userProfile,
  },
});
