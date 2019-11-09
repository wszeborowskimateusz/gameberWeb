<template>
  <div v-if="isLoading" class="col-12 d-flex p-2 justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div v-else-if="(user != null && user.avatars)" class="userProfile col-12">
    <div
      class="profil col-12"
      :style="{'background-image' :
            'url(' + pickedImage.img +')'}"
    ></div>
    <div class="scrollbar_remover mb-5">
      <div class="profile__container">
        <div class="row profile__content">
          <div class="avatar col-sm-12 col-lg-3 col-md-12 p-4">
            <div class="avatar__image">
              <img class="avatar__image__img" :src="pickedAvatar.img" />
              <button
                v-if="user.isOurOwnProfile"
                class="image_badge btn btn-default"
                onclick="this.blur();"
                data-toggle="modal"
                data-target="#avatarModal"
              >
                <img width="70" :src="imagesGetter.getImgUrl('profile/change_avatar.png')" />
              </button>
              <h1>{{user.username}}</h1>
            </div>
          </div>
          <div class="achievements col-sm-12 col-lg-6 col-md-12 p-5 float-left">
            <h2 v-if="user.isOurOwnProfile">Twoje osiągnięcia:</h2>
            <h2 v-else>Osiągnięcia</h2>
            <a
              href="#"
              v-for="achievement in user.achievements.slice(0, 3)"
              v-bind:key="achievement.name"
              :title="achievement.name"
            >
              <img class="achievement__image" :src="achievement.src" />
            </a>
            <br />
            <button
              v-if="user.achievements.length > amountOfAchievementsToCalapse"
              class="btn btn-primary mt-3"
              data-toggle="modal"
              data-target="#achievementsModal"
            >Zobacz wszystkie osiągnięcia</button>
            <div v-if="!user.achievements || user.achievements.length === 0">
              <h4 v-if="user.isOurOwnProfile">Niestety nie posiadasz jeszcze żadnych osiągnięć</h4>
              <h4 v-else>Brak osiągnięć</h4>
              <img :src="imagesGetter.getImgUrl('profile/no_achievements.png')" />
            </div>
          </div>
          <div class="col-md-12 col-lg-3 col-sm-12 pt-3">
            <button
              v-if="user.isOurOwnProfile"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#backgroundImagesModal"
            >
              Zmień zdjęcie w tle
              <img
                width="50"
                :src="imagesGetter.getImgUrl('profile/change_image.png')"
              />
            </button>
            <button v-else-if="user.isFriend" class="btn btn-primary" v-on:click="sendMessage()">
              Wyślij wiadomość
              <img :src="imagesGetter.getImgUrl('profile/send_message.png')" />
            </button>
            <button
              v-else-if="user.didUserFriendRequestedUs"
              class="btn btn-primary"
              v-on:click="acceptFriendshipRequest()"
            >
              Zaakceptuj zaproszenie
              <img
                :src="imagesGetter.getImgUrl('profile/add_to_friends.png')"
              />
            </button>
            <button
              v-else-if="!user.isFriendshipRequested"
              class="btn btn-primary"
              v-on:click="addToFriends()"
            >
              Dodaj do znajomych
              <img :src="imagesGetter.getImgUrl('profile/add_to_friends.png')" />
            </button>
            <span v-else>Twoje zaproszenie jest w drodze</span>
          </div>
        </div>
        <div class="col-12 pt-3 mx-auto p-5 progress-bar-content">
          <h3>Poziom {{user.level}}</h3>
          <div class="progress">
            <div
              class="progress-bar dynamic progress-bar-animated progress-bar-striped bg-info"
              :style="{ width: (currentExperiencePoints / maxExperiencePoints) * 100 + '%' }"
              role="progressbar"
              :aria-valuenow="currentExperiencePoints"
              aria-valuemin="0"
              :aria-valuemax="maxExperiencePoints"
            ></div>
            <div class="progress-bar-title bar-title">
              {{currentExperiencePoints}} / {{maxExperiencePoints}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <AchievementsModal :achievements="user.achievements"></AchievementsModal>
    <BackgroundImagesModal :user="user"></BackgroundImagesModal>
    <AvatarsModal :user="user"></AvatarsModal>
  </div>
  <div v-else class="col-12">
    <h1 class="mb-5">Nie znaleziono użytkownika o wskazanym identyfikatorze</h1>
    <img class="m-5" :src="imagesGetter.getImgUrl('profile/crying.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('profile/nothing_found.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('profile/crying.png')" />
  </div>
</template>

<style scoped>
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
  height: auto;
  width: 100%;
}

.achievement__image {
  width: 100px;
  height: 100px;
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

import otherUsersProfileService from '@/services/otherUsersProfileService';
import usersInteractionsService from '@/services/usersInteractionsService';
import imagesGetter from '@/utilities/imagesGetter';

import AchievementsModal from '@/components/ProfileHelpers/AchievementsModal.vue';
import BackgroundImagesModal from '@/components/ProfileHelpers/BackgroundImagesModal.vue';
import AvatarsModal from '@/components/ProfileHelpers/AvatarsModal.vue';

export default {
  data() {
    return {
      imagesGetter,
      userId: this.$route.params.id,
      otherUser: {},
      amountOfAchievementsToCalapse: 3,
    };
  },
  computed: {
    user() {
      if (this.isOurOwnProfile) return this.userFromStore;

      return this.otherUser;
    },
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
    maxExperiencePoints() {
      return this.user.pointsToAchieveNewLevel - this.user.pointsToAchievePreviousLevel;
    },
    currentExperiencePoints() {
      return this.user.experiencePoints - this.user.pointsToAchievePreviousLevel;
    },
  },
  mounted() {
    this.getUserData();
    this.backgroundImageIdToChange = this.user.backgroundImageId;
    this.avatarIdToChange = this.user.avatarId;
    if (!this.isOurOwnProfile) {
      otherUsersProfileService.getUser(this.userId).then((user) => {
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
    addToFriends() {
      const userToAddId = this.userId;
      usersInteractionsService
        .sendFriendshipRequest(userToAddId)
        .then(() => {
          this.user.isFriendshipRequested = true;
        })
        .then(() => {
          this.$forceUpdate();
        });
    },
    sendMessage() {
      const userToSendMessageToId = this.userId;
      this.$router.push(`/messages/${userToSendMessageToId}`);
    },
    acceptFriendshipRequest() {
      usersInteractionsService.acceptFriendshipRequest(this.userId).then(() => {
        this.user.isFriend = true;
        this.$forceUpdate();
      });
    },
  },
  components: {
    CubeSpin,
    AchievementsModal,
    BackgroundImagesModal,
    AvatarsModal,
  },
};
</script>
