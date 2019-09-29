/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import UserProfile from '@/components/UserProfile.vue';
import GameMap from '@/components/Map/GameMap.vue';
import GameController from '@/components/GameController.vue';
import AvatarsStore from '@/components/AvatarsStore.vue';
import UsersRanking from '@/components/UsersRanking.vue';
import Translator from '@/components/Translator.vue';
import Tutorial from '@/components/Tutorial.vue';
import Notifications from '@/components/Notifications.vue';
import Messages from '@/components/Messages.vue';
import Friends from '@/components/Friends.vue';
import ErrorPage from '@/components/Error.vue';
import Multiplayer from '@/components/Multiplayer.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/user-profile', component: UserProfile },
    { path: '/users/:id', component: UserProfile },
    { path: '/map', component: GameMap },
    { path: '/games/:id', component: GameController },
    { path: '/messages/:id', component: Messages },
    { path: '/store', component: AvatarsStore },
    { path: '/notifications', component: Notifications },
    { path: '/ranking', component: UsersRanking },
    { path: '/translator', component: Translator },
    { path: '/tutorial', component: Tutorial },
    { path: '/friends', component: Friends },
    { path: '/error', component: ErrorPage, props: { message: '' } },
    { path: '/multiplayer', component: Multiplayer },
    { path: '/multiplayer/:id', component: GameController, props: { isMultiplayer: true } },
    { path: '*', redirect: '/' },
  ],
});

export default router;
