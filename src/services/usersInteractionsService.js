import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  sendFriendshipRequest(token, userId) {
    const url = `${config.apiUrl}/users/add-to-friends/${userId}`;
    requestSender.sendPostRequest(url, {}, token).then(
      () => {
        toasts.successToast('Pomyślnie wysłano zaproszenie do znajomych');
      },
      () => {
        toasts.errorToast('Nie udało się wysłać zaproszenia do znajomych. Spróbuj ponownie');
      },
    );
  },
  acceptFriendshipRequest(token, userId) {
    const url = `${config.apiUrl}/friends/accept`;
    requestSender.sendPostRequest(url, { userId }, token)
      .then(() => {
        toasts.successToast('Pomyślnie zaakceptowano zaproszenie.');
      });
  },
  declineFriendshipRequest(token, userId) {
    const url = `${config.apiUrl}/friends/decline`;
    requestSender.sendPostRequest(url, { userId }, token);
  },
};
