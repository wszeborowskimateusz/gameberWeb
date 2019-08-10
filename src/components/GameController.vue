<template>
  <div v-if="isLoading" class="col-12 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div class="GameController col-12" v-else>
    <div
      class="background-image"
      :style="{'background-image' : 'url(' + category.categoryBackgroundImage +')'}"
    ></div>
    <div class="content">
      <img :src="category.categoryCountryIcon" />
      <h2 class="title pl-3 pr-3">Kategoria: {{category.categoryName}}</h2>
      <img :src="category.categoryIcon" />
      <div class="progress m-2">
        <div
          class="progress-bar dynamic progress-bar-animated progress-bar-striped"
          :style="{ width: this.gameProgress + '%' }"
          role="progressbar"
          :aria-valuenow="this.gameProgress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          class="progress-bar-title bar-title"
        >{{this.currentGameIndex + 1}} / {{this.category.games.length}}</div>
      </div>
      <div v-if="category.games.length > 0" class="gameContainer">
        <component
          class="game"
          v-bind:gameInfo="category.games[currentGameIndex].gameInfo"
          :is="category.games[currentGameIndex].name"
        ></component>
      </div>
      <div
        class="btn-toolbar mb-12 justify-content-center"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group mr-12 p-1" role="group" aria-label="First group">
          <button type="button" class="m-3 btn btn-primary" v-on:click="prevGame()">
            <img src="https://img.icons8.com/plasticine/30/000000/circled-chevron-left.png" />
            Poprzedni
          </button>
          <button
            type="button"
            class="m-3 btn btn-primary"
            :disabled="category.games[currentGameIndex]
                          && category.games[currentGameIndex].isFinished === false"
            v-on:click="nextGame()"
          >
            Następny
            <img
              src="https://img.icons8.com/plasticine/30/000000/circled-chevron-right.png"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.GameController {
  text-align: center;
  color: #000;
}
.title {
  height: 7vh;
  display: inline-block;
}

.background-image {
  filter: blur(5px);
  -webkit-filter: blur(5px);
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.game {
  height: 60vh;
  padding: 1%;
  background: rgba(244, 229, 221, 0.5);
}

.progress {
  position: relative;
}

.progress-bar-title {
  position: absolute;
  text-align: center;
  line-height: 20px;
  overflow: hidden;
  color: #000;
  right: 0;
  left: 0;
  top: 0;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import WordLearning from './Games/WordLearning.vue';
import WordPicker from './Games/WordPicker.vue';
import WordGuessing from './Games/WordGuessing.vue';
import WordMatching from './Games/WordMatching.vue';
import WordSearch from './Games/WordSearch.vue';
import Crossword from './Games/Crossword.vue';
import StoryGame from './Games/StoryGame.vue';
import PhraseLearning from './Games/PhraseLearning.vue';
import gameControllerService from '../services/gameControllerService';

export default {
  data() {
    return {
      isLoading: false,
      categoriesWithoutFinishing: ['WordLearning', 'StoryGame'],
      category: {
        games: [],
        categoryBackgroundImage: '',
        categoryName: '',
        categoryCountryIcon: '',
        categoryIcon: '',
      },
      currentGameIndex: 0,
      categoryId: this.$route.params.id,
    };
  },
  created() {
    this.isLoading = true;
    this.fetchCategory();
  },
  computed: {
    ...mapState('users', ['user']),
    gameProgress() {
      return ((this.currentGameIndex + 1) / this.category.games.length) * 100;
    },
  },
  components: {
    WordLearning,
    WordPicker,
    WordGuessing,
    WordMatching,
    WordSearch,
    Crossword,
    StoryGame,
    PhraseLearning,
    CubeSpin,
  },
  methods: {
    ...mapActions('userProfile', ['getCategoryRewards']),
    fetchCategory() {
      gameControllerService
        .getCategoryData(this.user, this.categoryId)
        .then((category) => {
          this.isLoading = false;
          this.category = category;
        })
        /* eslint-disable no-param-reassign */
        /* eslint-disable no-return-assign */
        .then(() => this.category.games.forEach(
          game => (game.isFinished = this.categoriesWithoutFinishing.includes(game.name)),
        ))
        /* eslint-enable no-param-reassign */
        /* eslint-enable no-return-assign */
        .then(() => this.$forceUpdate());
    },
    finishGame() {
      this.category.games[this.currentGameIndex].isFinished = true;
      this.nextGame();
    },
    nextGame() {
      if (this.currentGameIndex + 1 < this.category.games.length) {
        this.currentGameIndex += 1;
      } else {
        this.getCategoryRewards({
          token: this.user,
          categoryId: this.categoryId,
          categoryName: this.category.categoryName,
        });
      }
    },
    prevGame() {
      if (this.currentGameIndex - 1 >= 0) {
        this.currentGameIndex -= 1;
      }
    },
  },
};
</script>
