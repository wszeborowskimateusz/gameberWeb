<template>
  <div class="card text-center">
    <div class="card-header">
      <img height="50" class="m-3" :src="imagesGetter.getImgUrl('game_map/backpack.png')" />
      Witaj podróżniku!
      <img
        height="50"
        class="m-3"
        :src="imagesGetter.getImgUrl('game_map/suitcase.png')"
      />
    </div>
    <div class="card-body">
      <img
        class="card-img-top img-fluid"
        :src="imagesGetter.getImgUrl('game_map/crossroad.jpg')"
        alt="crossroad image"
      />
      <h5 class="m-3 card-title">
        <img height="50" :src="imagesGetter.getImgUrl('game_map/road_pick.png')" />
        Przed tobą niesamowita przygoda. Musisz jednak podjąć decyzję. Stoisz na rozstaju dróg.
        Masz do wyboru dwie trasy:
      </h5>
      <ul class="list-group m-2">
        <li class="list-group-item list-group-item-warning">
          Znacznie trudniejsza trasa wiodąca przez góry.
          To tutaj możesz się wykazać i zaprezentować
          swoje umiejętności poprzez rozwiązanie krótkiego testu wiedzy.
        </li>
        <li class="list-group-item list-group-item-warning">
          Łatwiejsza trasa wiodąca przez dolinę.
          To jest droga na skróty, przyznanie się do braku umiejętności
          i odmówienie podjęcia wyzwania - tym samym przejście do kategorii dla początkujących.
        </li>
      </ul>
      <p>
        Podjęcie wyzwania i prawidłowe przejście przez góry
        da ci możliwość podróży po całym świecie.
        Jeżeli jednak zdecydujesz się nie podjąć wyzwania,
        bądź też nie zdołasz przeprawić się przez góry
        będziesz musiał pozostać na szkoleniu, by później móc wyruszyć w świat.
      </p>
      <a :href="testPath" class="btn btn-primary m-2">
        Wybieram drogę przez góry
        <img
          height="50"
          :src="imagesGetter.getImgUrl('game_map/mountain.png')"
        />
      </a>
      <button v-on:click="skipTest()" class="btn btn-primary m-2">
        Wybieram drogę przez dolinę
        <img
          height="50"
          :src="imagesGetter.getImgUrl('game_map/meadow.png')"
        />
      </button>
    </div>
    <div class="card-footer text-muted">
      Pamiętaj, że niezdanie testu nie oznacza żadnej przegranej,
      to po prostu informacja, że musisz się jeszcze trochę podszkolić - pomożemy ci w tym
      <img
        height="30"
        :src="imagesGetter.getImgUrl('game_map/help.png')"
      />
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { mapState } from 'vuex';
import imagesGetter from '@/utilities/imagesGetter';
import gameControllerService from '@/services/gameControllerService';

export default {
  name: 'TestCard',
  data() {
    return {
      imagesGetter,
    };
  },
  props: {
    testPath: String,
    testCategoryId: String,
  },
  computed: {
    ...mapState('users', ['user']),
  },
  methods: {
    skipTest() {
      gameControllerService
        .finishCategory(this.user, this.testCategoryId)
        .then(() => {
          this.$parent.getUserStatus();
        })
        .then(() => {
          this.$forceUpdate();
        });
    },
  },
};
</script>
