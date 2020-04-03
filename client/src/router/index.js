import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Books from '../views/Books.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  { 
    path: '/404', 
    name: '404', 
    component: NotFound, 
  }, 
  { 
    path: '*', 
    redirect: '/404' 
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
