import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getFriends() {
    const url = `${config.apiUrl}/users/friends`;
    const result = await requestSender.sendGetRequest(url)
      .then(
        response => response,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać znajomych. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
};
