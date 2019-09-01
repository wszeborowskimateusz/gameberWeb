import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getUsersRanking(token) {
    const url = `${config.apiUrl}/users/rankings`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        rankings => rankings,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać rankingów. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
};
