<template>
    <div class="login">
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
    </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log(`Your username is: ${this.username} and password: ${this.password}`);
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        // TODO handle logging in
      }
    },
  },
};
</script>
