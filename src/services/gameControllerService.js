import config from '../../config';
import requestSender from '../utilities/requestSender';
import toasts from '../utilities/toasts';

const defaultCategory = {
  games: [
    {
      name: 'WordSearch',
      gameInfo: {
        words: ['penguin', 'bear', 'seal', 'walrus', 'wolf'],
      },
    },
    {
      name: 'WordMatching',
      gameInfo: {
        polishName: 'Pingwin',
        correctAnswer: 'Penguin',
        answers: [
          {
            img: 'http://bi.gazeta.pl/im/3/11672/z11672953IER,Foka-grenlandzka.jpg',
            name: 'Seal',
          },
          {
            img: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/1000x-1.jpg',
            name: 'Penguin',
          },
          {
            img: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/25/POLAR.jpg/revision/latest?cb=20160925151133&path-prefix=pl',
            name: 'Bear',
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg',
            name: 'Walrus',
          },
        ],
      },
    },
    {
      name: 'WordGuessing',
      gameInfo: {
        img: 'https://www.seacoastsciencecenter.org/wp-content/themes/FoundationPress/img/seal%202.png',
        correctAnswer: 'seal',
      },
    },
    {
      name: 'WordPicker',
      gameInfo: {
        img: 'https://www.seacoastsciencecenter.org/wp-content/themes/FoundationPress/img/seal%202.png',
        correctAnswer: 0,
        answers: ['Seal', 'Bear', 'Penguin', 'Water'],
        sound: 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
      },
    },
    {
      name: 'WordLearning',
      gameInfo: {
        polishName: 'Foka',
        englishName: 'Seal',
        img: 'http://bi.gazeta.pl/im/3/11672/z11672953IER,Foka-grenlandzka.jpg',
        sound: '',
      },
    },
    {
      name: 'WordLearning',
      gameInfo: {
        polishName: 'Niedźwiedź polarny',
        englishName: 'Polar bear',
        img: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/25/POLAR.jpg/revision/latest?cb=20160925151133&path-prefix=pl',
        sound: 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
      },
    },
    {
      name: 'WordLearning',
      gameInfo: {
        polishName: 'Mors',
        englishName: 'Walrus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg',
        sound: '',
      },
    },
    {
      name: 'WordLearning',
      gameInfo: {
        polishName: 'Wilk',
        englishName: 'Wolf',
        img: 'https://4.bp.blogspot.com/-aGeDdmUSRiM/WJJKJa_-sMI/AAAAAAABITI/Du7ATdHn8NUH1cP35IGSgNJ_jBeBppx1gCLcB/s1600/ScreenShot8509.jpg',
        sound: '',
      },
    },
  ],
  categoryBackgroundImage: 'https://wallup.net/wp-content/uploads/2018/10/09/1036532-animals-background-53.jpg',
  categoryName: 'Zwierzęta Arktyki',
  categoryCountryIcon: 'https://img.icons8.com/color/48/000000/iceland.png',
  categoryIcon: 'https://img.icons8.com/color/48/000000/seal.png',
};

export default {
  async getCategoryData(token, categoryId) {
    const url = `${config.apiUrl}/games/categories/${categoryId}`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        category => category,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać kategorii. Spróbuj odświeżyć stronę.');
          return defaultCategory;
        },
      );

    return result;
  },
};
