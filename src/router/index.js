import Vue from "vue"
import Router from "vue-router"
import store from "@/store/index.js"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    },
    {
      path: "/registration",
      name: "Registration",
      component: () => import(/* webpackChunkName: "registration" */ "@/views/registration/Registration.vue"),
    },
    {
      path: "*",
      name: "NoFound",
      component: () => import(/* webpackChunkName: "notfound" */ "@/views/NotFound.vue"),
    },

  ],
})

router.beforeEach( (to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
    next({
      name: "Login",
      query: {
        redirect: to.fullPath,
      },
    })
  }

  next()
})

export default router
