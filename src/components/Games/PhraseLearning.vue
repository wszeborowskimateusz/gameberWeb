<template>
  <div class="phrase_learning__container">
    <p class="h5 m-2">
      W jaki sposób odpowiedziałbyś na takie pytanie:
      <span
        class="font-weight-bold"
      >"{{gameInfo.question}}"</span> Ułóż odpowiedź z poniższych słów.
    </p>
    <div
      v-if="gameInfo.img != null"
      class="user_response__container d-flex justify-content-center p-5 mb-5"
    >
      <div
        class="user_response__image__container"
        :style="{'background-image' : 'url(' + gameInfo.img +')'}"
      ></div>
      <div class="check_answer_button m-2">
        <button type="button" class="btn btn-primary" v-on:click="checkAnswer()">
          Sprawdź odpowiedź
        </button>
      </div>
      <ul class="list-group list-group-horizontal">
        <li
          v-on:click="unselectWord(word, index)"
          class="list-group-item selected_item m-md-2 p-md-4 my-auto"
          v-for="(word, index) in selectedWords"
          v-bind:key="word + index"
        >{{word}}</li>
      </ul>
    </div>
    <div class="words_to_pick__container d-flex justify-content-center">
      <ul class="list-group list-group-horizontal">
        <li
          v-on:click="selectWord(word, index)"
          class="list-group-item item_to_select m-md-2 p-md-4"
          v-for="(word, index) in wordsToSelect"
          v-bind:key="word + index"
        >{{word}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.user_response__container {
  height: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
}

.user_response__container li:hover {
  background-color: rgba(255, 0, 0, 0.5);
}

.user_response__image__container {
  position: absolute;
  background-position: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.check_answer_button {
  position: absolute;
  top: 5px;
  right: 5px;
}

li {
  background-color: #f4e5dd;
  cursor: pointer;
}

.words_to_pick__container li:hover {
  background-color: #edcdc3;
}
</style>

<script>
export default {
  data() {
    return {
      selectedWords: [],
      wordsToSelect: [...this.gameInfo.words],
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
    selectWord(word, wordIndex) {
      this.selectedWords.push(word);
      this.wordsToSelect.splice(wordIndex, 1);

      this.playSound(word);
    },
    unselectWord(word, wordIndex) {
      this.wordsToSelect.push(word);
      this.selectedWords.splice(wordIndex, 1);
    },
    checkAnswer() {
      this.$parent.finishGame(this.selectedWords);
    },
  },
};
</script>
