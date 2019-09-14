<template>
  <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div v-else-if="clashes == null" class="col-12">
    <ErrorComponent message="Wystąpił problem przy próbie wczytania pojedynków" />
  </div>
  <div v-else class="multiplayer__container col-12">
    <div
      v-for="(clashCategory, categoryName , i) in clashes"
      v-bind:key="i"
      class="mb-5 card shadow"
    >
      <div class="clash__header p-2">
        <p class="h2">{{clashedCategoriesTitles[i]}}</p>
        <p class="h4">{{clashedCategoriesSubTitles[i]}}</p>
        <div v-if="categoryName === 'finished'" class="p-2">
          <p>
            Liczba wygranych pojedynków:
            <b>{{statistics[0]}}</b>
          </p>
          <p>
            Liczba przegranych pojedynków:
            <b>{{statistics[1]}}</b>
          </p>
          <p>
            Liczba zremisowanych pojedynków:
            <b>{{statistics[2]}}</b>
          </p>
        </div>
      </div>
      <div v-if="clashes[categoryName].length === 0">
        <p class="p-3 h5">Brak pojedynków w danej kategorii</p>
        <img class="m-2" :src="imagesGetter.getImgUrl('multiplayer/crying.png')" />
        <img class="m-2" :src="imagesGetter.getImgUrl('multiplayer/nothing_found.png')" />
        <img class="m-2" :src="imagesGetter.getImgUrl('multiplayer/crying.png')" />
      </div>
      <div
        class="multiplayer__link"
        v-for="(clash, index) in clashes[categoryName]"
        v-bind:key="'' + index + ',' + i"
        :href="'games/' + clash.categoryId"
        :class="[categoryName === 'startedNotFinishedByUs' ? '' : 'disabled']"
      >
        <div
          class="clash__container m-2 p-2 border"
          :style="[categoryName === 'finished' ?
            clash.percentage < clash.opponentsPercentage ?
            {'background-color': 'rgba(255, 0, 0, 0.8)'}
            : clash.percentage > clash.opponentsPercentage ?
                  {'background-color': 'rgba(0, 255, 0, 0.8)'}
                : {'background-color': 'rgba(255, 255, 0, 0.8)'}
          : {'background-color': 'rgba(255, 255, 255, 0.5)'}]"
        >
          <p class="inline_paragraph">Pojedynek z:</p>
          <router-link class="multiplayer__link p-2" :to="'users/' + clash.userId">
            <b>{{clash.userName}}</b>
            <img class="rounded-circle m-2 ml-3" width="50" :src="clash.userAvatar" />
          </router-link>
          <br />
          <p class="inline_paragraph">
            Kategoria:
            <b>{{clash.categoryName}}</b>
          </p>
          <img width="50" class="m-2 ml-3" :src="clash.categoryIcon" />
          <p
            class="h3 p-3"
            v-if="categoryName === 'startedFinishedByUs'"
          >Twój wynik: {{clash.percentage}}%</p>
          <div v-if="categoryName === 'startedNotFinishedByUs'" class="p-3">
            <router-link :to="'games/' + clash.categoryId">
              <button class="btn btn-primary">Rozegraj pojedynek</button>
            </router-link>
          </div>
          <div v-if="categoryName === 'finished'" class="m-2">
            <p class="h4">
              Twój wynik: {{clash.percentage}}%
              <br />
              Wynik przeciwnika: {{clash.opponentsPercentage}}%
            </p>
            <p v-if="clash.percentage > clash.opponentsPercentage" class="h3">
              <b>Wygrana</b>
            </p>
            <p v-else-if="clash.percentage < clash.opponentsPercentage" class="h3">
              <b>Przegrana</b>
            </p>
            <p v-else class="h3">
              <b>Remis</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.multiplayer__container {
  position: relative;
}

p.inline_paragraph {
  display: inline;
}

.multiplayer__link {
  color: #2c3e50;
}

.multiplayer__link:hover {
  text-decoration: none;
}

a.disabled {
  pointer-events: none;
  cursor: default;
}

.top_left {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';

import imagesGetter from '@/utilities/imagesGetter';

import ErrorComponent from '@/components/Error.vue';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';

export default {
  data() {
    return {
      clashedCategoriesTitles: [
        'Pojedynki rozpoczęte, ale nieskończone przez ciebie',
        'Pojedynki rozpoczęte, skończone przez ciebie',
        'Pojedynki zakończone',
      ],
      clashedCategoriesSubTitles: [
        'To są pojedynki, które czekają na twoją kolei',
        'To są pojedynki, które czekają na ruch przeciwnika',
        'To są pojedynki już zakończone',
      ],
      imagesGetter,
    };
  },
  mounted() {
    this.getAllClashes();
  },
  computed: {
    ...mapState('users', ['user']),
    ...mapState('multiplayerStore', ['clashes', 'isLoading']),
    statistics() {
      let won = 0;
      let lost = 0;
      let draw = 0;
      const { finished } = this.clashes;
      for (let i = 0; i < finished.length; i += 1) {
        if (finished[i].percentage > finished[i].opponentsPercentage) won += 1;
        else if (finished[i].percentage < finished[i].opponentsPercentage) lost += 1;
        else draw += 1;
      }

      return [won, lost, draw];
    },
  },
  methods: {
    ...mapActions('multiplayerStore', ['getAllClashes']),
  },
  components: {
    ErrorComponent,
    CubeSpin,
  },
};
</script>
