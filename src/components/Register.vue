<template>
  <div class="register col-sm-6 offset-sm-3">
    <h2>Zarejestruj się</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="login">Nazwa użytkownika</label>
        <input
          type="text"
          v-model="user.login"
          v-validate="'required'"
          name="login"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('login') }"
        />
        <div
          v-if="submitted && errors.has('login')"
          class="invalid-feedback"
        >{{ errors.first('login') }}</div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="user.mail"
          v-validate="'required|email'"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('email') }"
        />
        <div
          v-if="submitted && errors.has('email')"
          class="invalid-feedback"
        >{{ errors.first('email') }}</div>
      </div>
      <div class="form-group">
        <label for="password">Hasło</label>
        <input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="hasło"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('hasło') }"
        />
        <div
          v-if="submitted && errors.has('hasło')"
          class="invalid-feedback"
        >{{ errors.first('hasło') }}</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Zarejestruj się</button>
      </div>
    </form>
    <div class="row pt-3">
      <div class="col-6 offset-3">
        <button v-on:click="loginWithGoogleOnClick()" class="btn btn-light">
          <img
            width="20px"
            alt="Google &quot;G&quot; Logo"
            :src="imagesGetter.getImgUrl('login/google_logo.png')"
          />
          Zarejestruj się z Google
        </button>
      </div>
    </div>
    <div v-if="status.registerInProgress || status.loginInProgress"
    class="d-flex p-2 justify-content-center">
      <cube-spin class="m-2"></cube-spin>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import imagesGetter from '@/utilities/imagesGetter';

export default {
  name: 'register',
  data() {
    return {
      imagesGetter,
      user: {
        login: '',
        password: '',
        mail: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('users', ['status']),
  },
  methods: {
    ...mapActions('users', ['register', 'loginWithGoogle']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
    loginWithGoogleOnClick() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          this.loginWithGoogle(authCode);
        })
        .catch(() => {});
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
