<template>
  <div class="wordPicker">
    <div>
      <img v-bind:src="gameInfo.img" class="wordPickerImage rounded mb-2" />
    </div>
    <div>
      <button
        class="btn btn-primary m-3"
        v-for="(answer, answerId) in gameInfo.answers"
        v-bind:key="answer"
        v-on:click="checkAnswer(answerId, answer)"
      >{{answer}}</button>
    </div>
  </div>
</template>

<style scoped>
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}

img {
  width: 100%;
  max-width: 800px;
}
</style>

<script>
export default {
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
    checkAnswer(answerId, answer) {
      this.playSound(answer);
      this.$parent.finishGame(answerId);
    },
  },
};
</script>
