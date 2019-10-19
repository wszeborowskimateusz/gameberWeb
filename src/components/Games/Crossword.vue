<template>
  <div class="row no-gutters">
    <div class="col-12 col-sm-6 col-md-4 crossword">
      <canvas width="0" height="0" id="crosswordCanvas"></canvas>
      <form>
        <div class="crosswordRow" v-for="(row, x) in game.grid" v-bind:key="x">
          <div class="m-1 crosswordElem" v-for="(letter, y) in row" v-bind:key="x + ',' + y">
            <input
              type="text"
              :id="x + ',' + y"
              :ref="x + ',' + y"
              :class="[ letter !== null ?
                            'crosswordElemWithLetter'
                            : 'crosswordElemWithoutLetter']"
              :disabled="letter === null"
              minlength="1"
              @focus="onFocusChange"
              maxlength="1"
              pattern="[A-Za-z]{1}"
              class="crosswordElemInput form-control"
            />
            <span
              class="crosswordElemLabel"
              v-if="letter !== null && letter.label !== null"
            >{{letter.label}}</span>
          </div>
        </div>
      </form>
    </div>
    <div class="col-12 col-md-4 col-md-6 p-3">
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
.crosswordElem {
  width: 2vw;
  height: 2vw;
  display: inline-block;
  position: relative;
}

.crosswordElemWithLetter {
  color: black;
  font-size: 1em;
  text-align: center;
}

.crosswordElemWithoutLetter {
  background-color: #9dcadf;
}

.crosswordElemInput {
  width: 2vw;
  height: 2vw;
  padding: 0 !important;
}

.crosswordElemLabel {
  position: absolute;
  bottom: 10px;
  right: 18px;
  font-size: 0.6em;
}

.crosswordAnchors {
  background-color: #f4e5dd !important;
  font-size: 0.8em;
  text-align: left;
}

.inline-block {
  display: inline-block;
}
</style>

<script>
/* eslint-env browser */
import $ from 'jquery';
import bootbox from '@/utilities/bootbox';
import arrayManipulation from '@/utilities/arrayManipulation';
import imagesGetter from '@/utilities/imagesGetter';


export default {
  data() {
    return {
      game: Object,
      currentFocus: {
        x: 0,
        y: 0,
      },
    };
  },
  props: {
    gameInfo: Object,
  },
  created() {
    document.onkeydown = (event) => {
      let wasArrowPressed = false;
      switch (event.keyCode) {
        case 37:
          this.moveFocusLeft();
          wasArrowPressed = true;
          break;
        case 38:
          this.moveFocusUp();
          wasArrowPressed = true;
          break;
        case 39:
          this.moveFocusRight();
          wasArrowPressed = true;
          break;
        case 40:
          this.moveFocusDown();
          wasArrowPressed = true;
          break;
        default:
          break;
      }
      if (wasArrowPressed) {
        this.$refs[`${this.currentFocus.x},${this.currentFocus.y}`][0].focus();
      }
    };
  },
  mounted() {
    const canvas = document.getElementById('crosswordCanvas');

    /* eslint-disable global-require */
    const Crossword = require('crossword');
    /* eslint-enable global-require */

    const longestWordSize = arrayManipulation.findLongestStringLength(
      this.gameInfo.words.map(word => word.word),
    );
    const puzzleSize = Math.min(longestWordSize + 2, 9);

    this.game = new Crossword(canvas, puzzleSize, puzzleSize);
    this.game.clearCanvas(true);

    const crosswordAnchorsAcross = document.getElementById(
      'crosswordAnchorsAcross',
    );
    const crosswordAnchorsDown = document.getElementById(
      'crosswordAnchorsDown',
    );

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
      const sadImageUrl = imagesGetter.getImgUrl('games/crossword/sad.png');
      let isCorrect = true;
      $('.crosswordElemInput').each(function (index) {
        if ($(this).val() !== flatGrid[index]) {
          bootbox.alert(`Niestety nie udało ci się prawidłowo wypełnić krzyżówki 
                    <img src="${sadImageUrl}">`);
          isCorrect = false;
          return false;
        }

        return true;
      });

      if (isCorrect) {
        this.$parent.finishGame('');
      }
    },
    moveFocusUp() {
      for (let i = this.currentFocus.x - 1; i >= 0; i -= 1) {
        if (
          this.game.grid[i][this.currentFocus.y] != null
        ) {
          this.currentFocus.x = i;
          break;
        }
      }
    },
    moveFocusDown() {
      for (let i = this.currentFocus.x + 1; i < this.game.grid.length; i += 1) {
        if (
          this.game.grid[i][this.currentFocus.y] != null
        ) {
          this.currentFocus.x = i;
          break;
        }
      }
    },
    moveFocusLeft() {
      for (let i = this.currentFocus.y - 1; i >= 0; i -= 1) {
        if (
          this.game.grid[this.currentFocus.x][i] != null
        ) {
          this.currentFocus.y = i;
          break;
        }
      }
    },
    moveFocusRight() {
      for (let i = this.currentFocus.y + 1; i < this.game.grid[0].length; i += 1) {
        if (
          this.game.grid[this.currentFocus.x][i] != null
        ) {
          this.currentFocus.y = i;
          break;
        }
      }
    },
    onFocusChange(event) {
      const focusedInputId = event.target.id;
      this.currentFocus.x = Number(focusedInputId.split(',')[0]);
      this.currentFocus.y = Number(focusedInputId.split(',')[1]);
    },
  },
};
</script>
