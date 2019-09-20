import userProfileService from '@/services/userProfileService';
import gameControllerService from '@/services/gameControllerService';
import toasts from '@/utilities/toasts';
import bootbox from '@/utilities/bootbox';
import imagesGetter from '@/utilities/imagesGetter';
import router from '@/router';

const getDefaultState = () => ({
  user: {}, isLoading: false,
});

const userState = getDefaultState();


function formatMessage(rewards, categoryName, isTestCategory, isPassed, isMultiplayer, percentage) {
  if (isTestCategory === true && isPassed === false) {
    return `Niestety nie udało Ci się rozwiązać testu. Przed przejściem do mapy przygotowaliśmy
    dla Ciebie dodatkowe poziomy, które pomogą Ci poznać podstawowe słówka i zwroty z języka angielskiego`;
  }
  if (isMultiplayer === true) {
    return `Zakończyłeś właśnie swoją część pojedynku. Zdobyłeś <b>${percentage}%</b>.
    Teraz musisz poczekać na ruch przeciwnika`;
  }
  if (isPassed === false) {
    return 'Niestety nie udało Ci się przejść danej kategorii. Spróbuj później';
  }
  let message = `Gratulacje! Ukończyłeś właśnie 
    ${isTestCategory === true ? 'test' : 'kategorię'}: 
    "${categoryName}" Twoje nagrody to:<br><br>`;
  if (rewards.achievements) {
    rewards.achievements.forEach((achievement) => {
      message += `<img width="25" src="${imagesGetter.getImgUrl('user_profile_store/achievement.png')}"> 
      ${achievement.name}<br>`;
    });
  }
  if (rewards.coins) {
    message += `<img width="25" src="${imagesGetter.getImgUrl('user_profile_store/coins.png')}"> ${
      rewards.coins}<br>`;
  }
  if (rewards.experiencePoints) {
    message += `<img width="25" src="${imagesGetter.getImgUrl('user_profile_store/experience.png')}"> ${
      rewards.experiencePoints}<br>`;
  }
  if (isTestCategory === true) {
    message += 'Możesz teraz przejść do zdobywanias świata.';
  }
  return message;
}

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
    token, categoryId, categoryName, isTestCategory, isMultiplayer, percentage,
  }) {
    gameControllerService.finishCategory(token, categoryId)
      .then(
        (rewards) => {
          bootbox.alert(
            formatMessage(rewards, categoryName, isTestCategory,
              rewards.isPassed, isMultiplayer, percentage),
          );
          dispatch('getUserData');
          router.push('/map');
        },
        () => {
          toasts.errorToast('Niestety nie udało się ukończyć kategorii. Wystąpił problem z serwerem');
        },
      );
  },
  resetState({ commit }) {
    commit('resetState');
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
    state.user = null;
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
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: userState,
  actions,
  mutations,
};
