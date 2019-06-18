import pl from 'vee-validate/dist/locale/pl';
import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue';
import router from './router';

import store from './store/store';

require('bootstrap');

Validator.localize('pl', pl);
Vue.use(VeeValidate, { locale: 'pl' });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
