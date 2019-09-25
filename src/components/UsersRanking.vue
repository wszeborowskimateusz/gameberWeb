<template>
  <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div v-else-if="rankings != null &&
    Object.entries(rankings).length !== 0 && rankings.constructor === Object"
    class="ranking__container col-12  mb-5">
    <div class="btn-group special mb-2" role="group" aria-label="Basic example">
      <button
        v-for="type in rankingTypes"
        v-bind:key="type.pol"
        type="button"
        class="btn btn-primary"
        v-on:click="changeRanging(type)"
      >{{type.pl}}</button>
    </div>
    <table class="table">
      <tr class="ranking__entry thead-dark">
        <th scope="col">Miejsce</th>
        <th scope="col">Avatar</th>
        <th scope="col">Nazwa użytkownika</th>
        <th scope="col">Punkty doświadczenia</th>
        <th scope="col">Poziom</th>
      </tr>
      <tbody>
        <tr
          class="ranking__entry m-1"
          v-for="(user, index) in rankings[pickedRanking]"
          v-bind:key="user.name"
        >
          <td>{{index + 1}}.</td>
          <td>
            <img class="ranking__entry__image" :src="user.img" width="100" height="100" />
          </td>
          <td>
            <router-link :to="'/users/' + user.userId">{{user.name}}</router-link>
          </td>
          <td>{{user.experiencePoints}}</td>
          <td>{{user.level}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-12" v-else>
    <ErrorComponent
      message='Nie udało się wczytać rankingu graczy.
              Być może ranking nie został jeszcze przygotowany'
    />
  </div>
</template>

<style scoped>
.ranking__entry {
  background-color: #f4e5dd;
  color: #427696;
  font-size: 1em;
}

.ranking__entry__image {
  border-radius: 50%;
}

.table > tbody > tr > td {
  vertical-align: middle;
}

.btn-group.special {
  display: flex;
}

.special .btn {
  flex: 1;
}
</style>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import usersRankingService from '../services/usersRankingService';
import ErrorComponent from './Error.vue';

export default {
  data() {
    return {
      isLoading: false,
      rankings: {},
      pickedRanking: 'overall',
      rankingTypes: [
        { eng: 'overall', pl: 'Całościowy' },
        { eng: 'monthly', pl: 'Miesięczny' },
        { eng: 'daily', pl: 'Codzienny' },
      ],
    };
  },
  created() {
    this.isLoading = true;
    this.fetchRankings();
  },
  methods: {
    changeRanging(type) {
      this.pickedRanking = type.eng;
    },
    fetchRankings() {
      usersRankingService
        .getUsersRanking()
        .then((rankings) => {
          this.isLoading = false;
          this.rankings = rankings;
        })
        .then(() => this.$forceUpdate());
    },
  },
  components: {
    CubeSpin,
    ErrorComponent,
  },
};
</script>
