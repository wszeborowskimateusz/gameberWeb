<template>
    <div class="wordGuesser row">
        <div class="col-sm-12 col-md-6 my-auto">
            <img width="250px" height="250px" v-bind:src="gameInfo.img"
                class="wordPickerImage rounded">
        </div>
        <div class="col-sm-12 col-md-6 my-auto">
            <form @submit.prevent="checkAnswer">
                <label for="userAnswer">Wpisz poniżej co widzisz na obrazku</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="userAnswer"
                        placeholder="Co widzisz na obrazku?" v-model="userAnswer">
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-primary" v-on:click="checkAnswer()">
                            Sprawdź odpowiedź
                        </button>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
img {
  max-width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      userAnswer: '',
    };
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
      this.$parent.finishGame(this.userAnswer.toLowerCase());
    },
  },
};
</script>
