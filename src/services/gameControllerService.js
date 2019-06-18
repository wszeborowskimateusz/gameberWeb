import config from '../../config';
import requestSender from '../utilities/requestSender';


export default {
  getCategoryData(token, categoryId) {
    const url = `${config.apiUrl}/games/categories/${categoryId}`;
    return requestSender.sendGetRequest(token, url);
  },
};
