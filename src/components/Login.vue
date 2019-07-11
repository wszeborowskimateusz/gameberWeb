<template>
    <div class="login col-sm-6 offset-sm-3">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Nazwa użytkownika</label>
                <input type="text" v-model="username" name="username" class="form-control"
                    :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">
                    Nazwa użytkownika jest konieczna
                </div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Hasło</label>
                <input type="password" v-model="password" name="password" class="form-control"
                    :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">
                    Hasło jest konieczne
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
        <div class="mt-5 g-signin2" data-theme="dark" data-width="450"
          data-height="50" data-longtitle="true"></div>
    </div>
</template>

<style scoped>

</style>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
      button_pressed: false,
    };
  },
  computed: {
    ...mapState('users', ['status']),
  },
  created() {
    // reset login status
    // this.logout();
  },
  methods: {
    ...mapActions('users', ['login', 'logout']),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
};
</script>
