import config from '../../config';
import requestSender from '../utilities/requestSender';
import toasts from '../utilities/toasts';

const defaultRankings = {
  overall: [
    {
      name: 'Jon Snow',
      userId: 0,
      img: 'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
      level: 10,
      // Here it is an overall amount of EP of a user
      experiencePoints: 18594,
    },
    {
      name: 'Bran Stark',
      userId: 2,
      img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-TtgZ-Jadm-fKft_gra-o-tron-664x442-nocrop.jpg',
      level: 5,
      // Here it is an overall amount of EP of a user
      experiencePoints: 15594,
    },
    {
      name: 'Arya Stark',
      userId: 1,
      img: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/filmy-i-telewizja/gra-o-tron-sezon-8-maisie-william-w-scenie-seksu.-arya-stark-nie-jest-za-mloda/1213534-1-pol-PL/Gra-o-Tron-sezon-8-Arya-Stark-w-odwaznej-scenie-seksu.-Producenci-przesadzili_article.png',
      level: 3,
      // Here it is an overall amount of EP of a user
      experiencePoints: 11235,
    },
  ],
  daily: [
    {
      name: 'Jon Snow',
      userId: 0,
      img: 'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
      level: 10,
      // Here it is an amount of EP of a user gained today
      experiencePoints: 200,
    },
    {
      name: 'Arya Stark',
      userId: 1,
      img: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/filmy-i-telewizja/gra-o-tron-sezon-8-maisie-william-w-scenie-seksu.-arya-stark-nie-jest-za-mloda/1213534-1-pol-PL/Gra-o-Tron-sezon-8-Arya-Stark-w-odwaznej-scenie-seksu.-Producenci-przesadzili_article.png',
      level: 10,
      // Here it is an amount of EP of a user gained today
      experiencePoints: 150,
    },
    {
      name: 'Bran Stark',
      userId: 2,
      img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-TtgZ-Jadm-fKft_gra-o-tron-664x442-nocrop.jpg',
      level: 10,
      // Here it is an amount of EP of a user gained today
      experiencePoints: 100,
    },
  ],
  monthly: [
    {
      name: 'Bran Stark',
      userId: 2,
      img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-TtgZ-Jadm-fKft_gra-o-tron-664x442-nocrop.jpg',
      level: 10,
      // Here it is an amount of EP of a user gained this month
      experiencePoints: 1256,
    },
    {
      name: 'Arya Stark',
      userId: 1,
      img: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/filmy-i-telewizja/gra-o-tron-sezon-8-maisie-william-w-scenie-seksu.-arya-stark-nie-jest-za-mloda/1213534-1-pol-PL/Gra-o-Tron-sezon-8-Arya-Stark-w-odwaznej-scenie-seksu.-Producenci-przesadzili_article.png',
      level: 10,
      // Here it is an amount of EP of a user gained this month
      experiencePoints: 1126,
    },
    {
      name: 'Jon Snow',
      userId: 0,
      img: 'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
      level: 10,
      // Here it is an amount of EP of a user gained this month
      experiencePoints: 1098,
    },
  ],
};

export default {
  async getUsersRanking(token) {
    const url = `${config.apiUrl}/users/rankings`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        rankings => rankings,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać rankingów. Spróbuj odświeżyć stronę.');
          return defaultRankings;
        },
      );

    return result;
  },
};
