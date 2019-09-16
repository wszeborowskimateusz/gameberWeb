import toasts from '@/utilities/toasts';
import multiplayerService from '@/services/multiplayerService';

const getDefaultState = () => ({
  clashes: {
    startedNotFinishedByUs: [],
    startedFinishedByUs: [],
    finished: [],
  },
  isLoading: false,
});

// Clashes to appear here must first be accepted by both sides
const defaultClashes = {
  // These are the clashes that are started, but we haven't played our turn yet
  // Opponent might or might not have played, it doens't matter
  startedNotFinishedByUs: [
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      categoryName: 'Zwierzęta arktyki',
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      categoryName: 'Rolnictwo',
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
  ],
  // These are the clashes that are started and finished by us, but are not finished by opponent
  startedFinishedByUs: [
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      categoryName: 'Rolnictwo',
      percentage: 70,
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      percentage: 60,
      categoryName: 'Rolnictwo',
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
  ],
  // These are clashes finished by both of the players
  finished: [
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      percentage: 60,
      opponentsPercentage: 50,
      categoryName: 'Rolnictwo',
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      percentage: 60,
      opponentsPercentage: 80,
      categoryName: 'Rolnictwo',
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
    {
      userId: '5d5bc611f4e34cc164e6a3d4',
      userName: 'John',
      userAvatar:
                'http://www.zdziechowska.pl/wp-content/uploads/2017/12/DSC08253-1-e1515414238695-1170x878.jpg',
      categoryId: '5d3d9c359eae4f18d02267d3',
      percentage: 80,
      opponentsPercentage: 80,
      categoryName: 'Rolnictwo',
      categoryIcon:
                'https://img.icons8.com/ios-filled/50/000000/panda.png',
    },
  ],
};

const multiplayerState = getDefaultState();

const actions = {
  getAllClashes({ commit }, isRefreshing = false) {
    const userToken = JSON.parse(localStorage.getItem('user'));
    if (isRefreshing === false) commit('loading');
    multiplayerService.getAllClashes(userToken)
      .then(
        (clashes) => {
          commit('gettingClashesSuccess', { clashes, isRefreshing });
        },
        () => {
          toasts.errorToast('Nie udało się wczytać informacji o pojedynkach. Spróbuj odświeżyć stronę');
          commit('gettingClashesFailure', isRefreshing);
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
  gettingClashesSuccess(state, { clashes, isRefreshing }) {
    state.clashes = clashes;
    if (isRefreshing === false) { state.isLoading = false; }
  },
  gettingClashesFailure(state, isRefreshing) {
    // TODO: Remove this later
    state.clashes = defaultClashes;// null;
    if (isRefreshing === false) state.isLoading = false;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
};
/* eslint-enable no-param-reassign */


export default {
  namespaced: true,
  state: multiplayerState,
  actions,
  mutations,
};
