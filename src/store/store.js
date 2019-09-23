/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Vuex from 'vuex';

import users from './userAuthenticationStore';
import userProfile from './userProfileStore';
import notificationsStore from './notificationsStore';
import multiplayerStore from './multiplayerStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    userProfile,
    notificationsStore,
    multiplayerStore,
  },
  getters: {
    user: () => localStorage.getItem('user'),
  },
});
