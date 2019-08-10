<template>
  <div v-if="isLoading" class="col-12 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div class="col-12 friends__container row" v-else-if="friends != null && friends.length > 0">
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
import { mapState } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import friendsService from '../services/friendsService';

export default {
  data() {
    return {
      isLoading: false,
      friends: [],
    };
  },
  computed: {
    ...mapState('users', ['user']),
  },
  created() {
    this.isLoading = true;
    this.fetchFriends();
  },
  methods: {
    fetchFriends() {
      friendsService
        .getFriends(this.user)
        .then((friends) => {
          this.isLoading = false;
          this.friends = friends;
        })
        .then(() => this.$forceUpdate());
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
