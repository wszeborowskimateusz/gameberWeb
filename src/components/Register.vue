<template>
    <div class="register">
        <h2>Zarejestruj się</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="login">Nazwa użytkownika</label>
                <input type="text" v-model="user.username" v-validate="'required'"
                    name="login" class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('login') }" />
                <div v-if="submitted && errors.has('login')"
                    class="invalid-feedback">{{ errors.first('login') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" v-model="user.email"
                    v-validate="'required|email'"
                    name="email" class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('email') }" />
                <div v-if="submitted && errors.has('email')"
                    class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Hasło</label>
                <input type="password" v-model="user.password"
                    v-validate="{ required: true, min: 6 }"
                    name="hasło" class="form-control"
                    :class="{ 'is-invalid': submitted && errors.has('hasło') }" />
                <div v-if="submitted && errors.has('hasło')"
                    class="invalid-feedback">{{ errors.first('hasło') }}</div>
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
        email: '',
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
