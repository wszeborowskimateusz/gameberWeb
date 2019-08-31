import config from '../../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

// const defaultCategory = {
//   games: [
//     {
//       name: 'PhraseLearning',
//       gameId: 'asdfdsab3424',
//       correctOrder: ['I', 'am', 'all', 'right'],
//       gameInfo: {
//         question: 'How are you ?',
//         words: ['I', 'all', 'am', 'right'],
//       },
//     },
//     {
//       name: 'WordMatching',
//       gameId: 'asdfdsab3424',
//       correctAnswer: 'How are you ?',
//       gameInfo: {
//         isPhrase: true,
//         polishName: 'Jak się masz ?',
//         answers: [
//           {
//             img: 'https://images.typeform.com/images/fxGsvvmE9wJZ/image/default',
//             name: 'How are you ?',
//           },
//           {
//             img: 'https://images-na.ssl-images-amazon.com/images/I/71dukCYi0aL._SX355_.jpg',
//             name: 'Where is a toilete ?',
//           },
//           {
//             img: 'https://static2.mytraintravel.com/local/cache-vignettes/L760xH505/netherlands-amsterdam_schipol_station-_c_wil_linssen_flickr-no_commercial_use-4642444031-08f3e.jpg',
//             name: 'How can I get to the train station ?',
//           },
//           {
//             img: 'https://static.wixstatic.com/media/384812_0ec71d8036a845d9bb9edbbe9bf73511~mv2.jpg',
//             name: 'Are you ok ?',
//           },
//         ],
//       },
//     },
//     {
//       name: 'StoryGame',
//       gameId: 'asdfdsab3424',
//       gameInfo: {
//         stories: [
//           {
//             img: 'https://www.hakaimagazine.com/wp-content/uploads/header-polar-bear-conflict.jpg',
//             storyEnglish: 'There was a bear called Ben',
//             storyPolish: 'Był sobie niedźwiedź o imieniu Ben',
//           }, {
//             img: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/931/524/PolarBeariStock.jpg?ve=1&tl=1',
//             storyEnglish: 'Ben was a white polar bear',
//             storyPolish: 'Ben był białym niedźwiedziem polarnym',
//           }, {
//             img: 'https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
//             storyEnglish: 'Ben had a brother named John',
//             storyPolish: 'Ben miał brata Johna',
//           }, {
//             img: 'http://www.skolaiimages.com/journal/wp-content/uploads/2012/10/12_oct15608.jpg',
//             storyEnglish: 'Ben and John liked to play with each other',
//             storyPolish: 'Ben i John lubili się ze sobą bawić',
//           }, {
//             img: 'https://www.wwf.org.uk/sites/default/files/styles/social_share_image/public/2016-12/Original_WW22791.jpg?itok=Ouo7tsEJ',
//             storyEnglish: 'Ben and John were best friends',
//             storyPolish: 'Ben i John to byli swoi najlepsi przyjaciele',
//           },
//         ],
//       },
//     },
//     {
//       name: 'WordGuessing',
//       gameId: 'asdfdsab3424',
//       correctAnswer: 'seal',
//       gameInfo: {
//         img: 'https://www.seacoastsciencecenter.org/wp-content/themes/FoundationPress/img/seal%202.png',
//       },
//     },
//     {
//       name: 'Crossword',
//       gameId: 'asdfdsab3424',
//       gameInfo: {
//         words: [
//           { word: 'penguin', description: 'Czarno białe zwierze' },
//           { word: 'bear', description: 'Biały miś' },
//           { word: 'seal', description: 'Patrz jak ... płacze' },
//           { word: 'walrus', description: 'Gruby i wygląda jak foka z kłami' },
//           { word: 'wolf', description: 'Taki większy pies' },
//           { word: 'glacier', description: 'Góra lodowa' },
//           { word: 'cold', description: 'Nie ciepło' },
//         ],
//       },
//     },
//     {
//       name: 'WordSearch',
//       gameId: 'asdfdsab3424',
//       gameInfo: {
//         words: ['penguin', 'bear', 'seal', 'walrus', 'wolf'],
//       },
//     },
//     {
//       name: 'WordMatching',
//       correctAnswer: 'Penguin',
//       gameInfo: {
//         isPhrase: false,
//         polishName: 'Pingwin',
//         answers: [
//           {
//             img: 'http://bi.gazeta.pl/im/3/11672/z11672953IER,Foka-grenlandzka.jpg',
//             name: 'Seal',
//           },
//           {
//             img: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/1000x-1.jpg',
//             name: 'Penguin',
//           },
//           {
//             img: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/25/POLAR.jpg/revision/latest?cb=20160925151133&path-prefix=pl',
//             name: 'Bear',
//           },
//           {
//             img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg',
//             name: 'Walrus',
//           },
//         ],
//       },
//     },
//     {
//       name: 'WordPicker',
//       gameId: 'asdfdsab3424',
//       gameInfo: {
//         img: 'https://www.seacoastsciencecenter.org/wp-content/themes/FoundationPress/img/seal%202.png',
//         correctAnswer: 0,
//         answers: ['Seal', 'Bear', 'Penguin', 'Water'],
//       },
//     },
//     {
//       name: 'WordLearning',
//       gameId: 'asdfdsab3424',
//       gameInfo: {
//         polishName: 'Foka',
//         englishName: 'Seal',
//         img: 'http://bi.gazeta.pl/im/3/11672/z11672953IER,Foka-grenlandzka.jpg',
//       },
//     },
//     {
//       name: 'WordLearning',
//       gameInfo: {
//         polishName: 'Niedźwiedź polarny',
//         englishName: 'Polar bear',
//         img: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/25/POLAR.jpg/revision/latest?cb=20160925151133&path-prefix=pl',
//       },
//     },
//     {
//       name: 'WordLearning',
//       gameInfo: {
//         polishName: 'Mors',
//         englishName: 'Walrus',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg',
//       },
//     },
//     {
//       name: 'WordLearning',
//       gameInfo: {
//         polishName: 'Wilk',
//         englishName: 'Wolf',
//         img: 'https://4.bp.blogspot.com/-aGeDdmUSRiM/WJJKJa_-sMI/AAAAAAABITI/Du7ATdHn8NUH1cP35IGSgNJ_jBeBppx1gCLcB/s1600/ScreenShot8509.jpg',
//       },
//     },
//   ],
//   categoryBackgroundImage: 'https://wallup.net/wp-content/uploads/2018/10/09/1036532-animals-background-53.jpg',
//   categoryName: 'Zwierzęta Arktyki',
//   categoryCountryIcon: 'https://img.icons8.com/color/48/000000/iceland.png',
//   categoryIcon: 'https://img.icons8.com/color/48/000000/seal.png',
//   currentGameIndex: 1,
//   isTestCategory: true,
// };


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
          return null;
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
