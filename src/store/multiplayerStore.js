import toasts from '@/utilities/toasts';
import multiplayerService from '@/services/multiplayerService';

const getDefaultState = () => ({
  clashes: {
    startedNotFinishedByUs: [],
    startedFinishedByUs: [],
    finished: [],
  },
  clashesToPlayCount: 0,
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
  getAllClashes({ commit }) {
    commit('loading');
    multiplayerService.getAllClashes()
      .then(
        (clashesArray) => {
          const clashes = getClashesCategoriesFromArray(clashesArray);
          commit('gettingClashesSuccess', clashes);
        },
        () => {
          toasts.errorToast('Nie udało się wczytać informacji o pojedynkach. Spróbuj odświeżyć stronę');
          commit('gettingClashesFailure');
        },
      );
  },
  setClashesToPlayAmount({ commit }, amount) {
    commit('settingClashesToPlayAmountSuccess', amount);
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
  gettingClashesSuccess(state, clashes) {
    state.clashes = clashes;
    state.clashesToPlayCount = clashes.startedNotFinishedByUs.length;
    state.isLoading = false;
  },
  gettingClashesFailure(state) {
    state.clashes = null;
    state.isLoading = false;
  },
  settingClashesToPlayAmountSuccess(state, amount) {
    state.clashesToPlayCount = amount;
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
