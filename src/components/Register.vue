<template>
    <div class="register">
        <h2>Zarejestruj się</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Nazwa użytkownika</label>
                <input type="text" v-model="user.username" v-validate="'required'"
                    name="username" class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('username')"
                    class="invalid-feedback">{{ errors.first('username') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Hasło</label>
                <input type="password" v-model="user.password"
                    v-validate="{ required: true, min: 6 }"
                    name="password" class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')"
                    class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Zarejestruj się</button>
                <router-link to="/login" class="btn btn-link">Anuluj</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'register',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('users', ['status']),
  },
  methods: {
    ...mapActions('users', ['register']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>
