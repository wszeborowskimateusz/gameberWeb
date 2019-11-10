<template>
  <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div v-else-if="friends != null && friends.length > 0" class="col-12 friends__container">
    <p class="h1">Znajomi</p>
    <div class="friends__row row">
      <div v-for="friend in friends" v-bind:key="friend.id"
      class="col-12 col-lg-3 mx-auto col-md-6 col-sm-6 m-1 mb-3">
        <figure class="mx-auto friend__figure">
          <router-link :to="'users/' + friend.id" class="friend__link" :title="friend.name">
            <img class="friend__avatar" :src="friend.avatar" />
          </router-link>
          <figcaption class="imgCaption">
            <router-link :to="'users/' + friend.id" class="friend__link" :title="friend.name">
              <span class="m-3 h3 font-weight-bold">{{friend.name}}</span>
            </router-link>
            <br />
            <button
              class="m-2 btn btn-primary"
              onclick="this.blur();"
              data-toggle="modal"
              data-target="#multiplayerModal"
              v-on:click="pickUser(friend.id)"
            >
              Wyzwij na pojedynek
              <img :src="imagesGetter.getImgUrl('friends/battle.png')" />
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
    <div
      class="modal fade"
      id="multiplayerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="multiplayerModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="multiplayerModalTitle"
            >Czy na pewno chcesz wyzwać tego użytkownika na pojedynek</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span v-if="clashCategories.length === 0">
              Brak kategorii przeznaczonych do pojedynków
            </span>
            <div class="row">
              <div class="col-12" v-for="(clash, index) in clashCategories" v-bind:key="index">
                <input
                  type="radio"
                  v-model="categoryIdToPick"
                  name="rGroup"
                  :value="clash.id"
                  :id="clash.categoryName + index"
                />
                <label class="radioLabel" :for="clash.categoryName + index">
                  <img class="clash__image" :src="clash.img" />
                  <br />
                  <span class="font-weight-bold">{{clash.categoryName}}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Anuluj</button>
            <button
              v-if="clashCategories.length > 0"
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              :disabled="categoryIdToPick === 0 || pickedUserId === 0"
              v-on:click="pickClashCategory()"
            >Wyzwij</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12" v-else>
    <p class="h1">Niestety nie masz jeszcze żadnych znajomych</p>
    <img class="m-5" :src="imagesGetter.getImgUrl('friends/crying.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('friends/nothing_found.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('friends/crying.png')" />
    <p class="h3">Skorzystaj z wyszukiwarki żeby znaleźć swoich znajomych</p>
  </div>
</template>

<style scoped>
.friends__row {
  color: #2c3e50;
}

figure {
  display: table;
}

figcaption {
  display: table-caption;
  caption-side: bottom;
}

.friend__link {
  color: #2c3e50;
}

.friend__link:hover {
  text-decoration: none;
}

.friend__avatar {
  border-radius: 50%;
  width: 100%;
  max-width: 800px;
}

.friend__image {
  border-radius: 50%;
}

.clash__image {
  width: 100%;
  max-width: 800px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + .radioLabel {
  box-shadow: 3px 3px 15px #666;
  border-color: #427696;
  background: #427696;
  color: #fff;
  cursor: pointer;
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}
</style>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';

import friendsService from '@/services/friendsService';
import multiplayerService from '../services/multiplayerService';
import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
      isLoading: false,
      friends: [],
      clashCategories: [],
      categoryIdToPick: 0,
      pickedUserId: 0,
    };
  },
  async created() {
    this.isLoading = true;
    this.friends = await this.fetchFriends();
    this.clashCategories = await this.fetchClashCategories();
    if (this.clashCategories != null && this.clashCategories.length > 0) {
      this.categoryIdToPick = this.clashCategories[0].id;
    }
    this.isLoading = false;
    this.$forceUpdate();
  },
  methods: {
    fetchFriends() {
      return friendsService.getFriends();
    },
    fetchClashCategories() {
      return multiplayerService.getCategories();
    },
    pickClashCategory() {
      multiplayerService.challenge(this.pickedUserId, this.categoryIdToPick);
    },
    pickUser(userId) {
      this.pickedUserId = userId;
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
