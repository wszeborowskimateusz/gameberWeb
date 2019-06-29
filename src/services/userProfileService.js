import config from '../../config';
import requestSender from '../utilities/requestSender';

export default {
  getUserData(token) {
    const url = `${config.apiUrl}/users/profile`;
    return requestSender.sendGetRequest(token, url);
  },
  changeAvatar(token, avatarId) {
    const url = `${config.apiUrl}/users/profile/change-avatar`;
    return requestSender.sendPostRequest(url, avatarId, token);
  },
  changeBackgroundImage(token, imageId) {
    const url = `${config.apiUrl}/users/profile/change-image`;
    return requestSender.sendPostRequest(url, imageId, token);
  },
};
