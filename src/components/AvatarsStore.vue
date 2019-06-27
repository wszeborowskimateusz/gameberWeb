<template>
    <div class="store col-12">
        <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-avatar-tab"
                    data-toggle="pill" href="#pills-items"
                    role="tab" aria-controls="pills-items"
                    aria-selected="true" v-on:click="changeItemsType(0)">Avatary</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-image-tab"
                    data-toggle="pill" href="#pills-items"
                    role="tab" aria-controls="pills-items"
                    aria-selected="false" v-on:click="changeItemsType(1)">Zdjęcia w tle</a>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane show active"
                id="#pills-items" role="tabpanel" aria-labelledby="pills-avatar-tab">
                <div class="row" v-for="i in rowCount" v-bind:key="i">
                    <div class="col-12"
                        :class="currentItemsCategory === 0 ?
                            ['col-lg-3', 'col-md-6', ' col-sm-6 ']
                            : ['col-lg-6', 'col-md-12', ' col-sm-12']"
                        v-for="item in items[currentItemsCategory].slice((i - 1)
                            * itemsPerRow[currentItemsCategory],
                            i * itemsPerRow[currentItemsCategory])"
                        v-bind:key="item.name">
                        <figure class="mx-auto item__figure">
                            <img v-if="currentItemsCategory === 0"
                                class="item__image" width="250" height="300" :src="item.img">
                            <img v-if="currentItemsCategory === 1"
                                class="item__image" width="500" height="300" :src="item.img">
                            <figcaption class="imgCaption">
                                <span class="font-weight-bold">
                                    {{item.name}}
                                </span>
                                <br>
                                <span class="font-weight-bold">
                                    {{item.price}}
                                </span>
                                <img width="25" src="https://img.icons8.com/color/48/000000/coins.png">
                                <br>
                                <button :class="user.numberOfCoins < item.price
                                    ? 'button__disabled' : ''"
                                v-on:click="buyItem(item)"
                                class="item__buy__button m-2 btn btn-primary">
                                    Kup
                                    <img src="https://img.icons8.com/cotton/25/000000/buy-for-change.png">
                                </button>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.button__disabled {
    opacity: 0.65;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    cursor: not-allowed;
    box-shadow: none;
    /* pointer-events: none; */
}

.item__image {
    max-width: 100%;
}

.item__figure:hover {
     -webkit-transform: scale(1.05);
    transform: scale(1.05);
}

figure{
    display:table;
}
figcaption{display:table-caption;caption-side:bottom}

.nav-pills {
    background-color: #F4E5DD !important;
}

.nav-link {
    color: #427696 !important;
}

.nav-link.active {
    color: #F4E5DD !important;
}
</style>

<script>
import { mapState } from 'vuex';
import bootbox from '../utilities/bootbox';
import tooltip from '../utilities/tippy';

export default {
  data() {
    return {
      itemsPerRow: [4, 2],
      avatars: [
        {
          id: 0,
          name: 'Przebiegły zgredek',
          img: 'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
          price: '50',
        },
        {
          id: 1,
          name: 'Zdyszany krasnoludek',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouJh0Vvrn9GWzoyrv4IqVh4SbDH3OIeftIf5yzLqj4YjmLOkr',
          price: '75',
        },
        {
          id: 2,
          name: 'Gibki smerf',
          img: 'data:image/png;base64,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',
          price: '100',
        },
        {
          id: 3,
          name: 'Straszny ork',
          img: 'https://www.lastlivingcity.com/wp-content/uploads/2018/05/ea47aebe7edcdf32b192efa147066753.jpg',
          price: '125',
        },
      ],
      backgroundImages: [
        {
          id: 0,
          name: 'Jasny świt',
          img: 'https://c.pxhere.com/photos/65/50/4k_wallpaper_afterglow_backlit_bright_dawn_dusk_environment_HD_wallpaper-1555069.jpg!d',
          price: '100',
        },
        {
          id: 1,
          name: 'Wesoły kasztan',
          img: 'http://3.bp.blogspot.com/-con7HiBmjKE/UGiL2UH1MSI/AAAAAAAAG1o/-TH09TZULK4/s1600/IMG_4845a.jpg',
          price: '70',
        },
        {
          id: 2,
          name: 'Miękki dywan',
          img: 'https://image.ceneostatic.pl/data/products/81636162/i-dywan-chester-kontrast-mieta-65x130-miekki.jpg',
          price: '45',
        },
        {
          id: 3,
          name: 'Wielka pustynia',
          img: 'https://www.tapeciarnia.pl/tapety/normalne/tapeta-wielka-pustynia-slona-great-salt-lake-desert-w-newadzie.jpg',
          price: '60',
        },
      ],
      currentItemsCategory: 0,
    };
  },
  mounted() {
    tooltip.addTooltip('.button__disabled',
      'Niestety nie masz wystarczająco dużo monet');
  },
  computed: {
    ...mapState('userProfile', ['user']),
    rowCount() {
      return Math.ceil(
        this.items[this.currentItemsCategory].length / this.itemsPerRow[this.currentItemsCategory],
      );
    },
    items() {
      return [this.avatars, this.backgroundImages];
    },
  },
  methods: {
    buyItem(item) {
      if (item.price <= this.user.numberOfCoins) {
        bootbox.confirmationDialog(`Czy na pewno chcesz kupić 
                    <span class="font-weight-bold">${item.name}</span>
                    za <span class="font-weight-bold">${item.price}</span> 
                    <img width="25" src="https://img.icons8.com/color/48/000000/coins.png"> ?
                    \n\nPozostanie ci 
                    <span class="font-weight-bold">${this.user.numberOfCoins - item.price}</span>
                    <img width="25" src="https://img.icons8.com/color/48/000000/coins.png">`,
        (bought) => {
          if (bought) {
            // TODO Handle buing an item
            alert(`You have just bought item ${item.name}`);
          }
        });
      }
    },
    changeItemsType(type) {
      this.currentItemsCategory = type;
    },
  },
};
</script>
