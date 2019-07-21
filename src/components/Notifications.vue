<template>
  <div class="notifications__container col-12">
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
          <button
            class="btn btn_default notification__remove_button"
            v-on:click="removeNotification(notification.id)"
          >
            <img width="35" height="35" src="https://img.icons8.com/dusk/64/000000/delete-sign.png" />
          </button>
          <button
            v-if="!notification.isRead"
            class="btn btn_default notification__mark_as_read_button"
            v-on:click="markAsRead(notification.id)"
          >
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/cute-clipart/64/000000/visible.png"
            />
          </button>
          <p class="pt-3 font-weight-bold">{{notification.title}}</p>
          <div class="row m-3">
            <div class="col-12 col-lg-2">
              <img
                width="150"
                height="150"
                class="m-3 notification__image"
                :src="notification.img"
              />
            </div>
            <div class="col-10">
              <p class="m-4 text-left">{{notification.description}}</p>
              <p class="m-4 text-left">
                Nazwa:
                <span class="font-weight-bold">{{notification.name}}</span>
              </p>
            </div>
            <div
              v-if="notification.type === 'friendship_request'"
              class="d-flex justify-content-center w-100 m-2"
            >
              <button class="btn btn_default mr-5">
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/dusk/64/000000/approval.png"
                />
              </button>
              <button class="btn btn_default ml-5">
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/officel/80/000000/delete-sign.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
export default {
  data() {
    return {
      pickedNotificationsStatus: 0,
      notifications: [
        {
          id: 1,
          type: 'friendship_request',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouJh0Vvrn9GWzoyrv4IqVh4SbDH3OIeftIf5yzLqj4YjmLOkr',
          title: 'Zaproszenie do znajomych',
          name: 'Szymon35',
          description:
            'Otrzymałeś właśnie zaproszenie do grona znajomych od użytkownika Szymon35',
          isRead: false,
        },
        {
          id: 2,
          type: 'achievement_receive',
          img: 'https://img.icons8.com/dusk/100/000000/prize.png',
          title: 'Otrzymałeś osiągnięcie',
          name: 'Nagroda',
          description: 'Otrzymałeś właśnie osiągnięcie',
          isRead: false,
        },
        {
          id: 3,
          type: 'friendship_accepted',
          img:
            'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
          title: 'Zaproszenie zaakceptowane',
          name: 'ZwariowanyMarcin15',
          description:
            'Twoje zaproszenie zostało potwierdzone przez użytkownika ',
          isRead: true,
        },
        {
          id: 4,
          type: 'message_received',
          img:
            'https://www.lastlivingcity.com/wp-content/uploads/2018/05/ea47aebe7edcdf32b192efa147066753.jpg',
          title: 'Otrzymałeś wiadomość',
          name: 'Szymon35',
          description: 'Otrzymałeś właśnie zaproszenie do grona znajomych',
          isRead: true,
        },
      ],
    };
  },
  computed: {
    amountOfReadNotifications() {
      return this.notifications.filter(x => x.isRead).length;
    },
    amountOfUnReadNotifications() {
      return this.notifications.filter(x => !x.isRead).length;
    },
    ReadNotifications() {
      return this.notifications.filter(x => x.isRead);
    },
    UnReadNotifications() {
      return this.notifications.filter(x => !x.isRead);
    },
    NotificationsStatus() {
      return [this.UnReadNotifications, this.ReadNotifications];
    },
  },
  methods: {
    FilteredNotifications(type) {
      return this.notifications.filter(x => x.type === type);
    },
    changePickedNotificationStatus(status) {
      this.pickedNotificationsStatus = status;
    },
    markAsRead(id) {
      this.notifications.find(x => x.id === id).isRead = true;
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(x => x.id !== id);
    },
  },
};
</script>
