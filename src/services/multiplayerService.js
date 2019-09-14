import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

const defaultCategories = [
  {
    categoryName: 'Zwierzęta arktyki',
    img: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    categoryId: '1',
  },
  {
    categoryName: 'Jedzenie',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    categoryId: '2',
  },
  {
    categoryName: 'Rolnictwo',
    img: 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    categoryId: '321',
  },
];

export default {
  getAllClashes(token) {
    const url = `${config.apiUrl}/multiplayer/clashes`;
    return requestSender.sendGetRequest(token, url);
  },
  async getCategories(token) {
    const url = `${config.apiUrl}/multiplayer/categories`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        response => response,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać kategorii, w których można się pojedynkować. Spróbuj odświeżyć stronę.');
          // TODO: Remove this later
          return defaultCategories;// [];
        },
      );

    return result;
  },
  async challenge(token, userId, categoryId) {
    const url = `${config.apiUrl}/multiplayer/challenge`;
    const result = await requestSender.sendPostRequest(url, { userId, categoryId }, token)
      .then(
        response => response,
        () => {
          toasts.errorToast('Niestety nie udało się wyzwać gracza na pojedynek. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
};
