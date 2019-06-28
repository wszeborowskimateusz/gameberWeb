<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-default navbar-expand-lg sticky-top">
      <button class="navbar-toggler navbar-light" type="button"
        data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" id="dataToggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Strona Główna</router-link>
          </li>
          <li v-if="!status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-if="!status.loggedIn" class="nav-item">
            <router-link class="nav-link" to="/register">Zarejestruj się</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">O nas</router-link>
          </li>
          <li v-if="status.loggedIn" class="nav-item">
              <router-link class="nav-link" to="/map">Mapa</router-link>
          </li>
          <li v-if="status.loggedIn" class="nav-item">
              <router-link class="nav-link" to="/store">Sklep</router-link>
          </li>
        </ul>
        <ul v-if="status.loggedIn" class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img width="25" src="https://img.icons8.com/plasticine/100/000000/accessibility2.png">
              {{user.level}}
            </a>
          </li>
          <li class="nav-item">
            <!--Here we can add a link to a strore in the future-->
            <router-link to="/store" name="store"
                class="nav-link rounded-circle">
              <img width="25" src="https://img.icons8.com/color/48/000000/coins.png">
              {{user.numberOfCoins}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/userProfile" name="profil"
                class="nav-link rounded-circle">
              <img width="25" src="https://img.icons8.com/nolan/2x/user.png"/>
              Profil
            </router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-info" @click="logout()">
              <i class="fas fa-sign-out-alt"></i> Wyloguj się
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
        <div class="row">
            <!--<div class="col-sm-6 offset-sm-3">-->
                <router-view></router-view>
            <!--</div>-->
        </div>
    </div>
  </div>
</template>

<style>
body {
    background-color: #9DCADF;
    width: 100%;
    height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.container {
  height: 100vh;
}

.row {
  height: 100vh;
}

#nav {
  margin-bottom: 2em;
  background-color: #F4E5DD;
}

#nav a {
  font-weight: bold;
  color: #427696;
}

#nav a.router-link-exact-active {
  color: #847D88
}
</style>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  mounted() {
    this.getUserData();
  },
  computed: {
    ...mapState('users', ['status']),
    ...mapState('userProfile', ['user']),
  },
  methods: {
    ...mapActions('users', ['logout']),
    ...mapActions('userProfile', ['getUserData']),
  },
};
</script>
