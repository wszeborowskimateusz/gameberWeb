import Toasted from 'vue-toasted';
import Vue from 'vue';

Vue.use(Toasted);

export default {
  errorToast(message) {
    Vue.toasted.error(message, {
      action: {
        text: 'Cancel',
        onClick: (e, toastObject) => {
          toastObject.goAway(0);
        },
      },
      position: 'bottom-center',
      fitToScreen: true,
      duration: 5000,
    });
  },
};
