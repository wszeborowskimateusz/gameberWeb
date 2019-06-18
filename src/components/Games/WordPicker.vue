<template>
    <div class="wordPicker row">
        <div class="col-12">
            <img width="250" height="250" v-bind:src="gameInfo.img"
                class="wordPickerImage rounded">
        </div>
        <div class="col-12">
            <button class="btn btn-primary m-3"
                v-for="(answer, answerId) in gameInfo.answers" v-bind:key="answer"
                v-on:click="checkAnswer(answerId)">
                    {{answer}}
            </button>
        </div>
        <div v-if="gameInfo.sound" class="col-12">
            <button class="btn" v-on:click="playSound(gameInfo.sound)">
                <img src="https://img.icons8.com/nolan/64/000000/medium-volume.png">
            </button>
        </div>
    </div>
</template>

<style scoped>
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
</style>

<script>
import tippy from 'tippy.js';
import bootbox from '../../utilities/bootbox';

export default {
  props: {
    gameInfo: Object,
  },
  mounted() {
    this.playSound(this.gameInfo.sound);
    tippy('.wordPickerImage', {
      content: `${this.gameInfo.answers[this.gameInfo.correctAnswer]}`,
      placement: 'right',
      arrow: true,
      animation: 'shift-away',
      theme: 'google',
      interactive: true,
    });
  },
  updated() {
    this.playSound(this.gameInfo.sound);
  },
  methods: {
    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
    checkAnswer(answerId) {
      if (answerId === this.gameInfo.correctAnswer) {
        bootbox.alert('Tak jest! To jest prawidłowa odpowiedź!<img src="https://img.icons8.com/color/48/000000/fire-element.png">');
        this.$parent.nextGame();
      } else {
        bootbox.alert('Niestety nie jest to prawidłowa odpowiedź <img src="https://img.icons8.com/color/48/000000/sad.png">');
      }
    },
  },
};
</script>
