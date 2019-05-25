import userService from '../services/user_authentication';
import router from '../router';
import toasts from '../utilities/toasts';

const userToken = JSON.parse(localStorage.getItem('user'));
const userState = userToken
  ? { status: { loggedIn: true }, user: userToken }
  : { status: {}, user: null };

const actions = {
  login({ commit }, { username, password }) {
    userService.login(username, password)
      .then(
        (user) => {
          commit('loginSuccess', user);
          router.push('/');
          toasts.successToast(`Witaj z powrotem ${username}`);
        },
        (error) => {
          toasts.errorToast('Wystąpił problem przy próbie logowania. Spróbuj ponownie.');
          commit('loginFailure', error);
        },
      );
  },
  logout({ commit }) {
    userService.logout();
    toasts.successToast('Pomyślnie wylogowano się');
    commit('logout');
  },
  register({ commit }, user) {
    userService.register(user)
      .then(
        (userResponse) => {
          commit('registerSuccess', userResponse);
          router.push('/login');
          toasts.successToast('Rejestracja przebiegła pomyślnie. Teraz możesz się zalogować.');
        },
        (error) => {
          toasts.errorToast('Wystąpił problem przy próbie rejestracji. Spróbuj ponownie.');
          commit('registerFailure', error);
        },
      );
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerSuccess(state) {
    state.status = {};
  },
  registerFailure(state) {
    state.status = {};
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: userState,
  actions,
  mutations,
};
