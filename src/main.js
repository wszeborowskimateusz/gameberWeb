import pl from 'vee-validate/dist/locale/pl';
import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import GAuth from 'vue-google-oauth2';
import App from './App.vue';
import router from './router';
import store from './store/store';
import config from '../config';

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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
