<template>
    <div class="ranking__container col-12">
        <div class="btn-group special mb-2" role="group" aria-label="Basic example">
            <button v-for="type in rankingTypes" v-bind:key="type"
                type="button" class="btn btn-primary" v-on:click="changeRanging(type)">
                {{type.pl}}
            </button>
        </div>
        <table class="table ">
            <tr class="ranking__entry thead-dark">
                <th scope="col">Miejsce</th>
                <th scope="col">Avatar</th>
                <th scope="col">Nazwa użytkownika</th>
                <th scope="col">Punkty doświadczenia</th>
                <th scope="col">Poziom</th>
            </tr>
            <tbody>
                <tr class="ranking__entry m-1" v-for="(user, index) in rankings[pickedRanking]"
                v-bind:key="user.name">
                    <td>
                        {{index + 1}}.
                    </td>
                    <td>
                        <img class="ranking__entry__image" :src="user.img" width="100" height="100">
                    </td>
                    <td>
                        <a :href="user.url">
                            {{user.name}}
                        </a>
                    </td>
                    <td>
                        {{user.experiencePoints}}
                    </td>
                    <td>
                        {{user.level}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.ranking__entry {
    background-color: #F4E5DD;
    color: #427696;
    font-size: 1em;
}

.ranking__entry__image {
    border-radius: 50%;
}

.table > tbody > tr > td {
    vertical-align: middle;
}

.btn-group.special {
  display: flex;
}

.special .btn {
  flex: 1
}
</style>

<script>
export default {
  data() {
    return {
      rankings: {
        overall: [
          {
            name: 'Jon Snow',
            url: '/users/jon-snow',
            img: 'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
            level: 10,
            // Here it is an overall amount of EP of a user
            experiencePoints: 18594,
          },
          {
            name: 'Bran Stark',
            url: '/users/bran-stark',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-TtgZ-Jadm-fKft_gra-o-tron-664x442-nocrop.jpg',
            level: 5,
            // Here it is an overall amount of EP of a user
            experiencePoints: 15594,
          },
          {
            name: 'Arya Stark',
            url: '/users/arya-stark',
            img: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/filmy-i-telewizja/gra-o-tron-sezon-8-maisie-william-w-scenie-seksu.-arya-stark-nie-jest-za-mloda/1213534-1-pol-PL/Gra-o-Tron-sezon-8-Arya-Stark-w-odwaznej-scenie-seksu.-Producenci-przesadzili_article.png',
            level: 3,
            // Here it is an overall amount of EP of a user
            experiencePoints: 11235,
          },
        ],
        daily: [
          {
            name: 'Jon Snow',
            url: '/users/jon-snow',
            img: 'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
            level: 10,
            // Here it is an amount of EP of a user gained today
            experiencePoints: 200,
          },
          {
            name: 'Arya Stark',
            url: '/users/arya-stark',
            img: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/filmy-i-telewizja/gra-o-tron-sezon-8-maisie-william-w-scenie-seksu.-arya-stark-nie-jest-za-mloda/1213534-1-pol-PL/Gra-o-Tron-sezon-8-Arya-Stark-w-odwaznej-scenie-seksu.-Producenci-przesadzili_article.png',
            level: 10,
            // Here it is an amount of EP of a user gained today
            experiencePoints: 150,
          },
          {
            name: 'Bran Stark',
            url: '/users/bran-stark',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-TtgZ-Jadm-fKft_gra-o-tron-664x442-nocrop.jpg',
            level: 10,
            // Here it is an amount of EP of a user gained today
            experiencePoints: 100,
          },
        ],
        monthly: [
          {
            name: 'Bran Stark',
            url: '/users/bran-stark',
            img: 'https://cdn.galleries.smcloud.net/t/galleries/gf-TtgZ-Jadm-fKft_gra-o-tron-664x442-nocrop.jpg',
            level: 10,
            // Here it is an amount of EP of a user gained this month
            experiencePoints: 1256,
          },
          {
            name: 'Arya Stark',
            url: '/users/arya-stark',
            img: 'https://gfx.radiozet.pl/var/radiozet/storage/images/rozrywka/filmy-i-telewizja/gra-o-tron-sezon-8-maisie-william-w-scenie-seksu.-arya-stark-nie-jest-za-mloda/1213534-1-pol-PL/Gra-o-Tron-sezon-8-Arya-Stark-w-odwaznej-scenie-seksu.-Producenci-przesadzili_article.png',
            level: 10,
            // Here it is an amount of EP of a user gained this month
            experiencePoints: 1126,
          },
          {
            name: 'Jon Snow',
            url: '/users/jon-snow',
            img: 'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
            level: 10,
            // Here it is an amount of EP of a user gained this month
            experiencePoints: 1098,
          },
        ],
      },
      pickedRanking: 'overall',
      rankingTypes: [
        { eng: 'overall', pl: 'Całościowy' },
        { eng: 'daily', pl: 'Codzienny' },
        { eng: 'monthly', pl: 'Miesięczny' }],
    };
  },
  methods: {
    changeRanging(type) {
      this.pickedRanking = type.eng;
    },
  },
};
</script>
