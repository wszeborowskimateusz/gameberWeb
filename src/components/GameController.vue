<template>
    <div class="GameController col-12">
        <div class="background-image"
            :style="{'background-image' : 'url(' + categoryBackgroundImage +')'}">
        </div>
        <div class="content">
            <h2 class="title">Kategoria: {{this.categoryName}}</h2>
            <div class="progress m-2">
                    <div class="progress-bar dynamic progress-bar-animated progress-bar-striped"
                        :style="{ width: this.gameProgress + '%' }"
                        role="progressbar" :aria-valuenow="this.gameProgress"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar-title bar-title">
                        {{this.currentGameIndex + 1}} / {{this.games.length}}
                    </div>
            </div>
            <div class="gameContainer">
                <component class="game"
                    v-bind:gameInfo="games[currentGameIndex].gameInfo"
                    :is="games[currentGameIndex].name">
                </component>
            </div>
            <div class="btn-toolbar mb-12 justify-content-center"
                role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group mr-12 p-1" role="group" aria-label="First group">
                    <button type="button" class="m-3 btn btn-primary"
                        v-on:click="prevGame()">Poprzedni</button>
                    <button type="button" class="m-3 btn btn-primary"
                        v-on:click="nextGame()">Następny</button>
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
    height: 5vh;
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
    height: 65vh;
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
import WordLearning from './Games/WordLearning.vue';
import WordGet from './Games/WordGet.vue';

export default {
  data() {
    return {
      games: [
        {
          name: 'WordLearning',
          gameInfo: {
            id: '1',
            info: 'this is some info',
          },
        },
        {
          name: 'WordLearning',
          gameInfo: {
            id: '2',
            info: 'this is some info',
          },
        },
        {
          name: 'WordGet',
          gameInfo: {
            id: '3',
            info: 'this is some info',
          },
        },
        {
          name: 'WordLearning',
          gameInfo: {
            id: '4',
            info: 'this is some info',
          },
        },
      ],
      currentGameIndex: 0,
      categoryBackgroundImage: 'https://wallup.net/wp-content/uploads/2018/10/09/1036532-animals-background-53.jpg',
      categoryName: 'Zwierzęta Arktyki',
      categoryId: this.$route.params.id,
    };
  },
  computed: {
    gameProgress() {
      return (this.currentGameIndex + 1) / this.games.length * 100;
    },
  },
  components: {
    WordLearning,
    WordGet,
  },
  methods: {
    nextGame() {
      if (this.currentGameIndex + 1 < this.games.length) {
        this.currentGameIndex += 1;
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
