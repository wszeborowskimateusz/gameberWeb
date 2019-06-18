<template>
    <div class="GameController col-12">
        <div class="background-image"
            :style="{'background-image' : 'url(' + category.categoryBackgroundImage +')'}">
        </div>
        <div class="content">
            <img :src="category.categoryCountryIcon">
            <h2 class="title pl-3 pr-3">Kategoria: {{this.category.categoryName}}</h2>
            <img :src="category.categoryIcon">
            <div class="progress m-2">
                    <div class="progress-bar dynamic progress-bar-animated progress-bar-striped"
                        :style="{ width: this.gameProgress + '%' }"
                        role="progressbar" :aria-valuenow="this.gameProgress"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar-title bar-title">
                        {{this.currentGameIndex + 1}} / {{this.category.games.length}}
                    </div>
            </div>
            <div v-if="category.games.length > 0" class="gameContainer">
                <component class="game"
                    v-bind:gameInfo="category.games[currentGameIndex].gameInfo"
                    :is="category.games[currentGameIndex].name">
                </component>
            </div>
            <div class="btn-toolbar mb-12 justify-content-center"
                role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group mr-12 p-1" role="group" aria-label="First group">
                    <button type="button" class="m-3 btn btn-primary"
                        v-on:click="prevGame()">
                        <img src="https://img.icons8.com/plasticine/30/000000/circled-chevron-left.png">
                        Poprzedni
                    </button>
                    <button type="button" class="m-3 btn btn-primary"
                        v-on:click="nextGame()">
                        Następny
                        <img src="https://img.icons8.com/plasticine/30/000000/circled-chevron-right.png">
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
    background-size:cover;
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
import { mapState } from 'vuex';
import WordLearning from './Games/WordLearning.vue';
import gameControllerService from '../services/gameControllerService';

export default {
  data() {
    return {
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
    this.fetchCategory();
  },
  computed: {
    ...mapState('users', ['user']),
    gameProgress() {
      return (this.currentGameIndex + 1) / this.category.games.length * 100;
    },
  },
  components: {
    WordLearning,
  },
  methods: {
    fetchCategory() {
      gameControllerService.getCategoryData(this.user, this.categoryId)
        .then((category) => { this.category = category; });
    },
    nextGame() {
      if (this.currentGameIndex + 1 < this.category.games.length) {
        this.currentGameIndex += 1;
      } else {
        // TODO Handle user finishing category
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
