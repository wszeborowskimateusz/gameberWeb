import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getMapCountries(token) {
    const url = `${config.apiUrl}/map/countries`;
    return await requestSender.sendGetRequest(token, url)
    .then(
      (r) => {return r.availableCountries},
      () => {
        toasts.errorToast('Niestety nie udało się wczytać mapy. Spróbuj odświeżyć stronę.');
        return [];
      },
    );
  },

  async getUnlockedCountries(token){
    const url = `${config.apiUrl}/map/unlockedcountries`;
    return await requestSender.sendGetRequest(token, url)
    .then(
      (r) => {return r.unlockedCountries},
      () => {
        toasts.errorToast('Niestety nie udało się wczytać listy odblokowanych krajow. Spróbuj odświeżyć stronę.');
        return [];
      },
    );
  },

  async buyCountry(token, countryISO){
    const url = `${config.apiUrl}/map/buyCountry`;
    const body = {
      countryISO: countryISO,
    };
    return await requestSender.sendPostRequest(url, body, token)
        .then(
            (r) => { 
                const result = {};
                result.status = r.status;
                if (!r.status){
                    result.comment = r.comment;
                }
                return result;
            },
            () => {
                toasts.errorToast('Błąd serwera podczas kupowania kraju');
                return null;
            }
        );
  },

  async getCountryCategories(token, countryISO){
    const url = `${config.apiUrl}/map/countryCategories`;
    const body = {
      countryISO: countryISO,
    }
    return await requestSender.sendPostRequest(url, body, token)
      .then(
        (r) => {
          return r.categories;
        },
        () => {
          toasts.errorToast('Błąd serwera podczas pobierania kategorii dla kraju ' + countryISO);
          return null;
        }
      );
  }

};
