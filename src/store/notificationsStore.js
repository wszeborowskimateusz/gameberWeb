import toasts from '@/utilities/toasts';
import notificationService from '@/services/notificationsService';

const getDefaultState = () => ({ notifications: [], isLoading: false, notificationsCount: 0 });

const notificationsState = getDefaultState();

const actions = {
  getAllNotifications({ commit }) {
    commit('loading');
    notificationService.getAllNotifications()
      .then(
        (notifications) => {
          commit('gettingNotificationsSuccess', notifications);
        },
        () => {
          toasts.errorToast('Nie udało się wczytać informacji o powiadomieniach. Spróbuj odświeżyć stronę');
          commit('gettingNotificationsFailure');
        },
      );
  },
  setNotificationsCount({ commit }, amount) {
    commit('settingNotificationsAmountSuccess', amount);
  },
  markNotificationAsRead({ commit }, notificationId) {
    notificationService.markNoificationAsRead(notificationId)
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
    notificationService.removeNotification(notificationId)
      .then(
        () => {
          commit('removingNotificationSuccess', notificationId);
        },
        () => {
          toasts.errorToast('Nie udało się usunąć powiadomienia. Spróbuj odświeżyć stronę');
        },
      );
  },
  resetState({ commit }) {
    commit('resetState');
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loading(state) {
    state.isLoading = true;
  },
  gettingNotificationsSuccess(state, notifications) {
    state.notifications = notifications;
    state.notificationsCount = notifications.length;
    state.isLoading = false;
  },
  gettingNotificationsFailure(state) {
    state.notifications = null;
    state.isLoading = false;
  },
  settingNotificationsAmountSuccess(state, amount) {
    state.notificationsCount = amount;
  },
  markingNotificationAsReadSuccess(state, notificationId) {
    state.notifications.find(x => x.id === notificationId).isRead = true;
    state.notificationsCount = state.notifications.length;
  },
  removingNotificationSuccess(state, notificationId) {
    state.notifications = state.notifications.filter(x => x.id !== notificationId);
    state.notificationsCount = state.notifications.length;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: notificationsState,
  actions,
  mutations,
};
