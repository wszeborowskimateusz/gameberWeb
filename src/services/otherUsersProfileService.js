import config from '../../config';
import requestSender from '../utilities/requestSender';
import toast from '../utilities/toasts';

const defaultUser = {
  // We should only be able to see one avatar and one backgorund image of a user
  // avatarId and backgroundImageId should match
  // avatars[0].id and backgroundImages[0].id accordingly
  isFriend: true,
  avatarId: 0,
  avatars: [
    {
      id: 0,
      name: 'Przebiegły zgredek',
      img: 'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
      price: '50',
    },
  ],
  username: 'Other user',
  backgroundImageId: 1,
  backgroundImages: [
    {
      id: 1,
      name: 'Wesoły kasztan',
      img: 'http://3.bp.blogspot.com/-con7HiBmjKE/UGiL2UH1MSI/AAAAAAAAG1o/-TH09TZULK4/s1600/IMG_4845a.jpg',
      price: '70',
    },

  ],
  level: 1,
  experiencePoints: 17,
  pointsToAchieveNewLevel: 100,
  achievements: [
    { src: 'https://img.icons8.com/dusk/100/000000/prize.png', name: 'nagroda' },
    { src: 'https://img.icons8.com/dusk/100/000000/trophy.png', name: 'trofeum' },
    { src: 'https://img.icons8.com/dusk/100/000000/medal2.png', name: 'medal' },
    { src: 'https://img.icons8.com/dusk/100/000000/diploma.png', name: 'dyplom' },
  ],

};

export default {
  async getUser(token, userId) {
    const url = `${config.apiUrl}/users/get/${userId}`;
    const result = await requestSender.sendGetRequest(token, url).then(
      results => results,
      () => {
        toast.errorToast('Nie udało się pobrać informacji o użytkowniku');
        // FIXME remove this later
        return defaultUser;
      },
    );

    return result;
  },
};
