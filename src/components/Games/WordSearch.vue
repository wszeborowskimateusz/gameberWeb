<template>
    <div class="wordSearch row">
        <div class="puzzle col-6">
            <div v-for="(row, x) in puzzle.grid" v-bind:key="row.length + x" >
                <button class="puzzleButton btn btn-primary m-1"
                    v-on:click="pressLetter($event, x, y)"
                    v-for="(cell, y) in row" v-bind:key="cell + y">
                        {{cell}}
                </button>
            </div>
        </div>
        <div class="col-3">
            <div class="word border m-3" v-for="word in gameInfo.words" v-bind:key="word">
                {{word}}
            </div>
        </div>
        <div class="col-3">
            <button type="button" class="btn btn-primary"
                        v-on:click="checkAnswer()">
                        Sprawdź odpowiedź
            </button>
        </div>
    </div>
</template>

<style scoped>
.puzzleButton {
    width: 3vw;
    height: 3vw;
    text-transform: uppercase;
    background-color: #F4E5DD;
    color: #427696;
}

.puzzleButton:hover {
    background-color: #EDCDC3;
}

.word {
    font-size: 1.5em;
    background-color: #F4E5DD;
}

.puzzleButtonMarked {
    background-color: #427696 !important;
    color: black;
    width: 3vw;
    height: 3vw;
    text-transform: uppercase;
}

.crossed {
    text-decoration: line-through;
    background-color: #847D88;
    color: black;
    width: 3vw;
    height: 3vw;
    text-transform: uppercase;
}
</style>

<script>
/* eslint-env browser */
/* global $ */
/* global wordsearch */
import arrayManipulation from '../../utilities/arrayManipulation';
import bootbox from '../../utilities/bootbox';

export default {
  data() {
    return {
      puzzle: Object,
      wordsToSearch: [],
    };
  },
  props: {
    gameInfo: Object,
  },
  mounted() {
    const longestWordSize = arrayManipulation.findLongestStringLength(this.gameInfo.words);
    const puzzleSize = Math.min(longestWordSize, 8);
    this.puzzle = wordsearch(this.gameInfo.words, puzzleSize, puzzleSize);

    this.puzzle.unplaced.forEach(
      word => arrayManipulation.removeStringFromArray(this.gameInfo.words, word),
    );

    this.wordsToSearch = this.gameInfo.words.slice();
  },
  methods: {
    pressLetter(event, x, y) {
      console.log(x + y);
      $(event.target).toggleClass('puzzleButton puzzleButtonMarked');
    },
    checkAnswer() {
      let wordFromBegining = '';
      let wordFromEnd = '';
      $('.puzzleButtonMarked').each(function () {
        wordFromBegining = wordFromBegining.concat($(this).text().trim());
      });
      wordFromEnd = wordFromBegining.split('').reverse().join('');

      if (this.wordsToSearch.includes(wordFromBegining)
            || this.wordsToSearch.includes(wordFromEnd)) {
        $('.puzzleButtonMarked').addClass('crossed puzzleButton');
        $('.puzzleButtonMarked').removeClass('puzzleButtonMarked');

        if (this.wordsToSearch.includes(wordFromBegining)) {
          const index = this.wordsToSearch.indexOf(wordFromBegining);
          if (index !== -1) this.wordsToSearch.splice(index, 1);
        } else {
          const index = this.wordsToSearch.indexOf(wordFromEnd);
          if (index !== -1) this.wordsToSearch.splice(index, 1);
        }

        if (this.wordsToSearch.length === 0) {
          this.puzzleSolved();
        }
      } else {
        $('.puzzleButtonMarked').toggleClass('puzzleButton puzzleButtonMarked');
        bootbox.alert(`Niestety nie wykreśliłeś żadnego z podanych wyrazów
            <img src="https://img.icons8.com/color/48/000000/sad.png">`);
      }
    },
    puzzleSolved() {
      bootbox.correctAnswerAlert();
      this.$parent.nextGame();
    },
  },
};
</script>
