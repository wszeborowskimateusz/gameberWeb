import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';
import { async } from 'q';

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
      (r) => {
        console.log('unlocked countries')
        console.log(r.unlockedCountries)
        return r.unlockedCountries},
      () => {
        toasts.errorToast('Niestety nie udało się wczytać listy odblokowanych krajow. Spróbuj odświeżyć stronę.');
        return [];
      },
    );
  },

  async buyCountry(token, countryId){
    const url = `${config.apiUrl}/map/buyCountry`;
    const body = {
      countryId: countryId,
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

  async getAllCategories(token, countries){
    const url = `${config.apiUrl}/map/getCategories`;
    const body = {
      countriesIds: countries.map(c => c._id),
    }
    return await requestSender.sendPostRequest(url, body, token)
      .then(
        (r) => {
          return r.categories;
        },
        () => {
          toasts.errorToast('Bład pobierania kategorii');
          return null;
        }
      )
  }

};
