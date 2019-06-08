<template>
    <div class="GameController col-12">
        <h3 class="title">This is categorie with id = {{$route.params.id}}</h3>
        <component class="game" v-bind:gameInfo="this.gameInfo"
            :is="currentGameComponent"></component>
        <ul class="pagination justify-content-center">
            <li class="page-item pr-5 pt-3">
                <button v-on:click="changeComponent('WordGet')"
                    class="page-link">Poprzedni</button>
            </li>
            <li class="page-item pl-5 pt-3">
                <button v-on:click="changeComponent('WordLearning')"
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
    height: 70vh;
}

</style>

<script>
import WordLearning from './Games/WordLearning.vue';
import WordGet from './Games/WordGet.vue';

export default {
  data() {
    return {
      currentGameComponent: 'WordLearning',
      gameInfo: {
        id: 'some id',
        info: 'this is some info',
      },
    };
  },
  components: {
    WordLearning,
    WordGet,
  },
  methods: {
    changeComponent(name) {
      this.currentGameComponent = name;
      this.gameInfo.id = name;
      this.gameInfo.info = `This is info for ${name}`;
    },
  },
};
</script>
