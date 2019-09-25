import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  sendFriendshipRequest(userId) {
    const url = `${config.apiUrl}/users/add-to-friends/${userId}`;
    return requestSender.sendPostRequest(url, {}).then(
      () => {
        toasts.successToast('Pomyślnie wysłano zaproszenie do znajomych');
      },
      () => {
        toasts.errorToast('Nie udało się wysłać zaproszenia do znajomych. Spróbuj ponownie');
      },
    );
  },
  acceptFriendshipRequest(userId) {
    const url = `${config.apiUrl}/friends/accept-request`;
    requestSender.sendPostRequest(url, { userId })
      .then(() => {
        toasts.successToast('Pomyślnie zaakceptowano zaproszenie.');
      });
  },
  declineFriendshipRequest(userId) {
    const url = `${config.apiUrl}/friends/decline-request`;
    requestSender.sendPostRequest(url, { userId });
  },
};
