import config from '../../config';
import requestSender from '../utilities/requestSender';
import toasts from '../utilities/toasts';

const defaultCategory = {
  games: [
    {
      name: 'StoryGame',
      gameInfo: {
        stories: [
          {
            img: 'https://www.hakaimagazine.com/wp-content/uploads/header-polar-bear-conflict.jpg',
            storyEnglish: 'There was a bear called Ben',
            sound: 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
            storyPolish: 'Był sobie niedźwiedź o imieniu Ben',
          }, {
            img: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/931/524/PolarBeariStock.jpg?ve=1&tl=1',
            storyEnglish: 'Ben was a white polar bear',
            sound: '',
            storyPolish: 'Ben był białym niedźwiedziem polarnym',
          }, {
            img: 'https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            storyEnglish: 'Ben had a brother named John',
            sound: '',
            storyPolish: 'Ben miał brata Johna',
          }, {
            img: 'http://www.skolaiimages.com/journal/wp-content/uploads/2012/10/12_oct15608.jpg',
            storyEnglish: 'Ben and John liked to play with each other',
            sound: '',
            storyPolish: 'Ben i John lubili się ze sobą bawić',
          }, {
            img: 'https://www.wwf.org.uk/sites/default/files/styles/social_share_image/public/2016-12/Original_WW22791.jpg?itok=Ouo7tsEJ',
            storyEnglish: 'Ben and John were best friends',
            sound: '',
            storyPolish: 'Ben i John to byli swoi najlepsi przyjaciele',
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
      name: 'Crossword',
      gameInfo: {
        words: [
          { word: 'penguin', description: 'Czarno białe zwierze' },
          { word: 'bear', description: 'Biały miś' },
          { word: 'seal', description: 'Patrz jak ... płacze' },
          { word: 'walrus', description: 'Gruby i wygląda jak foka z kłami' },
          { word: 'wolf', description: 'Taki większy pies' },
          { word: 'glacier', description: 'Góra lodowa' },
          { word: 'cold', description: 'Nie ciepło' },
        ],
      },
    },
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
  finishCategory(token, categoryId) {
    const url = `${config.apiUrl}/games/category/finish`;
    return requestSender.sendPostRequest(url, categoryId, token);
  },
};
