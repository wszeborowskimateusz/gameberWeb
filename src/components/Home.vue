<template>
  <div class="home col-12">
    <p class="h1 mb-5">GAMEBER = GAME + REMEMBER</p>
    <img
      width="250"
      src="https://www.isebrighton.com/userfiles/image/expertbeginner.png"
      class="rounded img-thumbnail"
    />
    <div class="shadow-lg m-5 pt-3 pb-5">
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
      class="img-fluid"
      src="https://img.pngio.com/english-is-fun-png-english-is-fun-2000_1158.png"
    />
    <h3 class="m-3">Gameber to:</h3>
    <ul class="list-group mb-5" id="features-list">
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('userProfile', ['getUserData']),
  },
  mounted() {
    this.getUserData();
  },
};
</script>
