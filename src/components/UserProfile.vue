<template>
  <div v-if="isLoading" class="col-12 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div v-else-if="(user != null && user.avatars)" class="userProfile col-12">
    <div
      class="profil col-12"
      :style="{'background-image' :
            'url(' + pickedImage.img +')'}"
    ></div>
    <div class="scrollbar_remover">
      <div class="profile__container">
        <div class="row profile__content">
          <div class="avatar col-sm-12 col-lg-3 col-md-12 p-4">
            <div class="avatar__image">
              <img width="250" class="avatar__image__img" :src="pickedAvatar.img" />
              <button
                v-if="isOurOwnProfile"
                class="image_badge btn btn-default"
                onclick="this.blur();"
                data-toggle="modal"
                data-target="#avatarModal"
              >
                <img width="70" src="https://img.icons8.com/color/96/000000/plus-2-math.png" />
              </button>
              <h1>{{user.username}}</h1>
            </div>
          </div>
          <div class="achievements col-sm-12 col-lg-6 col-md-12 p-5 float-left">
            <h2 v-if="isOurOwnProfile">Twoje osiągnięcia:</h2>
            <h2 v-else>Osiągnięcia</h2>
            <a
              href="#"
              v-for="achievement in user.achievements"
              v-bind:key="achievement.name"
              :title="achievement.name"
            >
              <img :src="achievement.src" />
            </a>
            <div v-if="!user.achievements || user.achievements.length === 0">
              <h4>Niestety nie posiadasz jeszcze żadnych osiągnięć</h4>
              <img src="https://img.icons8.com/ios/100/000000/empty-set-filled.png" />
            </div>
          </div>
          <div class="col-md-12 col-lg-3 col-sm-12 pt-3">
            <button
              v-if="isOurOwnProfile"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#backgroundImagesModal"
            >
              Zmień zdjęcie w tle
              <img
                width="25"
                src="https://img.icons8.com/clouds/100/000000/picture.png"
              />
            </button>
            <button v-else-if="!user.isFriend" class="btn btn-primary" v-on:click="addToFriends()">
              Dodaj do znajomych
              <img src="https://img.icons8.com/dusk/50/000000/add-user-male.png" />
            </button>
            <button v-else class="btn btn-primary" v-on:click="sendMessage()">
              Wyślij wiadomość
              <img src="https://img.icons8.com/dusk/64/000000/send-mass-email.png" />
            </button>
          </div>
        </div>
        <div class="col-12 pt-3 mx-auto p-5 progress-bar-content">
          <h3>Poziom {{user.level}}</h3>
          <div class="progress">
            <div
              class="progress-bar dynamic progress-bar-animated progress-bar-striped bg-info"
              :style="{ width: user.experiencePoints + '%' }"
              role="progressbar"
              :aria-valuenow="user.experiencePoints"
              aria-valuemin="0"
              :aria-valuemax="user.pointsToAchieveNewLevel"
            ></div>
            <div
              class="progress-bar-title bar-title"
            >{{user.experiencePoints}} / {{user.pointsToAchieveNewLevel}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Background Images Change modal -->
    <div
      class="modal fade"
      id="backgroundImagesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="backgroundImagesModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="backgroundImagesModalTitle">Wybierz nowe zdjęcie w tle</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span
              v-if="!user || user.backgroundImages.length === 0"
            >Niestety nie masz żadnych zdjęć profilowych</span>
            <div class="row">
              <div
                class="col-12"
                v-for="(image, index) in user.backgroundImages"
                v-bind:key="image.id"
              >
                <input
                  type="radio"
                  v-model="backgroundImageIdToChange"
                  name="rGroup"
                  :value="image.id"
                  :id="index"
                />
                <label class="radioLabel" :for="index">
                  <img width="300" height="200" :src="image.img" />
                  <br />
                  <span class="font-weight-bold">{{image.name}}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <router-link to="/store" data-dismiss="modal">Zakup więcej obrazków</router-link>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              v-on:click="reverseImageChange()"
            >Anuluj</button>
            <button
              v-if="user && user.backgroundImages.length > 0"
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              v-on:click="exchangeBackgroundImage()"
            >Zapisz zmiany</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Avatar Change modal -->
    <div
      class="modal fade"
      id="avatarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="avatarModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="avatarModalTitle">Wybierz swój nowy avatar</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span v-if="!user || user.avatars.length === 0">
              Niestety nie masz żadnych avatarów
            </span>
            <div class="row">
              <div class="col-12" v-for="(avatar, index) in user.avatars" v-bind:key="avatar.id">
                <input
                  type="radio"
                  v-model="avatarIdToChange"
                  name="rGroup"
                  :value="avatar.id"
                  :id="avatar.name + index"
                />
                <label class="radioLabel" :for="avatar.name + index">
                  <img class="avatar_modal__img" width="300" height="300" :src="avatar.img" />
                  <br />
                  <span class="font-weight-bold">{{avatar.name}}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <router-link to="/store" data-dismiss="modal">Zakup więcej avatarów</router-link>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              v-on:click="reverseAvatarChange()"
            >Anuluj</button>
            <button
              v-if="user && user.backgroundImages.length > 0"
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              v-on:click="exchangeAvatar()"
            >Zapisz zmiany</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-12">
    <h1 class="mb-5">Nie znaleziono użytkownika o wskazanym identyfikatorze</h1>
    <img class="m-5" src="https://img.icons8.com/cute-clipart/100/000000/crying.png" />
    <img class="m-5" src="https://img.icons8.com/cute-clipart/100/000000/nothing-found.png" />
    <img class="m-5" src="https://img.icons8.com/cute-clipart/100/000000/crying.png" />
  </div>
</template>

<style scoped>
.avatar_modal__img {
  border-radius: 50%;
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

.bottom {
  position: absolute;
  bottom: 0;
  width: 95%;
}

.dynamic {
  width: var(--width);
}

.userProfile {
  height: 80%;
  width: 100%;
}

.scrollbar_remover {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.profil {
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.profile__container {
  padding-right: 17px;
  box-sizing: content-box;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.5);
}

.avatar__image {
  position: relative;
  display: block;
}

.avatar__image__img {
  border-radius: 50%;
}

.image_badge {
  top: 0;
  right: 0;
  position: absolute;
}

.progress {
  position: relative;
}

.progress-bar-title {
  position: absolute;
  text-align: center;
  line-height: 20px;
  overflow: hidden;
  color: #000;
  right: 0;
  left: 0;
  top: 0;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import otherUsersProfileService from '../services/otherUsersProfileService';
import usersInteractionsService from '../services/usersInteractionsService';

export default {
  data() {
    return {
      backgroundImageIdToChange: 0,
      avatarIdToChange: 0,
      userId: this.$route.params.id,
      otherUser: {},
    };
  },
  computed: {
    user() {
      if (this.isOurOwnProfile) return this.userFromStore;

      return this.otherUser;
    },
    ...mapState('users', { userToken: 'user' }),
    ...mapState('userProfile', {
      userFromStore: 'user',
      isLoading: 'isLoading',
    }),
    pickedAvatar() {
      let result = null;
      this.user.avatars.forEach((avatar) => {
        if (avatar.id === this.user.avatarId) {
          result = avatar;
          return false;
        }
        return true;
      });
      return result;
    },
    pickedImage() {
      let result = null;
      this.user.backgroundImages.forEach((image) => {
        if (image.id === this.user.backgroundImageId) {
          result = image;
          return false;
        }
        return true;
      });
      return result;
    },
    // If we browse our own profile or other user's profile
    isOurOwnProfile() {
      return !this.userId;
    },
  },
  mounted() {
    this.getUserData();
    this.backgroundImageIdToChange = this.user.backgroundImageId;
    this.avatarIdToChange = this.user.avatarId;
    if (!this.isOurOwnProfile) {
      otherUsersProfileService
        .getUser(this.userToken, this.userId)
        .then((user) => {
          this.otherUser = user;
        });
    }
    this.$forceUpdate();
  },
  methods: {
    ...mapActions('userProfile', [
      'changeAvatar',
      'changeBackgroundImage',
      'getUserData',
    ]),
    exchangeAvatar() {
      this.changeAvatar(this.avatarIdToChange);
    },
    reverseAvatarChange() {
      this.avatarIdToChange = this.user.avatarId;
      this.$forceUpdate();
    },
    exchangeBackgroundImage() {
      this.changeBackgroundImage(this.backgroundImageIdToChange);
    },
    reverseImageChange() {
      this.backgroundImageIdToChange = this.user.backgroundImageId;
      this.$forceUpdate();
    },
    addToFriends() {
      const userToAddId = this.userId;
      usersInteractionsService.sendFriendshipRequest(
        this.userToken,
        userToAddId,
      );
    },
    sendMessage() {
      const userToSendMessageToId = this.userId;
      this.$router.push(`/messages/${userToSendMessageToId}`);
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
