<template>
  <div class="word_learning row">
    <div class="col-12 image">
      <img v-bind:src="gameInfo.img" class="rounded word__image" />
    </div>
    <div class="col-12 font-weight-bold">
      <h2>
        <span class="text-center polishName">{{gameInfo.polishName}}</span>
      </h2>
      <h2>
        <span class="text-center font-weight-bold englishName">{{gameInfo.englishName}}</span>
      </h2>
    </div>
    <div class="col-12">
      <button class="btn" v-on:click="playSound(gameInfo.englishName)">
        <img height="48" :src="imagesGetter.getImgUrl('games/story_game/speaker.png')" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.word__image {
  width: 100%;
  max-width: 800px;
}

.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
.polishName {
  font-size: 0.5em;
}
.englishName {
  font-size: 0.8em;
}
</style>

<script>
import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
    };
  },
  props: {
    gameInfo: Object,
  },
  mounted() {
    this.playSound(this.gameInfo.sound);
  },
  updated() {
    this.playSound(this.gameInfo.sound);
  },
  methods: {
    playSound(sound) {
      if (sound) {
        /* eslint-disable no-undef */
        responsiveVoice.speak(sound);
      }
    },
  },
};
</script>
