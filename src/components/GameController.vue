<template>
    <div class="GameController col-12">
        <h3 class="title">This is categorie with id = {{$route.params.id}}</h3>
        <div class="progress m-2">
                <div class="progress-bar dynamic progress-bar-animated progress-bar-striped"
                    :style="{ width: this.gameProgress + '%' }"
                    role="progressbar" :aria-valuenow="this.gameProgress"
                    aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar-title bar-title">
                    {{this.currentGameIndex + 1}} / {{this.games.length}}
                </div>
        </div>
        <component class="game"
            v-bind:gameInfo="games[currentGameIndex].gameInfo"
            :is="games[currentGameIndex].name"></component>
        <ul class="pagination justify-content-center">
            <li class="page-item pr-5 pt-3">
                <button v-on:click="prevGame()"
                    class="page-link">Poprzedni</button>
            </li>
            <li class="page-item pl-5 pt-3">
                <button v-on:click="nextGame()"
                    class="page-link">Następny</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.GameController {
     text-align: center;
}
.title {
    height: 5vh;
}

.game {
    height: 65vh;
    padding: 1%;
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
