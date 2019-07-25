import toasts from '../utilities/toasts';
import notificationService from '../services/notificationsService';

const defaultNotifications = [
  {
    id: 1,
    type: 'friendship_request',
    img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouJh0Vvrn9GWzoyrv4IqVh4SbDH3OIeftIf5yzLqj4YjmLOkr',
    title: 'Zaproszenie do znajomych',
    name: 'Szymon35',
    description:
        'Otrzymałeś właśnie zaproszenie do grona znajomych od użytkownika Szymon35',
    isRead: false,
  },
  {
    id: 2,
    type: 'achievement_receive',
    img: 'https://img.icons8.com/dusk/100/000000/prize.png',
    title: 'Otrzymałeś osiągnięcie',
    name: 'Nagroda',
    description: 'Otrzymałeś właśnie osiągnięcie',
    isRead: false,
  },
  {
    id: 3,
    type: 'friendship_accepted',
    img:
        'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
    title: 'Zaproszenie zaakceptowane',
    name: 'ZwariowanyMarcin15',
    description:
        'Twoje zaproszenie zostało potwierdzone przez użytkownika ',
    isRead: true,
  },
  {
    id: 4,
    type: 'message_received',
    img:
        'https://www.lastlivingcity.com/wp-content/uploads/2018/05/ea47aebe7edcdf32b192efa147066753.jpg',
    title: 'Otrzymałeś wiadomość',
    name: 'Szymon35',
    description: 'Otrzymałeś właśnie zaproszenie do grona znajomych',
    isRead: true,
  },
];

const notificationsState = { notifications: [] };


const actions = {
  getAllNotifications({ commit }) {
    const userToken = JSON.parse(localStorage.getItem('user'));
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
          // TODO: Remove this later
          notificationsState.notifications.find(x => x.id === notificationId).isRead = true;
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
          // TODO: Remove this later
          notificationsState
            .notifications = notificationsState.notifications.filter(x => x.id !== notificationId);
        },
      );
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  gettingNotificationsSuccess(state, notifications) {
    state.notifications = notifications.notifications;
  },
  gettingNotificationsFailure(state) {
    state.notifications = defaultNotifications;
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
