<template>
    <div class="word_learning row">
        <div class="col-12 image">
            <img width="330" height="230" v-bind:src="gameInfo.img" class="rounded">
        </div>
        <div class="col-12 font-weight-bold">
            <h2><span class="text-center polishName">{{gameInfo.polishName}}</span></h2>
            <h2>
              <span class="text-center font-weight-bold englishName">
                {{gameInfo.englishName}}
              </span>
            </h2>
        </div>
        <div class="col-12">
            <button class="btn" v-on:click="playSound(gameInfo.englishName)">
                <img src="https://img.icons8.com/dusk/64/000000/medium-volume.png" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.btn:focus,.btn:active {
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
export default {
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
