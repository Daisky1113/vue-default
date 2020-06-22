import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/vote",
    name: "Vote",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vote.vue"),
  },
  {
    path: "/vote-list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VoteList.vue"),
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mypage.vue"),
  },
  {
    path: "/result",
    name: "Result",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Result.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
