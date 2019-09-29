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

function getClashesCategoriesFromArray(clashesArray) {
  const startedNotFinishedByUs = clashesArray.filter(clash => clash.percentage == null);
  const startedFinishedByUs = clashesArray.filter(
    clash => clash.percentage != null && clash.opponentsPercentage == null,
  );

  const finished = clashesArray.filter(
    clash => clash.percentage != null && clash.opponentsPercentage != null,
  );

  const clashes = {
    startedNotFinishedByUs,
    startedFinishedByUs,
    finished,
  };

  return clashes;
}

const multiplayerState = getDefaultState();

const actions = {
  getAllClashes({ commit }, isRefreshing = false) {
    if (isRefreshing === false) commit('loading');
    multiplayerService.getAllClashes()
      .then(
        (clashesArray) => {
          const clashes = getClashesCategoriesFromArray(clashesArray);
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
    state.clashes = null;
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
