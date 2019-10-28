<template>
  <div>
    <carousel
      class="carousel mx-auto"
      :perPage="1"
      :paginationSize="30"
      :paginationColor="'#427696'"
      :paginationActiveColor="'#847D88'"
      :navigationEnabled="true"
    >
      <slide v-for="(story) in gameInfo.stories" v-bind:key="story.storyEnglish">
        <div class="slide" :style="{'background-image' :
            'url(' + story.img +')'}">
          <div class="slide__container">
            <div class="slide__text p-3">
              <p class="english__text">{{story.storyEnglish}}</p>
              <p>{{story.storyPolish}}</p>
              <button class="btn" v-on:click="playSound(story.storyEnglish)">
                <img :src="imagesGetter.getImgUrl('games/story_game/speaker.png')" />
              </button>
            </div>
          </div>
        </div>
      </slide>
    </carousel>

  </div>
</template>

<style scoped>
.carousel {
  width: 90%;
  min-height: 44vh;
}

.slide {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 45vh;
}

.slide__container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide__text {
  background-color: rgba(244, 229, 221, 0.8);
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.english__text {
  font-size: 2em;
  font-weight: bold;
}
</style>

<style>
.VueCarousel-navigation-button {
  font-size: 3em;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';

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
  components: {
    Carousel,
    Slide,
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
