<template>
    <div class="word_learning row">
        <div class="col-12 image">
            <img width="350" height="250" v-bind:src="gameInfo.img" class="rounded">
        </div>
        <div class="col-12 font-weight-bold">
            <h2>{{gameInfo.polishName}} - {{gameInfo.englishName}}</h2>
        </div>
        <div class="col-12">
            <button class="btn" v-on:click="playSound(gameInfo.sound)">
                <img src="https://img.icons8.com/nolan/64/000000/medium-volume.png">
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
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },
  },
};
</script>
