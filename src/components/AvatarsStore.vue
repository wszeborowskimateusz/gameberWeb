<template>
    <div class="store col-12">
        <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-avatar-tab"
                    data-toggle="pill" href="#pills-avatar"
                    role="tab" aria-controls="pills-avatar"
                    aria-selected="true">Avatary</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-image-tab"
                    data-toggle="pill" href="#pills-image"
                    role="tab" aria-controls="pills-image"
                    aria-selected="false">Zdjęcia w tle</a>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane show active"
                id="pills-avatar" role="tabpanel" aria-labelledby="pills-avatar-tab">
                    <div class="row" v-for="i in rowCountAvatars" v-bind:key="i">
                        <div class="col-3 avatar"
                            v-for="avatar in avatars.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                            v-bind:key="avatar.name">
                            {{avatar.name}} | {{avatar.price}}
                        </div>
                    </div>
            </div>
            <div class="tab-pane"
                id="pills-image" role="tabpanel" aria-labelledby="pills-image-tab">
                    <div class="row" v-for="i in rowCountImages" v-bind:key="i">
                        <div class="col-3 backgroundImage"
                            v-for="image in
                                backgroundImages.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                            v-bind:key="image.name">
                            {{image.name}} | {{image.price}}
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-pills {
    background-color: #F4E5DD !important;
}
.nav-link {
    color: #427696 !important;
}

.nav-link.active{
    color: #F4E5DD !important;
}
</style>

<script>
export default {
  data() {
    return {
      itemsPerRow: 4,
      avatars: [
        {
          name: 'Przebiegły zgredek',
          img: '',
          price: '50',
        },
        {
          name: 'Zdyszany krasnoludek',
          img: '',
          price: '75',
        },
        {
          name: 'Gibki smerf',
          img: '',
          price: '100',
        },
        {
          name: 'Straszny ork',
          img: '',
          price: '125',
        },
      ],
      backgroundImages: [
        {
          name: 'Jasny świt',
          img: '',
          price: '100',
        },
        {
          name: 'Wesoły kasztan',
          img: '',
          price: '70',
        },
        {
          name: 'Miękki dywan',
          img: '',
          price: '45',
        },
        {
          name: 'Wielka pustynia',
          img: '',
          price: '60',
        },
      ],
    };
  },
  computed: {
    rowCountAvatars() {
      return Math.ceil(this.avatars.length / this.itemsPerRow);
    },
    rowCountImages() {
      return Math.ceil(this.backgroundImages.length / this.itemsPerRow);
    },
  },
};
</script>
