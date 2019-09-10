import toasts from '@/utilities/toasts';
import notificationService from '@/services/notificationsService';

const getDefaultState = () => ({ notifications: [], isLoading: false });

const notificationsState = getDefaultState();

const actions = {
  getAllNotifications({ commit }, isRefreshing = false) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    if (isRefreshing === false) commit('loading');
    notificationService.getAllNotifications(userToken)
      .then(
        (notifications) => {
          commit('gettingNotificationsSuccess', { notifications, isRefreshing });
        },
        () => {
          toasts.errorToast('Nie udało się wczytać informacji o powiadomieniach. Spróbuj odświeżyć stronę');
          commit('gettingNotificationsFailure', isRefreshing);
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
  resetState({ commit }) {
    commit('resetState');
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loading(state) {
    state.isLoading = true;
  },
  gettingNotificationsSuccess(state, { notifications, isRefreshing }) {
    state.notifications = notifications;
    if (isRefreshing === false) { state.isLoading = false; }
  },
  gettingNotificationsFailure(state, isRefreshing) {
    state.notifications = null;
    if (isRefreshing === false) state.isLoading = false;
  },
  markingNotificationAsReadSuccess(state, notificationId) {
    state.notifications.find(x => x.id === notificationId).isRead = true;
  },
  removingNotificationSuccess(state, notificationId) {
    state.notifications = state.notifications.filter(x => x.id !== notificationId);
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
