<template>
    <div class="profil col-12" :style="{'background-image' : 'url(' + user.backgroundImage +')'}">
        <div class="row">
            <div class="avatar  col-sm-12 col-lg-3 col-md-12 p-4">
                <div class="avatar__image">
                    <img width="250" :src="user.avatar_url"/>
                    <button class="image_badge btn btn-default" onclick="this.blur();"
                            v-on:click="addNewAvatar()">
                        <img width="70" src="https://img.icons8.com/color/96/000000/plus-2-math.png"/>
                    </button>
                    <h1>{{user.username}}</h1>
                </div>
            </div>
            <div class="achievements col-sm-12 col-lg-6 col-md-12 p-5 float-left">
                <h2>Twoje osiągnięcia:</h2>
                <a href="#" v-for="achievement in user.achievements"
                    v-bind:key="achievement" :title="achievement.name">
                    <img  :src="achievement.src"/>
                </a>
                <div v-if="!user.achievements || user.achievements.length === 0">
                    <h4>Niestety nie posiadasz jeszcze żadnych osiągnięć</h4>
                    <img src="https://img.icons8.com/ios/100/000000/empty-set-filled.png">
                </div>
            </div>
            <div class="col-md-12 col-lg-3 col-sm-12 pt-3">
                <button class="btn btn-primary" v-on:click="changeBackgroundImage()">
                    Zmień zdjęcie w tle
                    <img width="25" src="https://img.icons8.com/clouds/100/000000/picture.png">
                </button>
            </div>
        </div>
        <div class="bottom mx-auto p-5">
            <h3>Poziom {{user.level}}</h3>
            <div class="progress">
                <div class="progress-bar dynamic progress-bar-animated progress-bar-striped bg-info"
                    :style="{ width: user.experiencePoints + '%' }"
                    role="progressbar" :aria-valuenow="user.experiencePoints"
                    aria-valuemin="0" :aria-valuemax="user.pointsToAchieveNewLevel"></div>
                <div class="progress-bar-title bar-title">
                    {{user.experiencePoints}} / {{user.pointsToAchieveNewLevel}}
                </div>
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

.progress {
  position: relative;
}

.progress-bar-title {
  position: absolute;
  text-align: center;
  line-height: 20px;
  overflow: hidden;
  color: #000;
  right: 0;
  left: 0;
  top: 0;
}

</style>


<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState('userProfile', ['user']),
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    ...mapActions('userProfile', ['getUserData']),
    addNewAvatar() {
      console.log('This is new avatar');
    },
    changeBackgroundImage() {

    },
  },
};
</script>
