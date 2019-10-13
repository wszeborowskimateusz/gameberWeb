import userService from '@/services/userAuthenticationService';
import router from '@/router';
import toasts from '@/utilities/toasts';
import bootbox from '@/utilities/bootbox';
import imagesGetter from '@/utilities/imagesGetter';

function formatEverydayAwardsMessage(awards) {
  let message = '';
  if (awards.loginStreak === 1) {
    message += `Bardzo się cieszymy,
     że zdecydowałeś się nas odwiedzić. Wróć jutro a twoje nagrody będą jeszcze lepsze`;
  } else {
    message += `Bardzo się cieszymy, że znowu nas odwiedziłeś. To już dzień numer ${awards.loginStreak}, 
    przez który codziennie się zalogowałeś. Zasługujesz na jakąś nagrodę.`;
  }
  message += '<br><b>Twoje nagrody to:</b><br>';
  if (awards.coins != null) {
    message += `<img width="25" 
    src="${imagesGetter.getImgUrl('user_authentication_store/coins.png')}"> 
    ${awards.coins}<br>`;
  }
  if (awards.experiencePoints != null) {
    message += `<img width="25" 
    src="${imagesGetter.getImgUrl('user_authentication_store/experience.png')}"> 
    Punkty doświadczenie: ${awards.experiencePoints}<br>`;
  }
  if (awards.achievements != null) {
    awards.achievements.forEach((achievement) => {
      message += `<img width="25" 
      src="${imagesGetter.getImgUrl('user_authentication_store/achievement.png')}"> 
      ${achievement.name}
      <img width="25" src="${achievement.src}"/>
      <br>`;
    });
  }

  return message;
}

function formatSeasonalCategoryMessage(seasonalCategoryName, seasonalCategoryImg) {
  return `Dostępna jest nowe wyzwanie sezonowe<br/><b>${seasonalCategoryName}<b>
  <br/><img class="img-fluid" src="${seasonalCategoryImg}"/>`;
}

function onLoginSuccess(commit, dispatch, user, username) {
  commit('loginSuccess');
  if (user.isFirstLoginAttempt) {
    router.push('/tutorial');
    toasts.successToast(`Witaj ${username}`);
  } else {
    router.push('/');
    if (username) {
      toasts.successToast(`Witaj z powrotem ${username}`);
    } else {
      toasts.successToast('Witaj z powrotem');
    }
  }
  dispatch('userProfile/getUserData', null, { root: true });
  dispatch('notificationsStore/getAllNotifications', null, { root: true });
  dispatch('multiplayerStore/getAllClashes', null, { root: true });

  if (user.everydayAwards != null) {
    bootbox.alert(formatEverydayAwardsMessage(user.everydayAwards));
  }
  if (user.seasonalCategoryId != null) {
    bootbox.customConfirmationDialog(
      formatSeasonalCategoryMessage(user.seasonalCategoryName, user.seasonalCategoryImg),
      (result) => {
        if (result) {
          router.push(`/games/${user.seasonalCategoryId}`);
        }
      },
      'Przyjmuję wyzwania',
      'Odrzucam wyzwanie',
    );
  }
}

const userToken = JSON.parse(localStorage.getItem('user'));

const userState = userToken
  ? { status: { loggedIn: true } }
  : { status: {}, user: null };

const actions = {
  login({ commit, dispatch }, { username, password }) {
    commit('loginInProgress');
    userService.login(username, password)
      .then(
        user => onLoginSuccess(commit, dispatch, user, username),
        (error) => {
          toasts.errorToast('Wystąpił problem przy próbie logowania. Spróbuj ponownie.');
          commit('loginFailure', error);
        },
      );
  },
  loginWithGoogle({ commit, dispatch }, { authCode }) {
    userService.loginWithGoogle(authCode)
      .then(
        user => onLoginSuccess(commit, dispatch, user),
        (error) => {
          toasts.errorToast('Wystąpił problem przy próbie logowania. Spróbuj ponownie.');
          commit('loginFailure', error);
        },
      );
  },
  logout({ commit, dispatch }) {
    userService.logout();
    toasts.successToast('Pomyślnie wylogowano się');
    dispatch('notificationsStore/resetState', null, { root: true });
    dispatch('userProfile/resetState', null, { root: true });
    dispatch('multiplayerStore/resetState', null, { root: true });
    commit('logout');
    router.push('/');
  },
  register({ commit }, user) {
    commit('registerInProgress');
    userService.register(user)
      .then(
        (userResponse) => {
          commit('registerSuccess', userResponse);
          router.push('/login');
          toasts.successToast('Rejestracja przebiegła pomyślnie. Teraz możesz się zalogować.');
        },
        (error) => {
          toasts.errorToast('Wystąpił problem przy próbie rejestracji. Spróbuj ponownie.');
          commit('registerFailure', error);
        },
      );
  },
};

/* eslint-disable no-param-reassign */
const mutations = {
  loginSuccess(state) {
    state.status = { loggedIn: true };
  },
  loginInProgress(state) {
    state.status = { loginInProgress: true };
  },
  loginFailure(state) {
    state.status = {};
  },
  logout(state) {
    state.status = {};
  },
  registerSuccess(state) {
    state.status = {};
  },
  registerInProgress(state) {
    state.status = { registerInProgress: true };
  },
  registerFailure(state) {
    state.status = {};
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: userState,
  actions,
  mutations,
};
