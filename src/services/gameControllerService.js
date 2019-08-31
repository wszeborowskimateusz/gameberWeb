import config from '../../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

const defaultCategory = {
  games: [
    {
      name: 'PhraseLearning',
      gameId: 'asdfdsab3424',
      correctOrder: ['I', 'am', 'all', 'right'],
      gameInfo: {
        question: 'How are you ?',
        words: ['I', 'all', 'am', 'right'],
      },
    },
  ],
  categoryBackgroundImage: 'https://wallup.net/wp-content/uploads/2018/10/09/1036532-animals-background-53.jpg',
  categoryName: 'Zwierzęta Arktyki',
  categoryCountryIcon: 'https://img.icons8.com/color/48/000000/iceland.png',
  categoryIcon: 'https://img.icons8.com/color/48/000000/seal.png',
  currentGameIndex: 0,
  isTestCategory: true,
};


export default {
  async getCategoryData(token, categoryId) {
    const url = `${config.apiUrl}/games/categories/${categoryId}`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        (response) => {
          for (let i = 0; i < response.games.length; i += 1) {
            response.games[i].gameInfo = JSON.parse(response.games[i].gameInfo);
          }
          if (response.currentGameIndex === undefined) {
            response.currentGameIndex = 0;
          }
          return response;
        },
        () => {
          toasts.errorToast('Niestety nie udało się wczytać kategorii. Spróbuj odświeżyć stronę.');
          // FIXME Remove this default category
          return defaultCategory;
          // return null;
        },
      );
    return result;
  },
  async checkAnswer(token, gameId, answer) {
    const url = `${config.apiUrl}/games/check-answer`;
    const result = await requestSender.sendPostRequest(url, { answer, gameId }, token)
      .then(
        response => response,
        () => {
          toasts.errorToast('Niestety nie udało pobrać odpowiedzi z serwera. Spróbuj jeszcze raz.');
          // FIXME: Remove this later
          return false;
        },
      );
    return result;
  },
  finishCategory(token, categoryId) {
    const url = `${config.apiUrl}/games/category/finish`;
    return requestSender.sendPostRequest(url, { categoryId }, token);
  },
};
