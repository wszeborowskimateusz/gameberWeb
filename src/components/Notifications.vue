<template>
  <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
    <cube-spin class="m-2"></cube-spin>
  </div>
  <div
    v-else-if="notifications != null && notifications.length > 0"
    class="notifications__container col-12"
  >
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
          class="notification__tile m-0 m-sm-3"
        >
          <img
            class="m-2 notification__icon"
            width="35"
            :src="getNotificationInfo(notification).icon"
          />
          <button
            class="btn btn_default notification__remove_button"
            v-on:click="onRemoveNotification(notification.id)"
          >
            <img width="35" height="35" :src="imagesGetter.getImgUrl('notifications/delete.png')" />
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
          <p class="pt-5 pt-sm-3 font-weight-bold">{{getNotificationInfo(notification).title}}</p>
          <div class="row m-sm-3 m-0">
            <div class="col-12 col-xl-2">
              <img class="m-0 m-sm-3 notification__image" :src="notification.img" />
            </div>
            <div class="col-12 col-xl-10">
              <p class="m-0 m-sm-4 my-4 text-left">
                <span v-html="getNotificationInfo(notification).description"></span>
              </p>
              <p class="m-0 m-sm-4 my-4 text-left">
                Nazwa:
                <span
                  v-if="notification.userId == null"
                  class="font-weight-bold"
                >{{notification.name}}</span>
                <a v-else :href="'users/' + notification.userId">
                  <span
                    v-if="notification.userId != null"
                    class="font-weight-bold"
                  >{{notification.name}}</span>
                </a>
                <br />
                <a
                  v-if="notification.type === 'message_received'"
                  :href="'messages/' + notification.userId"
                >
                  <span v-if="notification.userId != null" class="font-weight-bold">
                    Konwersacja
                  </span>
                </a>
              </p>
            </div>
            <div
              v-if="(notification.type === 'friendship_request' ||
              notification.type === 'clash_request')
                && (notification.isAlreadyAccepted === null
                 || notification.isAlreadyAccepted === undefined )"
              class="d-flex justify-content-center w-100 m-0 m-sm-2"
            >
              <button
                v-if="notification.type === 'friendship_request'"
                class="btn btn_default mr-0 mr-sm-5"
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
                v-if="notification.type === 'clash_request'"
                class="btn btn_default mr-5"
                v-on:click="acceptClashInvitation(notification)"
              >
                Potwierdź
                <img
                  width="35"
                  height="35"
                  :src="imagesGetter.getImgUrl('notifications/accept.png')"
                />
              </button>
              <button
                v-if="notification.type === 'friendship_request'"
                class="btn btn_default ml-0 ml-sm-5"
                v-on:click="declineFriendshipInvitation(notification.userId, notification)"
              >
                Odrzuć
                <img
                  width="35"
                  height="35"
                  :src="imagesGetter.getImgUrl('notifications/decline.png')"
                />
              </button>
              <button
                v-if="notification.type === 'clash_request'"
                class="btn btn_default ml-5"
                v-on:click="declineClashInvitation(notification)"
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
    <img class="m-5" :src="imagesGetter.getImgUrl('notifications/nothing_found.png')" />
    <img class="m-5" :src="imagesGetter.getImgUrl('notifications/crying.png')" />
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
  width: 100%;
  max-width: 800px;
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
import multiplayerService from '@/services/multiplayerService';
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
    amountOfReadNotifications() {
      if (this.notifications === undefined) {
        return [];
      }
      return this.notifications.filter(x => x.isRead).length;
    },
    amountOfUnReadNotifications() {
      if (this.notifications === undefined) {
        return [];
      }
      return this.notifications.filter(x => !x.isRead).length;
    },
    ReadNotifications() {
      if (this.notifications === undefined) {
        return [];
      }
      return this.notifications.filter(x => x.isRead);
    },
    UnReadNotifications() {
      if (this.notifications === undefined) {
        return [];
      }
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
    getNotificationInfo(notification) {
      switch (notification.type) {
        case 'friendship_request':
          return {
            icon: imagesGetter.getImgUrl(
              'notifications/friendship_request.png',
            ),
            title: 'Zaproszenie do znajomych',
            description: `Otrzymałeś właśnie zaproszenie do grona znajomych od użytkownika: ${notification.name}`,
          };
        case 'achievement_receive':
          return {
            icon: imagesGetter.getImgUrl(
              'notifications/achievement_receive.png',
            ),
            title: 'Otrzymałeś osiągnięcie',
            description: `Otrzymałeś właśnie osiągnięcie: ${notification.name}`,
          };
        case 'friendship_accepted':
          return {
            icon: imagesGetter.getImgUrl(
              'notifications/friendship_accepted.png',
            ),
            title: 'Zaproszenie zaakceptowane',
            description:
              'Twoje zaproszenie zostało potwierdzone przez użytkownika',
          };
        case 'message_received':
          return {
            icon: imagesGetter.getImgUrl('notifications/new_message.png'),
            title: 'Otrzymałeś wiadomość',
            description: `Otrzymałeś właśnie wiadomość do użytkownika: ${notification.name}`,
          };
        case 'clash_request':
          return {
            icon: imagesGetter.getImgUrl('notifications/clash.png'),
            title: 'Otrzymałeś wyzwanie',
            description: `Otrzymałeś właśnie wyzwanie od użytkownika: ${notification.name}`,
          };
        case 'clash_accepted':
          return {
            icon: imagesGetter.getImgUrl('notifications/clash_accepted.png'),
            title: 'Zaproszenie na wyzwanie zaakceptowane',
            description: `Twoje zaproszenie na wyzwanie zostało potwierdzone przez użytkownika: ${notification.name}`,
          };
        case 'clash_won': {
          const notificationData = JSON.parse(notification.data);
          return {
            icon: imagesGetter.getImgUrl('notifications/clash_won.png'),
            title: 'Zakończył się właśnie pojedynek',
            description: `Wygrałeś właśnie pojedynek z użytkownikiem ${
              notification.name
            }.
            <br>Twoje nagrody to:<br>
            ${
  notificationData.coinsPrize
} <img width="25" src="${imagesGetter.getImgUrl(
  'notifications/coins.png',
)}"><br>
            ${
  notificationData.pointsPrize
} <img width="25" src="${imagesGetter.getImgUrl(
  'notifications/experience.png',
)}">`,
          };
        }
        case 'clash_lost':
          return {
            icon: imagesGetter.getImgUrl('notifications/clash_lost.png'),
            title: 'Zakończył się właśnie pojedynek',
            description: `Przegrałeś właśnie pojedynek z użytkownikiem ${notification.name}`,
          };
        case 'clash_draw': {
          const notificationDataDraw = JSON.parse(notification.data);
          return {
            icon: imagesGetter.getImgUrl('notifications/clash_draw.png'),
            title: 'Zakończył się właśnie pojedynek',
            description: `Zremisowałeś właśnie pojedynek z użytkownikiem ${
              notification.name
            }.
            <br>Twoje nagrody to:<br>
            ${
  notificationDataDraw.coinsPrize
} <img width="25" src="${imagesGetter.getImgUrl(
  'notifications/coins.png',
)}"><br>
            ${
  notificationDataDraw.pointsPrize
} <img width="25" src="${imagesGetter.getImgUrl(
  'notifications/experience.png',
)}">`,
          };
        }
        default:
          return {
            icon: imagesGetter.getImgUrl(
              'notifications/default_notification.png',
            ),
            title: 'Otrzymałeś powiadomienie',
            description:
              'Otrzymałeś właśnie powiadomienie. Czym prędzej je przeczytaj',
          };
      }
    },
    /* eslint-disable no-param-reassign */
    acceptFriendshipInvitation(userId, notification) {
      userInteractionsService.acceptFriendshipRequest(userId);
      notification.isAlreadyAccepted = true;
      this.$forceUpdate();
    },
    declineFriendshipInvitation(userId, notification) {
      userInteractionsService.declineFriendshipRequest(userId);
      notification.isAlreadyAccepted = true;
      this.removeNotification(notification.id);
    },
    acceptClashInvitation(notification) {
      multiplayerService.acceptClashRequest(
        JSON.parse(notification.data).clashId,
      );
      notification.isAlreadyAccepted = true;
      this.$forceUpdate();
    },
    declineClashInvitation(notification) {
      multiplayerService.declineClashRequest(
        JSON.parse(notification.data).clashId,
      );
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
