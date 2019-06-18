import config from '../../config';
import requestSender from '../utilities/requestSender';

export default {
  getUserData(token) {
    const url = `${config.apiUrl}/users/profile`;
    return requestSender.sendGetRequest(token, url);
  },
};
