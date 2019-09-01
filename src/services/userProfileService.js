import config from '@/../config';
import requestSender from '@/utilities/requestSender';

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
  buyAvatar(token, avatar) {
    const url = `${config.apiUrl}/users/shop/avatars/buy`;
    return requestSender.sendPostRequest(url, avatar, token);
  },
  buyBackgroundImage(token, image) {
    const url = `${config.apiUrl}/users/shop/images/buy`;
    return requestSender.sendPostRequest(url, image, token);
  },
};
