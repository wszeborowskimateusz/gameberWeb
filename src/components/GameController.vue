<template>
  <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div class="GameController col-12" v-else-if="category != null">
    <div
      class="background-image"
      :style="{'background-image' : 'url(' + category.categoryBackgroundImage +')'}"
    ></div>
    <div class="content">
      <img width="50" :src="category.categoryCountryIcon" />
      <h2 class="title pl-3 pr-3">Kategoria: {{category.categoryName}}</h2>
      <img width="50" :src="category.categoryIcon" />
      <div v-if="isAnswerLoading" class="answer_loading_indicator">
        <cube-spin class="m-2"></cube-spin>
      </div>
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
        >{{category.currentGameIndex + 1}} / {{category.games.length}}</div>
      </div>
      <div v-if="category.games.length > 0" class="gameContainer">
        <component
          class="game"
          v-bind:gameInfo="category.games[category.currentGameIndex].gameInfo"
          :is="category.games[category.currentGameIndex].name"
        ></component>
      </div>
      <div
        class="btn-toolbar mb-12 justify-content-center"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group mb-3 mr-12 p-1" role="group" aria-label="First group">
          <button type="button" class="m-3 btn btn-primary" v-on:click="prevGame()">
            <img height="50" :src="imagesGetter.getImgUrl('game_controller/prev.png')" />
            Poprzedni
          </button>
          <button
            type="button"
            class="m-3 btn btn-primary"
            :disabled="category.games[category.currentGameIndex]
                          && category.games[category.currentGameIndex].isFinished === false"
            v-on:click="nextGame()"
          >
            Następny
            <img height="50" :src="imagesGetter.getImgUrl('game_controller/next.png')" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-12">
    <h1 class="mb-5">Nie znaleziono kategorii o wskazanym identyfikatorze</h1>
    <img class="m-5" :src="imagesGetter.getImgUrl('profile/crying.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('profile/nothing_found.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('profile/crying.png')" />
  </div>
</template>

<style scoped>
.answer_loading_indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.GameController {
  text-align: center;
  color: #000;
}
.title {
  height: 7vh;
  display: inline-block;
}

.background-image {
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
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

import WordLearning from '@/components/Games/WordLearning.vue';
import WordPicker from '@/components/Games/WordPicker.vue';
import WordGuessing from '@/components/Games/WordGuessing.vue';
import WordMatching from '@/components/Games/WordMatching.vue';
import WordSearch from '@/components/Games/WordSearch.vue';
import Crossword from '@/components/Games/Crossword.vue';
import StoryGame from '@/components/Games/StoryGame.vue';
import PhraseLearning from '@/components/Games/PhraseLearning.vue';

import gameControllerService from '@/services/gameControllerService';
import bootbox from '@/utilities/bootbox';
import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
      isLoading: false,
      isAnswerLoading: false,
      categoriesWithoutFinishing: ['WordLearning', 'StoryGame'],
      category: {
        games: [],
        categoryBackgroundImage: '',
        categoryName: '',
        categoryCountryIcon: '',
        categoryIcon: '',
        currentGameIndex: 0,
        isTestCategory: true,
      },
      categoryId: this.$route.params.id,
    };
  },
  props: {
    isMultiplayer: Boolean,
  },
  created() {
    this.isLoading = true;
    this.fetchCategory();
  },
  computed: {
    ...mapState('users', ['user']),
    gameProgress() {
      return (
        ((this.category.currentGameIndex + 1) / this.category.games.length)
        * 100
      );
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
        .then(() => this.category.games.forEach((game, index) => {
          game.isFinished = this.categoriesWithoutFinishing.includes(game.name)
              || index < this.category.currentGameIndex;

          if (game.name === 'WordMatching') {
            game.gameInfo.answers.forEach(
              (a) => { a.img = imagesGetter.getImageServerUrl(a.img); },
            );
          } else if (game.name === 'StoryGame') {
            game.gameInfo.stories.forEach(
              (s) => { s.img = imagesGetter.getImageServerUrl(s.img); },
            );
          } else {
            game.gameInfo.img = imagesGetter.getImageServerUrl(
              game.gameInfo.img,
            );
          }
        }))
        /* eslint-enable no-param-reassign */
        /* eslint-enable no-return-assign */
        .then(() => this.$forceUpdate());
    },
    async checkAnswer(answer, shouldShowModal) {
      this.isAnswerLoading = true;
      const currentGame = this.category.games[this.category.currentGameIndex];
      const serverResponse = await gameControllerService.checkAnswer(
        this.user,
        currentGame.gameId,
        answer,
      );
      this.isAnswerLoading = false;
      if (this.category.isTestCategory === true || this.isMultiplayer === true) {
        currentGame.isFinished = true;
        const percentage = serverResponse != null ? serverResponse.percentage : null;
        this.nextGameAction(percentage);
      } else if (serverResponse != null) {
        if (serverResponse.isCorrect === true) {
          if (shouldShowModal === true) bootbox.correctAnswerAlert();
          currentGame.isFinished = true;
          this.nextGameAction(serverResponse.percentage);
        } else if (
          shouldShowModal === true
          && serverResponse.isCorrect === false
        ) {
          if (serverResponse.wasAlreadySolved === false) bootbox.incorrectAnswerAlert();
          else {
            bootbox.incorrectAnswerPreviousleSolvedAlert();
            currentGame.isFinished = true;
            this.nextGameAction(serverResponse.percentage);
          }
        }
      }
    },
    async finishGame(answer) {
      if (answer === '') {
        this.checkAnswer('', true);
      } else {
        this.checkAnswer(JSON.stringify(answer), true);
      }
    },
    nextGame() {
      const currentGame = this.category.games[this.category.currentGameIndex];
      if (this.categoriesWithoutFinishing.includes(currentGame.name)) {
        this.checkAnswer('', false);
      } else {
        this.nextGameAction();
      }
    },
    nextGameAction(percentage) {
      if (this.category.currentGameIndex + 1 < this.category.games.length) {
        this.category.currentGameIndex += 1;
      } else {
        this.getCategoryRewards({
          token: this.user,
          categoryId: this.categoryId,
          categoryName: this.category.categoryName,
          isTestCategory: this.category.isTestCategory,
          isMultiplayer: this.isMultiplayer,
          percentage,
        });
      }
    },
    prevGame() {
      if (this.category.currentGameIndex - 1 >= 0) {
        this.category.currentGameIndex -= 1;
      }
    },
  },
};
</script>
