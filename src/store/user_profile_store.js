import userProfileService from '../services/user_profile';
import toasts from '../utilities/toasts';

const userToken = JSON.parse(localStorage.getItem('user'));
const userDefaultState = {
  user: {
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
    username: 'No name',
    backgroundImage: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
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
};

/* eslint-disable no-param-reassign */
const mutations = {
  gettingDataSuccess(state, user) {
    state.user = user;
  },
  gettingDataFailure(state) {
    state.user = userDefaultState.user;
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: userState,
  actions,
  mutations,
};
