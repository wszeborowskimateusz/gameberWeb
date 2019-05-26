<template>
    <div class="profil col-12">
        <div class="row">
            <div class="avatar col-3 p-4">
                <div class="avatar__image float-left">
                    <img width="250" :src="user.avatar_url"/>
                    <button class="image_badge btn btn-default" onclick="this.blur();"
                            v-on:click="addNewAvatar()">
                        <img width="70" src="https://img.icons8.com/color/96/000000/plus-2-math.png"/>
                    </button>
                    <h1>{{user.username}}</h1>
                </div>
            </div>
            <div class="achievements col-6 pt-4 float-left">
                <h2>Twoje osiągnięcia:</h2>
                <img src="https://img.icons8.com/dusk/100/000000/prize.png">
                <img src="https://img.icons8.com/dusk/100/000000/trophy.png">
                <img src="https://img.icons8.com/dusk/100/000000/medal2.png">
            </div>
            <div class="col-3 pt-4">
                <button class="btn btn-primary" v-on:click="changeBackgroundImage()">
                    Zmień zdjęcie w tle
                    <img width="25" src="https://img.icons8.com/clouds/100/000000/picture.png">
                </button>
            </div>
        </div>
        <div class="bottom p-5">
            <h3>Poziom {{user.level}}</h3>
            <div class="progress">
                <div class="progress-bar dynamic progress-bar-animated progress-bar-striped bg-info"
                    :style="{ width: user.experiencePoints + '%' }"
                    role="progressbar" :aria-valuenow="user.experiencePoints"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

    </div>
</template>

<style scoped>

.bottom {
    position : absolute;
    bottom   : 0;
    width: 95%;
}

.right {
    position : absolute;
    right   : 0;
    top: 0;
}

.dynamic {
    width: var(--width);
}
.profil {
    background-image: url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
    height: auto;
    min-height: 550px;
    color: #EDCDC3;
}

.avatar__image {
    position: relative;
    display: block;
}

.image_badge {
    top: 0;
    right: 0;
    position: absolute;
}


</style>


<script>
export default {
  data() {
    return {
      user: {
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        username: 'Ana',
        level: 5,
        experiencePoints: 70,
      },
    };
  },
  methods: {
    addNewAvatar() {
      console.log('This is new avatar');
    },
    changeBackgroundImage() {
      console.log('Background image changed');
    },
  },
};
</script>
