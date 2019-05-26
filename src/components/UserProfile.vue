<template>
    <div class="profil">
        <img :src="img_url"/>
    </div>
</template>

<style scoped>

</style>


<script>
export default {
  data() {
    return {
      img_url: 'https://img.icons8.com/nolan/2x/user.png',
    };
  },
};
</script>
