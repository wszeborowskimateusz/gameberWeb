import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import UserProfile from './components/UserProfile.vue';
import GameMap from './components/GameMap.vue';
import GameController from './components/GameController.vue';
import AvatarsStore from './components/AvatarsStore.vue';
import Toasts from './utilities/toasts';

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
    { path: '/userProfile', component: UserProfile },
    { path: '/map', component: GameMap },
    { path: '/games/:id', component: GameController },
    { path: '/store', component: AvatarsStore },
    { path: '*', redirect: '/' },
  ],
});

// Prevent accessing restricted pages if not logged in
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/', '/about'];
  const authRequired = !publicPages.includes(to.path);

  // See if there is a JWT in local storage
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    Toasts.errorToast('Aby dostać się na tę stronę musisz się zalogować');
    return next('/login');
  }

  if (loggedIn && (to.path === '/login' || to.path === '/register')) {
    return next('/');
  }

  return next();
});

export default router;
