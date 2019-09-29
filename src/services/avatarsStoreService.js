import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toasts from '@/utilities/toasts';

export default {
  async getAvatarsSupply() {
    const url = `${config.apiUrl}/shop/avatars`;
    const result = await requestSender.sendGetRequest(url)
      .then(
        avatars => avatars.avatars,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać avatarów. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
  async getBackgroundImagesSupply() {
    const url = `${config.apiUrl}/shop/images`;
    const result = await requestSender.sendGetRequest(url)
      .then(
        images => images.backgroundImages,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać zdjęć w tle. Spróbuj odświeżyć stronę.');
          return null;
        },
      );

    return result;
  },
};
