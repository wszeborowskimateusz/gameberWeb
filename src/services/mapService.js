import config from '../../config';
import requestSender from '../utilities/requestSender';
import toasts from '../utilities/toasts';

const defaultAvailableCountries = [];

export default {
  async getMapCountries(token) {
    const url = `${config.apiUrl}/map/countries`;
    let availableCountries = [];
    await requestSender.sendGetRequest(token, url)
    .then(
      (r) => {availableCountries = r.availableCountries},
      () => {
        console.log('error downoloading countries');
        toasts.errorToast('Niestety nie udało się wczytać mapy. Spróbuj odświeżyć stronę.');
        availableCountries = defaultAvailableCountries;
      },
    );
    return availableCountries;
  },

  async getUnlockedCountries(token){
    const url = `${config.apiUrl}/map/unlockedcountries`;
    let unlockedCountries = [];
    await requestSender.sendGetRequest(token, url)
    .then(
      (r) => {unlockedCountries = r.unlockedCountries},
      () => {
        toasts.errorToast('Niestety nie udało się wczytać listy odblokowanych krajow. Spróbuj odświeżyć stronę.');
      },
    );
    return unlockedCountries;
  },    

  async buyCountry(token, countryISO){
    const url = `${config.apiUrl}/map/buyCountry`;
    let body = {};
    body.countryISO = countryISO;
    let result = {};
    await requestSender.sendPostRequest(url, body, token)
        .then(
            (r) => { 
                result.status = r.status;
                if (!r.status){
                    result.comment = r.comment;
                }
            },
            () => {
                toasts.errorToast('Błąd serwera podczas kupowania kraju');
            }
        );
    return result;
    },

};
