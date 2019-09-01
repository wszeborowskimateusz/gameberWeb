import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getFriends(token) {
    const url = `${config.apiUrl}/users/friends`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        response => response.friends,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać znajomych. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
};
