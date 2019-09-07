<template>
  <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div v-else-if="notifications != null && notifications.length > 0"
    class="notifications__container col-12" >
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
          v-on:click="changePickedNotificationStatus(0)"
        >Nieprzeczytane ({{amountOfUnReadNotifications}})</a>
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
          v-on:click="changePickedNotificationStatus(1)"
        >Przeczytane ({{amountOfReadNotifications}})</a>
      </li>
    </ul>
    <div class="tab-content m-5" id="pills-tabContent">
      <div
        class="tab-pane show active"
        id="#pills-items"
        role="tabpanel"
        aria-labelledby="pills-avatar-tab"
      >
        <div
          v-for="notification in NotificationsStatus[pickedNotificationsStatus]"
          v-bind:key="notification.id"
          class="notification__tile m-3"
        >
          <img
            class="m-2 notification__icon"
            width="35"
            :src="getNotificationIcon(notification.type)"
          />
          <button
            class="btn btn_default notification__remove_button"
            v-on:click="onRemoveNotification(notification.id)"
          >
            <img
              width="35"
              height="35"
              :src="imagesGetter.getImgUrl('notifications/delete.png')"
            />
          </button>
          <button
            v-if="!notification.isRead"
            class="btn btn_default notification__mark_as_read_button"
            v-on:click="markAsRead(notification.id)"
          >
            <img
              width="35"
              height="35"
              :src="imagesGetter.getImgUrl('notifications/mark_as_read.png')"
            />
          </button>
          <p class="pt-3 font-weight-bold">{{getNotificationTitle(notification.type)}}</p>
          <div class="row m-3">
            <div class="col-12 col-xl-2">
              <img
                width="150" height="150"
                class="m-3 notification__image"
                :src="notification.img"
              />
            </div>
            <div class="col-12 col-xl-10">
              <p class="m-4 text-left">{{getNotificationDescription(notification)}}</p>
              <p class="m-4 text-left">
                Nazwa:
                <span v-if="notification.userId == null"
                class="font-weight-bold">
                  {{notification.name}}
                </span>
                <a v-else :href="'users/' + notification.userId">
                  <span v-if="notification.userId != null"
                  class="font-weight-bold">
                    {{notification.name}}
                  </span>
                </a>
              </p>
            </div>
            <div
              v-if="notification.type === 'friendship_request'
                && (notification.isAlreadyAccepted === null
                 || notification.isAlreadyAccepted === undefined )"
              class="d-flex justify-content-center w-100 m-2"
            >
              <button
                class="btn btn_default mr-5"
                v-on:click="acceptFriendshipInvitation(notification.userId, notification)"
              >
                Potwierdź
                <img
                  width="35"
                  height="35"
                  :src="imagesGetter.getImgUrl('notifications/accept.png')"
                />
              </button>
              <button
                class="btn btn_default ml-5"
                v-on:click="declineFriendshipInvitation(notification.userId, notification)"
              >
                Odrzuć
                <img
                  width="35"
                  height="35"
                  :src="imagesGetter.getImgUrl('notifications/decline.png')"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12" v-else>
    <p class="h1">Niestety nie masz żadnych powiadomień</p>
    <img class="m-5" :src="imagesGetter.getImgUrl('notifications/crying.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('notifications/nothing_found.png')"  />
    <img class="m-5" :src="imagesGetter.getImgUrl('notifications/crying.png')"  />
  </div>
</template>

<style scoped>
.notification__icon {
  position: absolute;
  left: 5px;
  top: 5px;
}

.notification__image {
  border-radius: 50%;
}

.notification__remove_button {
  position: absolute;
  top: 5px;
  right: 5px;
}

.notification__mark_as_read_button {
  z-index: 1;
  position: absolute;
  top: 100px;
  right: 5px;
}

.notification__tile {
  background-color: #edcdc3;
  position: relative;
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

import userInteractionsService from '@/services/usersInteractionsService';

import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
      pickedNotificationsStatus: 0,
    };
  },
  mounted() {
    this.getAllNotifications();
  },
  computed: {
    ...mapState('notificationsStore', ['notifications', 'isLoading']),
    ...mapState('users', ['user']),
    amountOfReadNotifications() {
      if (this.notifications === undefined) { return []; }
      return this.notifications.filter(x => x.isRead).length;
    },
    amountOfUnReadNotifications() {
      if (this.notifications === undefined) { return []; }
      return this.notifications.filter(x => !x.isRead).length;
    },
    ReadNotifications() {
      if (this.notifications === undefined) { return []; }
      return this.notifications.filter(x => x.isRead);
    },
    UnReadNotifications() {
      if (this.notifications === undefined) { return []; }
      return this.notifications.filter(x => !x.isRead);
    },
    NotificationsStatus() {
      return [this.UnReadNotifications, this.ReadNotifications];
    },
  },
  methods: {
    ...mapActions('notificationsStore', [
      'getAllNotifications',
      'markNotificationAsRead',
      'removeNotification',
    ]),
    FilteredNotifications(type) {
      return this.notifications.filter(x => x.type === type);
    },
    changePickedNotificationStatus(status) {
      this.pickedNotificationsStatus = status;
    },
    markAsRead(id) {
      this.markNotificationAsRead(id);
    },
    onRemoveNotification(id) {
      this.removeNotification(id);
    },
    getNotificationIcon(notificationType) {
      switch (notificationType) {
        case 'friendship_request':
          return imagesGetter.getImgUrl('notifications/friendship_request.png');
        case 'achievement_receive':
          return imagesGetter.getImgUrl('notifications/achievement_receive.png');
        case 'friendship_accepted':
          return imagesGetter.getImgUrl('notifications/friendship_accepted.png');
        case 'message_received':
          return imagesGetter.getImgUrl('notifications/new_message.png');
        default:
          return imagesGetter.getImgUrl('notifications/default_notification.png');
      }
    },
    getNotificationTitle(notificationType) {
      switch (notificationType) {
        case 'friendship_request':
          return 'Zaproszenie do znajomych';
        case 'achievement_receive':
          return 'Otrzymałeś osiągnięcie';
        case 'friendship_accepted':
          return 'Zaproszenie zaakceptowane';
        case 'message_received':
          return 'Otrzymałeś wiadomość';
        default:
          return 'Otrzymałeś powiadomienie';
      }
    },
    getNotificationDescription(notification) {
      switch (notification.type) {
        case 'friendship_request':
          return `Otrzymałeś właśnie zaproszenie do grona znajomych od użytkownika: ${notification.name}`;
        case 'achievement_receive':
          return `Otrzymałeś właśnie osiągnięcie: ${notification.name}`;
        case 'friendship_accepted':
          return 'Twoje zaproszenie zostało potwierdzone przez użytkownika';
        case 'message_received':
          return `Otrzymałeś właśnie wiadomość do użytkownika: ${notification.name}`;
        default:
          return 'Otrzymałeś właśnie powiadomienie. Czym prędzej je przeczytaj';
      }
    },
    /* eslint-disable no-param-reassign */
    acceptFriendshipInvitation(userId, notification) {
      userInteractionsService.acceptFriendshipRequest(this.user, userId);
      notification.isAlreadyAccepted = true;
    },
    declineFriendshipInvitation(userId, notification) {
      userInteractionsService.declineFriendshipRequest(this.user, userId);
      notification.isAlreadyAccepted = true;
      this.removeNotification(notification.id);
    },
    /* eslint-enable no-param-reassign */
  },
  components: {
    CubeSpin,
  },
};
</script>
