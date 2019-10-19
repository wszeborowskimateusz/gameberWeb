/*eslint-disable */
import Es6Promise from 'es6-promise';
import 'babel-polyfill';
Es6Promise.polyfill()

import pl from 'vee-validate/dist/locale/pl';
import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import GAuth from 'vue-google-oauth2';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
import config from '@/../config';
import toasts from '@/utilities/toasts'
import '@trevoreyre/autocomplete-vue/dist/style.css';

require('bootstrap');

window.wordsearch = require('wordsearch');

Validator.localize('pl', pl);
Vue.use(VeeValidate, { locale: 'pl' });

const bootbox = require('bootbox');

bootbox.setLocale('pl');

Vue.config.productionTip = false;

const gauthOption = {
  clientId: `${config.googleClientId}`,
  scope: 'profile email',
  prompt: 'select_account',
};
Vue.use(GAuth, gauthOption);

// Speaker
/* eslint-disable no-undef */
responsiveVoice.setDefaultVoice('UK English Male');

function checkForWrongToken(to, from, next) {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/', '/about', '/tutorial'];
  const authRequired = !publicPages.includes(to.path);

  // See if there is a JWT in local storage
  const loggedIn = localStorage.getItem('user');

  if (!loggedIn && store.state.users.status.loggedIn) {
    store.dispatch('users/logout', null, { root: true });
    toasts.errorToast('Twój token jest nieprawidłowy, dla bezpieczeństwa wylogowano cię z aplikacji');
    return next('/login');
  } else if (authRequired && !loggedIn) {
    toasts.errorToast('Aby dostać się na tę stronę musisz się zalogować');
    return next('/login');
  }

  if (loggedIn && (to.path === '/login' || to.path === '/register')) {
    return next('/');
  }

  return next();
}

// Prevent accessing restricted pages if not logged in
router.beforeEach((to, from, next) => {
  checkForWrongToken(to, from, next);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
