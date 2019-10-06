import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getUserStatus() {
    const url = `${config.apiUrl}/users/status`;
    return requestSender.sendGetRequest(url)
      .then(
          result => result,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać statusu użytkownika. Spróbuj odświeżyć stronę.');
          return null;
        },
      );
  },
  async getMapCountries() {
    const url = `${config.apiUrl}/map/countries`;
    return requestSender.sendGetRequest(url)
      .then(
        r => r.availableCountries,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać mapy. Spróbuj odświeżyć stronę.');
          return [];
        },
      );
  },

  async getUnlockedCountries() {
    const url = `${config.apiUrl}/map/unlockedcountries`;
    return requestSender.sendGetRequest(url)
      .then(
        r => r.unlockedCountries,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać listy odblokowanych krajow. Spróbuj odświeżyć stronę.');
          return [];
        },
      );
  },

  async buyCountry(countryId) {
    const url = `${config.apiUrl}/map/buyCountry`;
    const body = {
      countryId,
    };
    return requestSender.sendPostRequest(url, body)
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
  async getAllCategories(countries) {
    const url = `${config.apiUrl}/map/getCategories`;
    const body = {
      countriesIds: countries.map(c => c._id),
    };
    return requestSender.sendPostRequest(url, body)
      .then(
        r => r.categories,
        () => {
          toasts.errorToast('Bład pobierania kategorii');
          return [];// null;
        },
      );
  },
  /* eslint-enable no-underscore-dangle */

};
