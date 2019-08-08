<template>
    <div class="wordPicker row">
        <div class="col-12">
            <img width="250" height="250" v-bind:src="gameInfo.img"
                class="wordPickerImage rounded">
        </div>
        <div class="col-12">
            <button class="btn btn-primary m-3"
                v-for="(answer, answerId) in gameInfo.answers" v-bind:key="answer"
                v-on:click="checkAnswer(answerId, answer)">
                    {{answer}}
            </button>
        </div>
    </div>
</template>

<style scoped>
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}

img {
  max-width: 100%;
}
</style>

<script>
import bootbox from '../../utilities/bootbox';
import tooltip from '../../utilities/tippy';

export default {
  props: {
    gameInfo: Object,
  },
  mounted() {
    tooltip.addTooltip('.wordPickerImage', `${this.gameInfo.answers[this.gameInfo.correctAnswer]}`);
  },
  methods: {
    playSound(sound) {
      if (sound) {
        /* eslint-disable no-undef */
        responsiveVoice.speak(sound);
      }
    },
    checkAnswer(answerId, answer) {
      if (answerId === this.gameInfo.correctAnswer) {
        this.playSound(answer);
        bootbox.correctAnswerAlert();
        this.$parent.finishGame();
      } else {
        bootbox.incorrectAnswerAlert();
      }
    },
  },
};
</script>
