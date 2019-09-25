import config from '@/../config';
import requestSender from '@/utilities/requestSender';

export default {
  getUserData() {
    const url = `${config.apiUrl}/users/profile`;
    return requestSender.sendGetRequest(url);
  },
  changeAvatar(avatarId) {
    const url = `${config.apiUrl}/users/profile/change-avatar`;
    return requestSender.sendPostRequest(url, avatarId);
  },
  changeBackgroundImage(imageId) {
    const url = `${config.apiUrl}/users/profile/change-image`;
    return requestSender.sendPostRequest(url, imageId);
  },
  buyAvatar(avatar) {
    const url = `${config.apiUrl}/users/shop/avatars/buy`;
    return requestSender.sendPostRequest(url, avatar);
  },
  buyBackgroundImage(image) {
    const url = `${config.apiUrl}/users/shop/images/buy`;
    return requestSender.sendPostRequest(url, image);
  },
};
