<template>
  <div class="col-12 friends__container row" v-if="friends != null && friends.length > 0">
    <p class="h1 col-12">Znajomi</p>
    <div v-for="friend in friends" class="friends__row row" v-bind:key="friend.id">
      <div class="col-12 store__item m-1 mb-3" :class="['col-lg-3', 'col-md-6', 'col-sm-6']">
        <figure class="mx-auto friend__figure">
          <router-link :to="'users/' + friend.id" class="friend__link" :title="friend.name">
            <img class="friend__avatar" width="350" height="400" :src="friend.avatar" />
          </router-link>
          <figcaption class="imgCaption">
            <router-link :to="'users/' + friend.id" class="friend__link" :title="friend.name">
              <span class="m-3 font-weight-bold">{{friend.name}}</span>
            </router-link>
            <button class="m-2 btn btn-primary" onclick="alert('FIGHT');">
              Wyzwij na pojedynek
              <img src="https://img.icons8.com/ios-filled/50/000000/battle.png" />
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
  <div class="col-12" v-else>
    <p class="h1">Niestety nie masz jeszcze żadnych znajomych</p>
    <img class="m-5" src="https://img.icons8.com/cute-clipart/100/000000/crying.png" />
    <img class="m-5" src="https://img.icons8.com/cute-clipart/100/000000/nothing-found.png" />
    <img class="m-5" src="https://img.icons8.com/cute-clipart/100/000000/crying.png" />
    <p class="h3">Skorzystaj z wyszukiwarki żeby znaleźć swoich znajowych</p>
  </div>
</template>

<style scoped>
.friends__row {
  color: #2c3e50;
}

.friend__link {
  color: #2c3e50;
}

.friend__link:hover {
  text-decoration: none;
}

.friend__image {
  border-radius: 50%;
}

.friend__avatar {
  border-radius: 50%;
}

figure {
  display: table;
}
figcaption {
  display: table-caption;
  caption-side: bottom;
}
</style>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Jon Snow',
          avatar:
            'https://cdn.vox-cdn.com/thumbor/o2AXRjdoyonKroOEsxQjYWvtG-U=/99x0:1179x810/1200x800/filters:focal(99x0:1179x810)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg',
        },
        {
          id: 2,
          name: 'Will Byers',
          avatar:
            'https://vignette.wikia.nocookie.net/strangerthings8338/images/e/e4/Will_Byers.png/revision/latest/scale-to-width-down/310?cb=20170124225951',
        },
        {
          id: 3,
          name: 'Nancy Wheeler',
          avatar:
            'https://vignette.wikia.nocookie.net/strangerthings8338/images/2/22/Nancy_S3.png/revision/latest?cb=20190704211903',
        },
      ],
    };
  },
};
</script>
