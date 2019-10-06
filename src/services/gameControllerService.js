import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getCategoryData(categoryId) {
    const url = `${config.apiUrl}/games/categories/${categoryId}`;
    const result = await requestSender.sendGetRequest(url)
      .then(
        (response) => {
          for (let i = 0; i < response.games.length; i += 1) {
            try
            {
              response.games[i].gameInfo = JSON.parse(response.games[i].gameInfo);
            }
            catch(err)
            {
              console.log('error parsing json');
            }
          }
          if (response.currentGameIndex === undefined) {
            response.currentGameIndex = 0;
          }
          return response;
        },
        () => {
          toasts.errorToast('Niestety nie udało się wczytać kategorii. Spróbuj odświeżyć stronę.');
          return null;
        },
      );
    return result;
  },
  async checkAnswer(gameId, answer) {
    const url = `${config.apiUrl}/games/check-answer`;
    const result = await requestSender.sendPostRequest(url, { answer, gameId })
      .then(
        response => response,
        () => {
          toasts.errorToast('Niestety nie udało pobrać odpowiedzi z serwera. Spróbuj jeszcze raz.');
          return null;
        },
      );
    return result;
  },
  finishCategory(categoryId) {
    const url = `${config.apiUrl}/games/categories/finish`;
    return requestSender.sendPostRequest(url, { categoryId });
  },
};
