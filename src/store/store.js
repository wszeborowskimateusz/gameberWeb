import Vue from 'vue';
import Vuex from 'vuex';

import users from './userAuthenticationStore';
import userProfile from './userProfileStore';
import notificationsStore from './notificationsStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    userProfile,
    notificationsStore,
  },
});
