import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  getAllClashes() {
    const url = `${config.apiUrl}/multiplayer/clashes`;
    return requestSender.sendGetRequest(url);
  },
  async getCategories() {
    const url = `${config.apiUrl}/multiplayer/categories`;
    const result = await requestSender.sendGetRequest(url)
      .then(
        response => response,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać kategorii, w których można się pojedynkować. Spróbuj odświeżyć stronę.');
          return [];
        },
      );

    return result;
  },
  async challenge(userId, categoryId) {
    const url = `${config.apiUrl}/multiplayer/challenge`;
    const result = await requestSender.sendPostRequest(url, { userId, categoryId })
      .then(
        (response) => {
          toasts.errorToast('Pomyślnie wyzwano na pojedynek. Musisz teraz poczekać na akceptację przez przeciwnika');
          return response;
        },
        () => {
          toasts.errorToast('Niestety nie udało się wyzwać gracza na pojedynek. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
  acceptClashRequest(clashId) {
    const url = `${config.apiUrl}/multiplayer/accept-request`;
    requestSender.sendPostRequest(url, { clashId })
      .then(() => {
        toasts.successToast('Pomyślnie zaakceptowano zaproszenie.');
      });
  },
  declineClashRequest(clashId) {
    const url = `${config.apiUrl}/multiplayer/decline-request`;
    requestSender.sendPostRequest(url, { clashId });
  },
};
