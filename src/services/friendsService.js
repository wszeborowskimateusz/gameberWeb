import config from '../../config';
import requestSender from '../utilities/requestSender';
import toasts from '../utilities/toasts';

const defaultFriends = [
  {
    id: 1,
    name: 'Jon Snow',
    avatar:
            'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
  },
  {
    id: 2,
    name: 'Will Byers',
    avatar:
            'https://vignette.wikia.nocookie.net/strangerthings8338/images/e/e4/Will_Byers.png/revision/latest/scale-to-width-down/310?cb=20170124225951',
  },
  {
    id: 3,
    name: 'Nancy Wheeler',
    avatar:
            'https://vignette.wikia.nocookie.net/strangerthings8338/images/2/22/Nancy_S3.png/revision/latest?cb=20190704211903',
  },
];

export default {
  async getFriends(token) {
    const url = `${config.apiUrl}/users/friends`;
    const result = await requestSender.sendGetRequest(token, url)
      .then(
        response => response.friends,
        () => {
          toasts.errorToast('Niestety nie udało się wczytać znajomych. Spróbuj odświeżyć stronę.');
          // TODO: Remove this later
          return defaultFriends;
        },
      );

    return result;
  },
};
