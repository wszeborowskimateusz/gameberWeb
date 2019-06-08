<template>
    <div class="GameController col-12">
        <h3>This is categorie with id = {{$route.params.id}}</h3>
        <component class="game" :is="currentGameComponent"></component>
        <ul class="pagination justify-content-center">
            <li class="page-item pr-5 pt-3">
                <button v-on:click="changeComponent('WordGet')" class="page-link">Poprzedni</button>
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


</style>

<script>
import WordLearning from './Games/WordLearning.vue';
import WordGet from './Games/WordGet.vue';

export default {
  data() {
    return {
      currentGameComponent: 'WordLearning',
    };
  },
  components: {
    WordLearning,
    WordGet,
  },
  methods: {
    changeComponent(name) {
      this.currentGameComponent = name;
    },
  },
};
</script>
