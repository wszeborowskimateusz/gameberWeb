import toasts from '@/utilities/toasts';
import notificationService from '@/services/notificationsService';

const notificationsState = { notifications: [], isLoading: false };

const actions = {
  getAllNotifications({ commit }) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    commit('loading');
    notificationService.getAllNotifications(userToken)
      .then(
        (user) => {
          commit('gettingNotificationsSuccess', user);
        },
        (error) => {
          toasts.errorToast('Nie udało się wczytać informacji o powiadomieniach. Spróbuj odświeżyć stronę');
          commit('gettingNotificationsFailure', error);
        },
      );
  },
  markNotificationAsRead({ commit }, notificationId) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    notificationService.markNoificationAsRead(userToken, notificationId)
      .then(
        () => {
          commit('markingNotificationAsReadSuccess', notificationId);
        },
        () => {
          toasts.errorToast('Nie udało się oznaczyć powiadomienia jako przeczytane. Spróbuj odświeżyć stronę');
        },
      );
  },
  removeNotification({ commit }, notificationId) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    notificationService.removeNotification(userToken, notificationId)
      .then(
        () => {
          commit('removingNotificationSuccess', notificationId);
        },
        () => {
          toasts.errorToast('Nie udało się usunąć powiadomienia. Spróbuj odświeżyć stronę');
        },
      );
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loading(state) {
    state.isLoading = true;
  },
  gettingNotificationsSuccess(state, notifications) {
    state.notifications = notifications.notifications;
    state.isLoading = false;
  },
  gettingNotificationsFailure(state) {
    state.notifications = null;
    state.isLoading = false;
  },
  markingNotificationAsReadSuccess(state, notificationId) {
    state.notifications.find(x => x.id === notificationId).isRead = true;
  },
  removingNotificationSuccess(state, notificationId) {
    state.notifications = state.notifications.filter(x => x.id !== notificationId);
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: notificationsState,
  actions,
  mutations,
};
