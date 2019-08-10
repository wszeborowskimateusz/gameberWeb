<template>
  <div v-if="isLoading" class="col-12 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div class="store col-12 mb-5"
    v-else-if="(avatars != null || backgroundImages != null)
            && (avatars.length > 0 || backgroundImages.length > 0)">
    <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="pills-avatar-tab"
          data-toggle="pill"
          href="#pills-items"
          role="tab"
          aria-controls="pills-items"
          aria-selected="true"
          v-on:click="changeItemsType(0)"
        >Avatary</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-image-tab"
          data-toggle="pill"
          href="#pills-items"
          role="tab"
          aria-controls="pills-items"
          aria-selected="false"
          v-on:click="changeItemsType(1)"
        >Zdjęcia w tle</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane show active"
        id="#pills-items"
        role="tabpanel"
        aria-labelledby="pills-avatar-tab"
      >
        <div class="row mb-0 items__row" v-for="i in rowCount" v-bind:key="i">
          <div
            class="col-12 store__item"
            :class="currentItemsCategory === 0 ?
                            ['col-lg-3', 'col-md-6', ' col-sm-6 ']
                            : ['col-lg-6', 'col-md-12', ' col-sm-12']"
            v-for="item in items[currentItemsCategory].slice((i - 1)
                            * itemsPerRow[currentItemsCategory],
                            i * itemsPerRow[currentItemsCategory])"
            v-bind:key="item.name"
          >
            <figure class="mx-auto item__figure">
              <img
                v-if="currentItemsCategory === 0"
                class="item__image"
                width="250"
                height="300"
                :src="item.img"
              />
              <img
                v-if="currentItemsCategory === 1"
                class="item__image__background"
                width="500"
                height="300"
                :src="item.img"
              />
              <figcaption class="imgCaption">
                <span class="font-weight-bold">{{item.name}}</span>
                <br />
                <span class="font-weight-bold">{{item.price}}</span>
                <img width="25" src="https://img.icons8.com/color/48/000000/coins.png" />
                <br />
                <button
                  :class="[(user.numberOfCoins === undefined || user.numberOfCoins < item.price)
                                    ? 'button__disabled_no_coins' : '',
                                    doesUserHaveItem(item) ? 'button__disabled_already_has' : ''
                                    ]"
                  v-on:click="buyItem(item)"
                  class="item__buy__button m-2 btn btn-primary"
                >
                  Kup
                  <img src="https://img.icons8.com/cotton/25/000000/buy-for-change.png" />
                </button>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12" v-else>
    <ErrorComponent
      message="Nie udało się wczytać zasobów sklepu. W sklepie nie ma żadnych produktów." />
  </div>
</template>

<style scoped>
.button__disabled_no_coins,
.button__disabled_already_has {
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  cursor: not-allowed;
  box-shadow: none;
}

.items__row {
  height: 50%;
}

.store__item {
  max-height: 100%;
}

.item__image {
  border-radius: 50%;
}

.item__image__background {
  max-width: 100%;
}

.item__figure:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

figure {
  display: table;
}
figcaption {
  display: table-caption;
  caption-side: bottom;
}

.nav-pills {
  background-color: #f4e5dd !important;
}

.nav-link {
  color: #427696 !important;
}

.nav-link.active {
  color: #f4e5dd !important;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import bootbox from '../utilities/bootbox';
import tooltip from '../utilities/tippy';
import avatarsStoreService from '../services/avatarsStoreService';
import ErrorComponent from './Error.vue';

export default {
  data() {
    return {
      isLoading: false,
      itemsPerRow: [4, 2],
      avatars: [],
      backgroundImages: [],
      currentItemsCategory: 0,
    };
  },
  updated() {
    tooltip.addTooltip(
      '.button__disabled_already_has',
      'Posiadasz już ten przedmiot',
    );
    tooltip.addTooltip(
      '.button__disabled_no_coins',
      'Niestety nie masz wystarczająco dużo monet',
    );
  },
  created() {
    this.isLoading = true;
    this.fetchAvatars();
    this.fetchBackgroundImages();
  },
  computed: {
    ...mapState('userProfile', ['user']),
    rowCount() {
      return Math.ceil(
        this.items[this.currentItemsCategory].length
          / this.itemsPerRow[this.currentItemsCategory],
      );
    },
    items() {
      return [this.avatars, this.backgroundImages];
    },
  },
  methods: {
    ...mapActions('userProfile', ['buyAvatar', 'buyBackgroundImage']),
    buyItem(item) {
      if (item.price <= this.user.numberOfCoins) {
        bootbox.confirmationDialog(
          `Czy na pewno chcesz kupić 
                    <span class="font-weight-bold">${item.name}</span>
                    za <span class="font-weight-bold">${item.price}</span> 
                    <img width="25" src="https://img.icons8.com/color/48/000000/coins.png"> ?
                    \n\nPozostanie ci 
                    <span class="font-weight-bold">${this.user.numberOfCoins
                      - item.price}</span>
                    <img width="25" src="https://img.icons8.com/color/48/000000/coins.png">`,
          (bought) => {
            if (bought) {
              if (this.currentItemsCategory === 0) {
                this.buyAvatar(item);
              } else if (this.currentItemsCategory === 1) {
                this.buyBackgroundImage(item);
              }
            }
          },
        );
      }
    },
    changeItemsType(type) {
      this.currentItemsCategory = type;
    },
    doesUserHaveItem(item) {
      let answer = false;
      if (this.user && this.user.avatars && this.user.backgroundImages) {
        this.user.avatars.forEach((avatar) => {
          if (avatar.name === item.name && avatar.id === item.id) answer = true;
        });

        if (!answer) {
          this.user.backgroundImages.forEach((image) => {
            if (image.name === item.name && image.id === item.id) answer = true;
          });
        }
      }

      return answer;
    },
    fetchAvatars() {
      avatarsStoreService
        .getAvatarsSupply(this.$store.state.users.user)
        .then((avatars) => {
          this.isLoading = false;
          this.avatars = avatars;
        });
    },
    fetchBackgroundImages() {
      avatarsStoreService
        .getBackgroundImagesSupply(this.$store.state.users.user)
        .then((images) => {
          this.backgroundImages = images;
        })
        .then(() => this.$forceUpdate());
    },
  },
  components: {
    ErrorComponent,
    CubeSpin,
  },
};
</script>
