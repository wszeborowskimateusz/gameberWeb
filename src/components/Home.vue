<template>
  <div class="home col-12">
    <div class="home__background">
      <parallax :fixed="true">
        <img :src="imagesGetter.getImgUrl('home_page/home_page_background.jpg')" />
      </parallax>
    </div>
    <div class="home__content">
      <p class="h1 mb-5 font-weight-bold">GAMEBER = GAME + REMEMBER</p>
      <div class="shadow-lg m-5 pt-3 pb-5 description">
        <p class="m-5 h5">
          Jeżeli chcesz się nauczyć angielskiego
          i przy okazji dobrze się bawić, to ta aplikacja jest dla ciebie
        </p>
        <p class="h4">
          Jeżeli chcesz się przekonać jak wygląda aplikacja, zajrzyj do
          <router-link to="/tutorial">tutoriala</router-link>
        </p>
      </div>
      <img
        height="500"
        :src="imagesGetter.getImgUrl('home_page/home_page_motto.jpg')"
        class="rounded"
      />
      <ul class="list-group mb-5 mt-5" id="features-list">
        <li class="list-group-item">
          <p class="h2 font-weight-bold">Gameber to:</p>
        </li>
        <li class="list-group-item">
          <i class="fas fa-smile-beam float-left"></i> Świetna zabawa
        </li>
        <li class="list-group-item">
          <i class="fas fa-book float-left"></i> Możliwość nauki
        </li>
        <li class="list-group-item">
          <i class="fas fa-gamepad float-left"></i> Rywalizacja
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
}

.home__background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.description {
  background-color: rgba(255, 255, 255, 0.7);
}
</style>


<script>
import { mapActions, mapState } from 'vuex';

import Parallax from 'vue-parallaxy';

import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
    };
  },
  methods: {
    ...mapActions('userProfile', ['getUserData']),
  },
  computed: {
    ...mapState('users', ['status']),
  },
  mounted() {
    if (this.status.loggedIn) {
      this.getUserData();
    }
  },
  components: {
    Parallax,
  },
};
</script>
