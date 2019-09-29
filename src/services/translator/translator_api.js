import config from '@/../config';
import requestSender from '@/utilities/requestSender';

const apiBaseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

function callApi(from, to, phrase) {
  const url = `${apiBaseUrl}?key=${config.translateApiKey}&text=${phrase}&lang=${from}-${to}`;
  return requestSender.sendGetRequestWithoutAuthorization(url);
}

/* eslint-disable no-param-reassign */
export default {
  async getEnglishToPolishTranslation(phrase) {
    phrase = encodeURI(phrase);
    const response = await callApi('en', 'pl', phrase);
    return response.code === 200 ? response.text.join('\n') : '';
  },
  async getPolishToEnglishTranslation(phrase) {
    phrase = encodeURI(phrase);
    const response = await callApi('pl', 'en', phrase);
    return response.code === 200 ? response.text.join('\n') : '';
  },
};
/* eslint-enable no-param-reassign */
