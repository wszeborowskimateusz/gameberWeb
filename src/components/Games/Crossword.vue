<template>
    <div class="row no-gutters">
        <div class="col-6 col-md-4 crossword">
            <canvas width="0" height="0" id="crosswordCanvas"></canvas>
            <form>
                <div class="crosswordRow" v-for="(row, x) in this.game.grid" v-bind:key="x">
                    <div class="m-1 crosswordElem" v-for="(letter, y) in row"
                    v-bind:key="x + ',' + y">
                        <input type="text" :class="[ letter !== null ?
                            'crosswordElemWithLetter'
                            : 'crosswordElemWithoutLetter']"
                            :disabled="letter === null"
                            minlength="1" maxlength="1"
                            pattern="[A-Za-z]{1}"
                            class="crosswordElemInput form-control">
                            <span class="crosswordElemLabel"
                                v-if="letter !== null && letter.label !== null">
                                {{letter.label}}
                            </span>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-4 col-md-6 p-3">
            <div class="m-2 text-center crosswordAnchors inline-block">
                <span class="h4 text-center">Pionowo</span>
                <ul class="text-left list-group" id="crosswordAnchorsAcross"></ul>
            </div>
            <div class="m-2 text-center crosswordAnchors inline-block">
                <span class="h4">Poziomo</span>
                <ul class="text-left list-group" id="crosswordAnchorsDown"></ul>
            </div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary" v-on:click="checkAnswer()">
                Sprawdź odpowiedź
            </button>
        </div>
    </div>
</template>

<style scoped>
.crosswordElemLabel {
    position: absolute;
    bottom: 10px;
    right: 18px;
    font-size: 0.6em;
}

.inline-block {
    display: inline-block;
}

.crosswordElem {
    width: 2vw;
    height: 2vw;
    display: inline-block;
    position:relative;
}

.crosswordElemWithLetter {
    /* background-color: #F4E5DD; */
    color: black;
    font-size: 1em;
    text-align: center;
}

.crosswordElemWithoutLetter {
    background-color: #9DCADF;
}

.crosswordElemInput {
    width: 2vw;
    height: 2vw;
    padding: 0 !important;
}

.crosswordAnchors {
    background-color: #F4E5DD !important;
    font-size: 0.8em;
    text-align: left;
}
</style>

<script>
/* eslint-env browser */
/* global $ */
import bootbox from '../../utilities/bootbox';
import arrayManipulation from '../../utilities/arrayManipulation';

export default {
  data() {
    return {
      game: Object,
    };
  },
  props: {
    gameInfo: Object,
  },
  mounted() {
    const canvas = document.getElementById('crosswordCanvas');

    /* eslint-disable global-require */
    const Crossword = require('crossword');
    /* eslint-enable global-require */

    const longestWordSize = arrayManipulation
      .findLongestStringLength(this.gameInfo.words.map(word => word.word));
    const puzzleSize = Math.min(longestWordSize + 2, 9);

    this.game = new Crossword(canvas, puzzleSize, puzzleSize);
    this.game.clearCanvas(true);

    const crosswordAnchorsAcross = document.getElementById('crosswordAnchorsAcross');
    const crosswordAnchorsDown = document.getElementById('crosswordAnchorsDown');

    this.gameInfo.words.forEach((word) => {
      this.game.addWord(word.word, (error, clueAnchor, direction) => {
        if (error === null) {
          if (direction === 'across') {
            crosswordAnchorsAcross.innerHTML += `
                            <li class="list-group-item">
                                ${clueAnchor} - ${word.description}
                            </li>`;
          } else {
            crosswordAnchorsDown.innerHTML += `
                            <li class="list-group-item">
                                ${clueAnchor} - ${word.description}
                            </li>`;
          }
        }
      });
    });
  },
  methods: {
    checkAnswer() {
      const flatGrid = this.game.grid.flat();
      /* eslint-disable no-param-reassign */
      flatGrid.forEach((element, index, array) => {
        if (element === null) array[index] = '';
        else array[index] = element.letter;
      });
      /* eslint-enable no-param-reassign */

      let isCorrect = true;
      $('.crosswordElemInput').each(function (index) {
        if ($(this).val() !== flatGrid[index]) {
          bootbox.alert(`Niestety nie udało ci się prawidłowo wypełnić krzyżówki 
                    <img src="https://img.icons8.com/color/48/000000/sad.png">`);
          isCorrect = false;
          return false;
        }

        return true;
      });

      if (isCorrect) {
        bootbox.correctAnswerAlert();
        this.$parent.finishGame();
      }
    },
  },
};
</script>
