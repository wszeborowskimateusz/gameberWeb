<template>
  <div class="tutorial col-12">
    <carousel class="tutorial__carousel" :perPage="1">
      <slide v-for="phase in phases" v-bind:key="phase.title">
        <div class="slide"
        :style="{'background-image' : 'url(' + imagesGetter.getImgUrl(phase.img) +')'}">
           <div class="slide__container">
             <br/>
            <div class="slide__text__container p-3 ">
              <p class="slide__text__paragraph">{{phase.text}}</p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.tutorial__carousel {
  background-color: rgba(237, 205, 195, 0.5);
  height: 90vh;
  width: 100vw;
}

.slide {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  width: 100vw;
  height: 100vh;
}

.slide__container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide__text__paragraph {
  font-size: 1.5em;
  font-weight: bold;
}

.slide__text__container {
  background-color: rgba(244, 229, 221, 0.5);
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: absolute;
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
          text:
            'Podstawowy interfejs podzielony jest na dwie sekcje - nawigację oraz właściwą zawartość witryny.',
        },
        {
          img: 'Tutorial/tut_2.png',
          text: `W górnym pasku mamy do dyspozycji po kolei - stronę główną, 
          ranking graczy, mapę, czyli główny element gry, sklep z avatarami 
          i obrazkami na tło profilu, oraz tłumacz, który pomoże nam jak zapomnimy jakiegoś słówka`,
        },
        {
          img: 'Tutorial/tut_3.png',
          text: `W górnym pasku po prawej stronie mamy z kolei do dyspozycji - pojedynki 
          z innymi graczami, znajomych, posiadane monety, powiadomienia, możliwość 
          przejścia do swojego profilu oraz wyszukiwarkę graczy`,
        },
        {
          img: 'Tutorial/tut_4.png',
          text: `Mapa stanowi główny element aplikacji, przygodę z nią rozpoczynamy
           od rozwiązania testu wiedzy - gdy uzyskamy odpowiedni wynik pokaże 
           nam się mapa, jeżeli zaś wynik będzie za niski to będziemy musieli 
           rozpocząć od poziomów dla początkujących i dopiero po ich ukończeniu 
           będziemy mogli przejść do mapy`,
        },
        {
          img: 'Tutorial/tut_1.png',
          text: `Na samej mapie kraje odblokowane oznaczone są kolorem zielonym, 
          zaś te zablokowane kolorem szarym. Za zdobywaną gotówkę możemy odblokowywać 
          kolejne kraje. W każdym kraju do dyspozycji mamy kilka kategorii, zaś w każdej 
          kategorii kilka gier mających nauczyć nas danego tematu`,
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
