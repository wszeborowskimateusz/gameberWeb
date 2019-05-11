<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Strona Główna</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Zarejestruj się</router-link> |
      <router-link to="/about">O nas</router-link>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
