import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
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

  return next();
});

export default router;
