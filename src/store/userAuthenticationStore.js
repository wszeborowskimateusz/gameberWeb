import userService from '../services/userAuthenticationService';
import router from '../router';
import toasts from '../utilities/toasts';

const userToken = JSON.parse(localStorage.getItem('user'));
const userState = userToken
  ? { status: { loggedIn: true }, user: userToken }
  : { status: {}, user: null };

const actions = {
  login({ commit, dispatch }, { username, password }) {
    commit('loginInProgress');
    userService.login(username, password)
      .then(
        (user) => {
          commit('loginSuccess', user);
          router.push('/');
          dispatch('userProfile/getUserData', null, { root: true });
          toasts.successToast(`Witaj z powrotem ${username}`);
        },
        (error) => {
          toasts.errorToast('Wystąpił problem przy próbie logowania. Spróbuj ponownie.');
          commit('loginFailure', error);
        },
      );
  },
  loginWithGoogle({ commit, dispatch }, { authCode }) {
    userService.loginWithGoogle(authCode)
      .then(
        (user) => {
          commit('loginSuccess', user);
          router.push('/');
          dispatch('userProfile/getUserData', null, { root: true });
          toasts.successToast('Witaj z powrotem!');
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
    router.push('/');
    commit('logout');
  },
  register({ commit }, user) {
    commit('registerInProgress');
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
  loginInProgress(state) {
    state.status = { loginInProgress: true };
    state.user = null;
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
  registerInProgress(state) {
    state.status = { registerInProgress: true };
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
