<template>
  <div class="login col-sm-6 offset-sm-3">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Nazwa użytkownika</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div
          v-show="submitted && !username"
          class="invalid-feedback"
        >Nazwa użytkownika jest konieczna</div>
      </div>
      <div class="form-group">
        <label for="password">Hasło</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">Hasło jest konieczne</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
    <div class="m-4">
    Nie masz jeszcze konta ? Utwórz je poprzez Google, bądź załóż je
    <router-link to="/register">tutaj</router-link>
    </div>
    <div class="row">
      <div class="col-6 offset-3">
        <button v-on:click="loginWithGoogleOnClick()" class="btn btn-light">
          <img
            width="20px"
            alt="Google &quot;G&quot; Logo"
            :src="imagesGetter.getImgUrl('login/google_logo.png')"
          />
          Login with Google
        </button>
      </div>
    </div>
    <div v-if="status.loginInProgress" class="d-flex p-2 justify-content-center">
          <cube-spin class="m-2"></cube-spin>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { mapState, mapActions } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import config from '../../config';
import imagesGetter from '@/utilities/imagesGetter';

export default {
  name: 'login',
  data() {
    return {
      imagesGetter,
      username: '',
      password: '',
      submitted: false,
      button_pressed: false,
      fb_app_id: config.facebookAppId,
    };
  },
  components: {
    CubeSpin,
  },
  computed: {
    ...mapState('users', ['status']),
  },
  methods: {
    ...mapActions('users', ['login', 'logout', 'loginWithGoogle']),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
    loginWithGoogleOnClick() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          this.loginWithGoogle(authCode);
        })
        .catch((error) => {
          console.log(`failed: ${error}`);
        });
    },
  },
};
</script>
