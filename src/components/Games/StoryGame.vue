<template>
  <div class="story__container">
    <carousel class="tutorial__carousel" :perPage="1">
      <slide v-for="(story) in gameInfo.stories" v-bind:key="story.storyEnglish">
        <div class="slide" :style="{'background-image' :
            'url(' + story.img +')'}">
          <div class="slide__container">
            <div class="slide__text p-3">
              <p class="english__text">{{story.storyEnglish}}</p>
              <p>{{story.storyPolish}}</p>
              <button class="btn" v-on:click="playSound(story.sound)">
                <img src="https://img.icons8.com/dusk/64/000000/medium-volume.png" />
              </button>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.english__text {
  font-size: 2em;
  font-weight: bold;
}
.slide__text {
  background-color: rgba(244, 229, 221, 0.5);
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.slide {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80% 100%;
  width: 100%;
  height: 45vh;
}
.special-card {
  background-color: rgba(245, 245, 245, 1);
  opacity: 0.4;
}
.slide__container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  props: {
    gameInfo: Object,
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>
