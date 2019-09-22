<template>
  <div class="level__container">
    <div class="level__background">
      <parallax :fixed="true">
        <img :src="imagesGetter.getImgUrl('game_map/background.jpg')" />
      </parallax>
    </div>
    <div class="level__title rounded p-1 mb-5">
      <p
        class="h3"
      >To są poziomy, które pomogą ci postawić pierwsze kroki w nauce języka angielskiego</p>
    </div>
    <div v-for="(category, index) in categories" v-bind:key="category.id">
      <div class="category__card m-2 shadow-lg rounded">
        <img
          class="category__lock"
          :src="imagesGetter.getImgUrl(
                category.isUnlocked === true ?
                    'game_map/unlocked.png':'game_map/map_lock_icon.png')"
        />
        <button v-on:click="routeToCategory(category)" class="m-2 btn btn-default">
          <p class="h3 p-2">{{category.name}}</p>
          <div class="category__image">
            <img height="250" class="rounded-circle m-2" :src="category.img" />
          </div>
        </button>
      </div>
      <img
        v-if="index !== categories.length - 1"
        class="m-2"
        height="100"
        :src="imagesGetter.getImgUrl('game_map/arrow.png')"
      />
    </div>
  </div>
</template>

<style scoped>
.level__background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.level__title {
  background-color: rgba(255, 255, 255, 0.9);
}

.category__card {
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
}

.category__lock {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

<script>
import imagesGetter from '@/utilities/imagesGetter';
import toasts from '@/utilities/toasts';
import Parallax from 'vue-parallaxy';

export default {
  name: 'BeginnerLevel',
  data() {
    return {
      imagesGetter,
    };
  },
  props: {
    categories: Array,
  },
  methods: {
    routeToCategory(category) {
      if (category.isUnlocked === false) {
        toasts.errorToast(
          'Aby rozpocząć tę kategorię musisz odblokować poprzednie',
        );
      } else {
        this.$router.push(`/games/${category.id}`);
      }
    },
  },
  components: {
    Parallax,
  },
};
</script>
