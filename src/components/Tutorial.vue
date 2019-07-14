<template>
  <div class="tutorial col-12">
    <carousel class="tutorial__carousel" :perPage="1">
      <slide v-for="phase in phases" v-bind:key="phase.title">
        <div>
          <img class="mt-4" height="450vh" :src="getImgUrl(phase.img)" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.tutorial__carousel {
  background-color: rgba(237, 205, 195, 0.5);
  height: 80%;
  width: 100%;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data() {
    return {
      phases: [
        {
          img: 'tut_1.png',
        },
        {
          img: 'tut_1.png',
        },
        {
          img: 'tut_1.png',
        },
        {
          img: 'tut_1.png',
        },
        {
          img: 'tut_1.png',
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    getImgUrl(src) {
      const images = require.context('../assets/Tutorial', false, /\.png$/);
      return images(`./${src}`);
    },
  },
};
</script>
