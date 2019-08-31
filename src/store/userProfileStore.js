import userProfileService from '../services/userProfileService';
import gameControllerService from '../services/gameControllerService';
import toasts from '../utilities/toasts';
import bootbox from '../utilities/bootbox';
import router from '../router';


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
const userState = { user: {}, isLoading: false };


function formatMessage(rewards, categoryName, isTestCategory, isPassed) {
  if (isPassed === false) {
    return 'Niestety nie udało Ci się przejść danej kategorii. Spróbuj później';
  }
  let message = `Gratulacje! Ukończyłeś właśnie 
    ${isTestCategory === true ? 'test' : 'kategorię'}: 
    "${categoryName}" Twoje nagrody to:<br><br>`;
  if (rewards.achievements) {
    rewards.achievements.forEach((achievement) => {
      message += `<img width="25" src="https://img.icons8.com/doodle/48/000000/first-place-ribbon.png"> ${
        achievement.name}<br>`;
    });
  }
  if (rewards.coins) {
    message += `<img width="25" src="https://img.icons8.com/color/48/000000/coins.png"> ${
      rewards.coins}<br>`;
  }
  if (rewards.experiencePoints) {
    message += `<img width="25" src="https://img.icons8.com/plasticine/100/000000/accessibility2.png"> ${
      rewards.experiencePoints}<br>`;
  }
  if (isTestCategory === true) {
    message += 'Możesz teraz przejść do zdobywanias świata.';
  }
  return message;
}

const defaultCategoryRewards = {
  achievements: [
    { src: 'https://img.icons8.com/dusk/100/000000/prize.png', name: 'nagroda' },
    { src: 'https://img.icons8.com/dusk/100/000000/prize.png', name: 'nagroda' },
  ],
  coins: 20,
  experiencePoints: 30,
  isPassed: false,
};


const actions = {
  getUserData({ commit }) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    commit('loading');
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
    const userToken = JSON.parse(localStorage.getItem('user'));
    userProfileService.changeAvatar(userToken, { avatarId })
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
    const userToken = JSON.parse(localStorage.getItem('user'));
    userProfileService.changeBackgroundImage(userToken, { imageId })
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
  /* eslint-disable no-unused-vars */
  buyAvatar({ dispatch }, avatar) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    userProfileService.buyAvatar(userToken, avatar)
      .then(
        () => {
          toasts.successToast('Pomyślnie zakupiono avatar');
          dispatch('getUserData');
        },
        () => {
          toasts.errorToast('Nie udało się zakupić avatara. Spróbuj jeszcze raz');
        },
      );
  },
  buyBackgroundImage({ dispatch }, image) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    userProfileService.buyBackgroundImage(userToken, image)
      .then(
        () => {
          toasts.successToast('Pomyślnie zakupiono zdjęcie w tle');
          dispatch('getUserData');
        },
        () => {
          toasts.errorToast('Nie udało się zakupić zdjęcia w tle. Spróbuj jeszcze raz');
        },
      );
  },
  /* eslint-enable no-unused-vars */
  getCategoryRewards({ dispatch }, {
    token, categoryId, categoryName, isTestCategory,
  }) {
    gameControllerService.finishCategory(token, { categoryId })
      .then(
        (rewards) => {
          bootbox.alert(formatMessage(rewards, categoryName, isTestCategory, rewards.isPassed));
          dispatch('getUserData');
          router.push('/map');
        },
        () => {
          // FIXME Remove this alerts
          toasts.errorToast('Niestety nie udało się ukończyć kategorii. Wystąpił problem z serwerem');
          bootbox.alert(formatMessage(defaultCategoryRewards, categoryName,
            isTestCategory, defaultCategoryRewards.isPassed));
          dispatch('getUserData');
          router.push('/map');
        },
      );
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loading(state) {
    state.isLoading = true;
  },
  gettingDataSuccess(state, user) {
    state.user = user.user;
    state.isLoading = false;
  },
  gettingDataFailure(state) {
    state.user = userDefaultState.user;
    state.isLoading = false;
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
