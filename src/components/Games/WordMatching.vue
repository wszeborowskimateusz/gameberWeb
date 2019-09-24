<template>
  <div class="wordMatching row">
    <div class="game__info col-12 row">
      <div class="col-12 col-sm-6 text-center offset-sm-3">
        <span
          class="title"
          v-if="!gameInfo.isPhrase"
        >Które z tych słów oznacza "{{gameInfo.polishName}}" ?</span>
        <span class="title" v-else>Która z tych fraz oznacza "{{gameInfo.polishName}}" ?</span>
      </div>
      <div class="col-12 col-sm-3 m-2 m-sm-0">
        <button type="button" class="btn btn-primary" v-on:click="checkAnswer()">Sprawdź odpowiedź</button>
      </div>
    </div>
    <div class="answers col-12">
      <div class="row">
        <div
          class="col-12 col-sm-6 possibleAnswer mb-1"
          v-for="answer in gameInfo.answers"
          v-bind:key="answer.name"
        >
          <input
            type="radio"
            v-model="selectedAnswer"
            name="rGroup"
            :value="answer.name"
            :id="answer.name"
            v-on:click="playSound(answer.name)"
          />
          <label class="radioLabel" :for="answer.name">
            <div class="m-2">
              <img v-bind:src="answer.img" class="rounded" />
            </div>
            <div class="font-weight-bold">
              <h2>
                <span class="text-center polishName">{{answer.name}}</span>
              </h2>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game__info {
  min-height: 10vh;
}

.title {
  font-size: 1.5em;
}

img {
  width: 100%;
  max-width: 800px;
}

.answers input[type="radio"] {
  display: none;
}

.answers input[type="radio"]:checked + .radioLabel {
  box-shadow: 3px 3px 15px #666;
  border-color: #427696;
  background: #427696;
  color: #fff;
  cursor: pointer;

  /*Opacity*/
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}

.answers .radioLabel:hover {
  box-shadow: 3px 3px 15px #666;
  border-color: #847d88;
  background: #847d88;
  color: #fff;
  cursor: pointer;

  /*Opacity*/
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}
</style>

<script>
import shuffle from '../../utilities/arrayManipulation';

export default {
  data() {
    return {
      selectedAnswer: '',
    };
  },
  mounted() {
    this.gameInfo.answers = shuffle.shuffleArray(this.gameInfo.answers);
    this.$forceUpdate();
  },
  props: {
    gameInfo: Object,
  },
  methods: {
    playSound(sound) {
      if (sound) {
        /* eslint-disable no-undef */
        responsiveVoice.speak(sound);
      }
    },
    checkAnswer() {
      this.$parent.finishGame(this.selectedAnswer.toLowerCase());
    },
  },
};
</script>
