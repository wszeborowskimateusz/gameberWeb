import userProfileService from '../services/userProfileService';
import toasts from '../utilities/toasts';

const userToken = JSON.parse(localStorage.getItem('user'));
const userDefaultState = {
  user: {
    avatarId: 3,
    avatars: [
      {
        id: 0,
        name: 'Przebiegły zgredek',
        img: 'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
        price: '50',
      },
      {
        id: 3,
        name: 'Straszny ork',
        img: 'https://www.lastlivingcity.com/wp-content/uploads/2018/05/ea47aebe7edcdf32b192efa147066753.jpg',
        price: '125',
      },
    ],
    username: 'No name',
    backgroundImageId: 4,
    backgroundImages: [
      {
        id: 1,
        name: 'Wesoły kasztan',
        img: 'http://3.bp.blogspot.com/-con7HiBmjKE/UGiL2UH1MSI/AAAAAAAAG1o/-TH09TZULK4/s1600/IMG_4845a.jpg',
        price: '70',
      },
      {
        id: 4,
        name: 'Smutny Deszcz',
        img: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        price: 120,
      },
    ],
    level: 1,
    experiencePoints: 19,
    pointsToAchieveNewLevel: 100,
    numberOfCoins: 100,
    achievements: [
      { src: 'https://img.icons8.com/dusk/100/000000/prize.png', name: 'nagroda' },
      { src: 'https://img.icons8.com/dusk/100/000000/trophy.png', name: 'trofeum' },
      { src: 'https://img.icons8.com/dusk/100/000000/medal2.png', name: 'medal' },
      { src: 'https://img.icons8.com/dusk/100/000000/diploma.png', name: 'dyplom' },
    ],
  },
};
const userState = { user: {} };

const actions = {
  getUserData({ commit }) {
    userProfileService.getUserData(userToken)
      .then(
        (user) => {
          commit('gettingDataSuccess', user);
        },
        (error) => {
          toasts.errorToast('Nie udało się wczytać informacji o twoim profilu. Spróbuj odświeżyć stronę');
          commit('gettingDataFailure', error);
        },
      );
  },
  changeAvatar({ commit }, avatarId) {
    userProfileService.changeAvatar(userToken, avatarId)
      .then(
        () => {
          toasts.successToast('Pomyślnie zmieniono avatar');
          commit('changingAvatarSuccess', avatarId);
        },
        () => {
          toasts.errorToast('Nie udało się zmienić avatara. Spróbuj jeszcze raz');
        },
      );
  },
  changeBackgroundImage({ commit }, imageId) {
    userProfileService.changeBackgroundImage(userToken, imageId)
      .then(
        () => {
          toasts.successToast('Pomyślnie zmieniono zdjęcie w tle');
          commit('changingBackgroundImageSuccess', imageId);
        },
        () => {
          toasts.errorToast('Nie udało się zmienić zdjęcia w tle. Spróbuj jeszcze raz');
        },
      );
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  gettingDataSuccess(state, user) {
    state.user = user;
  },
  gettingDataFailure(state) {
    state.user = userDefaultState.user;
  },
  changingAvatarSuccess(state, avatarId) {
    if (state.user) {
      state.user.avatarId = avatarId;
    }
  },
  changingBackgroundImageSuccess(state, imageId) {
    if (state.user) {
      state.user.backgroundImageId = imageId;
    }
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: userState,
  actions,
  mutations,
};
