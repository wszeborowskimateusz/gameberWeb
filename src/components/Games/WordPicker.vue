<template>
    <div class="wordPicker row">
        <div class="col-12">
            <img width="250" height="250" v-bind:src="gameInfo.img" class="rounded">
        </div>
        <div class="col-12">
            <button class="btn btn-primary m-3"
                v-for="(answer, answerId) in gameInfo.answers" v-bind:key="answer"
                v-on:click="checkAnswer(answerId)">
                    {{answer}}
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    gameInfo: Object,
  },
  methods: {
    checkAnswer(answerId) {
      if (answerId === this.gameInfo.correctAnswer) {
        alert('Correct');
      } else {
        alert('Wrong');
      }
    },
  },
};
</script>
