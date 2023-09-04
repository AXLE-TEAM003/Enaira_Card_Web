import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "./modules/auth";
import Dashboard from "./modules/dashboard"

Vue.use(VueRouter)

const routes = [
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.concat(Auth, Dashboard)
})

export default router
