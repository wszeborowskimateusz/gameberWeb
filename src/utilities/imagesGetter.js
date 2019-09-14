import config from '@/../config';

export default {
  getImgUrl(src) {
    const images = require.context('@/assets', true);
    return images(`./${src}`);
  },
  getImageServerUrl(imgPath) {
    return `${config.apiUrl}/images/${imgPath}`;
  },
};
