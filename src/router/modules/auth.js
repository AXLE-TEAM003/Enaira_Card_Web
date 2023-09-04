const Login = () => import("@/views/Auth/loginPage.vue");
const Register = () => import("@/views/Auth/registerPage.vue");

const ForgotPassword = () => import("@/views/Auth/forgotPassword");

// import Vuex store logics
// import store from "@/store";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "AppAuthLayout",
    },
  },

  {
    path: "/",
    name: "login",
    redirect: '/login',
    component: Login,
    meta: {
      layout: "AppAuthLayout",
    },
  },

  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      layout: "AppAuthLayout",
    },
  },

  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    meta: {
      layout: "AppAuthLayout",
    },
  },
];

// function checkLoggedIn(to, from, next) {
//   var isAuthenticated = false;
//   if (store.getters["auth/isLoggedIn"]) isAuthenticated = true;
//   else isAuthenticated = false;
//   if (!isAuthenticated) {
//     next();
//   } else {
//     next({
//       query: { redirectFrom: to.fullPath },
//     });
//   }
// }

export default routes;
