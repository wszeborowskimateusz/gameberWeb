import config from '@/../config';
import requestSender from '@/utilities/requestSender';

const maimumNumberOfDisplayedResults = 7;

export default {
  searchForUsers(token, query) {
    const url = `${config.apiUrl}/users/search?query=${encodeURIComponent(query)}`;
    return requestSender.sendGetRequest(token, url)
      .then(
        searchResult => searchResult.slice(0, maimumNumberOfDisplayedResults),
        // TODO: Remove this later
        () => [],
      );
  },
};
