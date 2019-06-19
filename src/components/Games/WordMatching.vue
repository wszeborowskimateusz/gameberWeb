<template>
    <div class="wordMatching row">
        <div class="col-12">
            <div class="row">
                <div class="col-6 text-center offset-3">
                    <span class="title">
                        Które z tych słów oznacza "{{gameInfo.polishName}}" ?
                    </span>
                </div>
                <div class="col-3 text-right">
                    <button type="button" class="btn btn-primary float-right"
                        v-on:click="checkAnswer()">
                        Sprawdź odpowiedź
                    </button>
                </div>
            </div>
        </div>
        <div class="answers col-12 row">
            <div class="col-6 possibleAnswer mb-2" v-for="answer in gameInfo.answers"
                 v-bind:key="answer.name">
                <input type="radio" v-model="selectedAnswer" name="rGroup"
                    :value="answer.name" :id="answer.name">
                <label class="radioLabel" :for="answer.name">
                    <div class="m-2">
                        <img width="150" height="100" v-bind:src="answer.img" class="rounded">
                    </div>
                    <div class="font-weight-bold">
                        <h2>
                            <span class="text-center polishName">
                                {{answer.name}}
                            </span>
                        </h2>
                    </div>
                </label>
            </div>
        </div>

    </div>
</template>

<style scoped>
.answers input[type=radio] {
    display: none;
}
.title {
    font-size: 1.5em;
}
.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
.answers .radioLabel:hover{
  box-shadow: 3px 3px 15px #666;
  border-color:#847D88;
  background: #847D88;
  color: #fff;
  cursor: pointer;

  /*Opacity*/
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}

.answers input[type=radio]:checked + .radioLabel{
  box-shadow: 3px 3px 15px #666;
  border-color:#427696;
  background: #427696;
  color: #fff;
  cursor: pointer;

  /*Opacity*/
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}
</style>

<script>
import shuffle from '../../utilities/shuffle';
import bootbox from '../../utilities/bootbox';

export default {
  data() {
    return {
      selectedAnswer: -1,
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
    checkAnswer() {
      if (this.selectedAnswer !== -1 && this.selectedAnswer === this.gameInfo.correctAnswer) {
        console.log(`Selected: ${this.selectedAnswer}\nCorrect: ${this.gameInfo.correctAnswer}`);
        bootbox.correctAnswerAlert();
        this.$parent.nextGame();
      } else {
        console.log(`Selected: ${this.selectedAnswer}\nCorrect: ${this.gameInfo.correctAnswer}`);
        bootbox.incorrectAnswerAlert();
      }
    },
  },
};
</script>
