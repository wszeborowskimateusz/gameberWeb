<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-default navbar-expand-xl sticky-top"
      :class="[$route.path === '/map' ? 'zero_margin' : '' ]">
      <button
        class="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="dataToggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex flex-fill">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Strona Główna</router-link>
          </li>
          <li v-if="!status.loggedIn" class="divider-vertical"></li>
          <li v-if="!status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-if="!status.loggedIn" class="divider-vertical"></li>
          <li v-if="!status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/register">Zarejestruj się</router-link>
          </li>
          <li v-if="status.loggedIn" class="divider-vertical"></li>
          <li v-if="status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/ranking">Ranking</router-link>
          </li>
          <li v-if="status.loggedIn" class="divider-vertical"></li>
          <li v-if="status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/map">Mapa</router-link>
          </li>
          <li v-if="status.loggedIn" class="divider-vertical"></li>
          <li v-if="status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/store">Sklep</router-link>
          </li>
          <li v-if="status.loggedIn" class="divider-vertical"></li>
          <li v-if="status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/translator">Tłumacz</router-link>
          </li>
        </ul>
        <ul v-if="status.loggedIn && user != null" class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <router-link
              to="/friends"
              name="friends"
              class="nav-link rounded-circle"
              title="Znajomi"
            >
              <img width="25" :src="imagesGetter.getImgUrl('app/friends.png')" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/store"
            name="store" class="nav-link rounded-circle" title="Sklep">
              <img width="25" :src="imagesGetter.getImgUrl('app/coins.png')" />
              {{user.numberOfCoins}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notifications"
            class="nav-link rounded-circle" title="Powiadomienia">
              <notification-bell
                class="justify-content-center d-flex"
                :size="25"
                :count="amountOfUnReadNotifications"
                counterBackgroundColor="#fa323c"
                :icon="imagesGetter.getImgUrl('app/notifications.png')"
              />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/user-profile"
              name="profil"
              class="nav-link rounded-circle"
              title="Profil"
            >
              <img width="25" :src="imagesGetter.getImgUrl('app/user.png')" />
              {{user.username}}
            </router-link>
          </li>
          <autocomplete
            class="ml-3 h-25"
            :search="search"
            placeholder="Szukaj znajomych"
            aria-label="Szukaj znajomych"
            :get-result-value="getResultValue"
            @submit="handleSubmit"
            auto-select
          ></autocomplete>
          <li class="nav-item">
            <button class="btn btn-info ml-3" @click="logout()">
              <i class="fas fa-sign-out-alt"></i> Wyloguj się
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div :class="[$route.path === '/map' ? ['zero_padding', 'container-fluid'] : 'container' ]">
      <div class="row container__row">
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
    <footer>
      <div class="p-3">
        Strona stworzona przez studentów Politechniki Gdańskiej jako projekt inżynierski.
        <router-link to="/about">O nas</router-link>.
        App icons by
        <a href="https://icons8.com">icons8</a>.
      </div>
    </footer>
  </div>
</template>

<style>
.navbar .divider-vertical {
  height: 40px;
  margin: 0 9px;
  border-right: 1px solid #847d88;
}

 @media (max-width: 1200px) {
  .navbar .divider-vertical {
    display: none;
  }
}

footer {
  width: 100%;
  color: #2c3e50;
  background-color: rgb(240,220,215);
}

footer a {
  font-weight: bold;
  color: #427696;
}

body {
  background-color: #9dcadf;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
  padding: 0;
}

.zero_padding {
  padding: 0;
}

.zero_margin {
  margin: 0 !important;
}

.container-fluid {
  overflow: hidden;
  min-height: 100%;
}

.container {
  min-height: 100%;
}

.container__row {
  height: 100%;
  overflow: auto;
}

#nav {
  margin-bottom: 2em;
  background-color: #f4e5dd;
}

#nav a {
  font-weight: bold;
  color: #427696;
}

#nav a.router-link-exact-active {
  color: #847d88;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
import NotificationBell from 'vue-notification-bell';
import Autocomplete from '@trevoreyre/autocomplete-vue';
import searchService from '@/services/searchService';

import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
    };
  },
  mounted() {
    this.getUserData();
    this.getAllNotifications();
  },
  computed: {
    ...mapState('users', ['status']),
    ...mapState('userProfile', ['user']),
    ...mapState('notificationsStore', ['notifications']),
    amountOfUnReadNotifications() {
      if (this.notifications === undefined || this.notifications === null) return 0;
      return this.notifications.filter(x => !x.isRead).length;
    },
  },
  methods: {
    ...mapActions('users', ['logout']),
    ...mapActions('userProfile', ['getUserData']),
    ...mapActions('notificationsStore', ['getAllNotifications']),
    search(input) {
      if (input.length < 1) return [];
      return searchService.searchForUsers(this.$store.state.users.user, input);
    },
    getResultValue(result) {
      return `${result.userName}`;
    },

    handleSubmit(result) {
      this.$router.push(`/users/${result.userId}`);
    },
  },
  components: {
    NotificationBell,
    Autocomplete,
  },
};
</script>
