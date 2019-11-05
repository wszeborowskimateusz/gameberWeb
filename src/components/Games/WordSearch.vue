<template>
    <div class="wordSearch row">
      <p class="h5 col-12">Wykreśl podane niżej słowa</p>
        <div class="puzzle col-12 col-sm-12 col-md-6">
            <div v-for="(row, x) in puzzle.grid" v-bind:key="row.length + x" >
                <button class="puzzleButton btn btn-primary m-1"
                    v-on:click="pressLetter($event)"
                    v-for="(cell, y) in row" v-bind:key="cell + y"
                    v-bind:id="x + ',' + y">
                        {{cell}}
                </button>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-3 my-2 my-sm-0">
            <div class="word border m-3" v-for="word in gameInfo.words" v-bind:key="word">
                {{word}}
            </div>
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

.crossedWord {
    text-decoration: line-through;
    background-color: #847D88;
    color: black;
}
</style>

<script>
/* eslint-env browser */
/* global wordsearch */
import $ from 'jquery';
import arrayManipulation from '@/utilities/arrayManipulation';
import imagesGetter from '@/utilities/imagesGetter';


export default {
  data() {
    return {
      imagesGetter,
      sadImageUrl: imagesGetter.getImgUrl('games/word_search/sad.png'),
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
    playSound(sound) {
      if (sound) {
        /* eslint-disable no-undef */
        responsiveVoice.speak(sound);
      }
    },
    pressLetter(event) {
      $(event.target).toggleClass('puzzleButton puzzleButtonMarked');
      this.checkAnswer();
    },
    checkAnswer() {
      let wordFromBegining = '';
      let wordFromEnd = '';
      let id = [];
      const checkedButtonsIds = [];

      // Get one of pozzible words - either reading from begining or from the end
      $('.puzzleButtonMarked').each(function () {
        wordFromBegining = wordFromBegining.concat($(this).text().trim());
        id = $(this).attr('id').split(',');
        checkedButtonsIds.push({ x: parseInt(id[0], 10), y: parseInt(id[1], 10) });
      });

      wordFromEnd = wordFromBegining.split('').reverse().join('');

      // Check if each crossed letter is adjacent to each other
      if (checkedButtonsIds.length > 1) {
        const direction = {
          x: checkedButtonsIds[1].x - checkedButtonsIds[0].x,
          y: checkedButtonsIds[1].y - checkedButtonsIds[0].y,
        };
        if (direction.x > 1 || direction.y > 1 || direction.x < -1 || direction.y < -1) {
          this.adjacentCrossingInformation();
          return;
        }
        for (let i = 1; i < checkedButtonsIds.length; i += 1) {
          if ((checkedButtonsIds[i - 1].x + direction.x !== checkedButtonsIds[i].x)
             || (checkedButtonsIds[i - 1].y + direction.y !== checkedButtonsIds[i].y)) {
            return;
          }
        }
      }

      // Check if user crossed an actual word to cross
      if (this.wordsToSearch.includes(wordFromBegining)
            || this.wordsToSearch.includes(wordFromEnd)) {
        $('.puzzleButtonMarked').addClass('crossed puzzleButton');
        $('.puzzleButtonMarked').removeClass('puzzleButtonMarked');

        // Remove a found word from a list of words to find
        if (this.wordsToSearch.includes(wordFromBegining)) {
          this.playSound(wordFromBegining);
          const index = this.wordsToSearch.indexOf(wordFromBegining);
          if (index !== -1) { this.wordsToSearch.splice(index, 1); }
        } else {
          this.playSound(wordFromEnd);
          const index = this.wordsToSearch.indexOf(wordFromEnd);
          if (index !== -1) { this.wordsToSearch.splice(index, 1); }
        }

        $(`.word:contains("${wordFromBegining}")`).addClass('crossedWord');
        $(`.word:contains("${wordFromEnd}")`).addClass('crossedWord');

        // If no words left to find
        if (this.wordsToSearch.length === 0) {
          this.puzzleSolved();
        }
      }
    },
    puzzleSolved() {
      this.$parent.finishGame('');
    },
  },
};
</script>
