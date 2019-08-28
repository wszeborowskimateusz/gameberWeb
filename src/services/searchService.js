import config from '../../config';
import requestSender from '../utilities/requestSender';

const defaultSearchResult = [
  { userId: 1, userName: 'John' },
  { userId: 2, userName: 'Johnny' },
  { userId: 3, userName: 'Johnathan' },
  { userId: 4, userName: 'Emma' },
];

const maimumNumberOfDisplayedResults = 7;

export default {
  searchForUsers(token, query) {
    const url = `${config.apiUrl}/users/search?query=${encodeURIComponent(query)}`;
    return requestSender.sendGetRequest(token, url)
      .then(
        searchResult => searchResult.searchResult.slice(0, maimumNumberOfDisplayedResults),
        // TODO: Remove this later
        () => defaultSearchResult.slice(0, maimumNumberOfDisplayedResults),
      );
  },
};
