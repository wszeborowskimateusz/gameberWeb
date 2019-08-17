<template>
  <div class="tutorial col-12">
    <carousel class="tutorial__carousel" :perPage="1">
      <slide v-for="phase in phases" v-bind:key="phase.title">
        <div>
          <img class="img-fluid mt-4" :src="imagesGetter.getImgUrl(phase.img)" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.tutorial__carousel {
  background-color: rgba(237, 205, 195, 0.5);
  height: 80vh;
  width: 100%;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';
import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
      phases: [
        {
          img: 'Tutorial/tut_1.png',
        },
        {
          img: 'Tutorial/tut_1.png',
        },
        {
          img: 'Tutorial/tut_1.png',
        },
        {
          img: 'Tutorial/tut_1.png',
        },
        {
          img: 'Tutorial/tut_1.png',
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
      const images = require.context('@/assets/Tutorial', true);
      return images(`./${src}`);
    },
  },
};
</script>
