<template>
  <div class="container col-12">
    <div class="error p-3">
        <img class="error__icon_left" src="https://img.icons8.com/flat_round/64/000000/error--v1.png">
        <img class="error__icon_right" src="https://img.icons8.com/officel/64/000000/road-closure.png">
      <img src="http://www.onelove4ever.com/files/image/error.png" width="250" height="250" />
      <p class="h1 p-2 font-weight-bold">Ooops! Coś poszło nie tak</p>
      <p class="h5">{{message}}</p>
    </div>
  </div>
</template>

<style scoped>
.error {
    background-color: rgba(255,255,255,0.5);
    position: relative;
}

.error__icon_left {
    position: absolute;
    top: 15px;
    left: 15px;
}

.error__icon_right {
    position: absolute;
    top: 15px;
    right: 15px;
}
</style>

<script>
export default {
  name: 'ErrorComponent',
  props: {
    message: String,
  },
};
</script>
