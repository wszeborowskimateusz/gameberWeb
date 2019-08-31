import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

const defaultUserStatus = {
  status: 'map',
  testCategoryId: 1,
  beginnersCategories: [
    {
      id: 1,
      img: 'https://images.ctfassets.net/a9odgsv44wmq/SZaQSslPbeB8ju45lM73G/8a6f979bd861b7b038952ffd8ab4c9ff/Menu_BBQBaconDoubleCheeseburger.png',
      name: 'Nazwa kategorii',
      isUnlocked: true,
    },
    {
      id: 7,
      img: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/winter-solstice.jpg?itok=9iEebU2H',
      name: 'Nazwa kategorii',
      isUnlocked: false,
    },
    {
      id: 9,
      img: 'https://images.ctfassets.net/a9odgsv44wmq/SZaQSslPbeB8ju45lM73G/8a6f979bd861b7b038952ffd8ab4c9ff/Menu_BBQBaconDoubleCheeseburger.png',
      name: 'Nazwa kategorii',
      isUnlocked: false,
    },
  ],
};

export default {
  async getUserStatus(token) {
    const url = `${config.apiUrl}/user/status`;
    return requestSender.sendGetRequest(token, url)
      .then(
        result => result,
        () => defaultUserStatus,
      );
  },
  async getMapCountries(token) {
    const url = `${config.apiUrl}/map/countries`;
    return requestSender.sendGetRequest(token, url)
      .then(
        r => r.availableCountries,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać mapy. Spróbuj odświeżyć stronę.');
          return [];
        },
      );
  },

  async getUnlockedCountries(token) {
    const url = `${config.apiUrl}/map/unlockedcountries`;
    return requestSender.sendGetRequest(token, url)
      .then(
        r => r.unlockedCountries,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać listy odblokowanych krajow. Spróbuj odświeżyć stronę.');
          return [];
        },
      );
  },

  async buyCountry(token, countryId) {
    const url = `${config.apiUrl}/map/buyCountry`;
    const body = {
      countryId,
    };
    return requestSender.sendPostRequest(url, body, token)
      .then(
        (r) => {
          const result = {};
          result.status = r.status;
          if (!r.status) {
            result.comment = r.comment;
          }
          return result;
        },
        () => {
          toasts.errorToast('Błąd serwera podczas kupowania kraju');
          return null;
        },
      );
  },
  /* eslint-disable no-underscore-dangle */
  async getAllCategories(token, countries) {
    const url = `${config.apiUrl}/map/getCategories`;
    const body = {
      countriesIds: countries.map(c => c._id),
    };
    return requestSender.sendPostRequest(url, body, token)
      .then(
        r => r.categories,
        () => {
          toasts.errorToast('Bład pobierania kategorii');
          return null;
        },
      );
  },
  /* eslint-enable no-underscore-dangle */

};
