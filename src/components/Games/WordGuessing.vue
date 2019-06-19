<template>
    <div class="wordGuesser row">
        <div class="col-6 my-auto">
            <img width="250" height="250" v-bind:src="gameInfo.img"
                class="wordPickerImage rounded">
        </div>
        <div class="col-6 my-auto">
            <form>
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

</style>

<script>
import bootbox from '../../utilities/bootbox';

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
    checkAnswer() {
      if (this.userAnswer.toUpperCase() === this.gameInfo.correctAnswer.toUpperCase()) {
        bootbox.correctAnswerAlert();
        this.$parent.nextGame();
      } else {
        bootbox.incorrectAnswerAlert();
      }
    },
  },
};
</script>
