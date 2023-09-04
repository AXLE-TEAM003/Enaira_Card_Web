/* eslint-disable no-undef */
import Vue from "vue";
import $request from "@/axios";
import Cookies from "js-cookie";
import config from "@/config.js";

import router from "@/router";

// Vue.use(require("vue-moment"));

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    regError: false,
    regSuccess: false,
    validationErrors: {},
    user: {},
    loggedIn: false,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,
    isLoggedIn(state) {
      return state.loggedIn
        ? state.loggedIn
        : !!Cookies.get(config.accessTokenStorageKey);
    },
    getAccessToken() {
      return Cookies.get(config.accessTokenStorageKey);
    },
    getAccessTokenExpiresAt() {
      return Cookies.get(config.accessTokenExpiresAtStorageKey);
    },
    getAccessTokenExpiresIn() {
      return Cookies.get(config.accessTokenExpiresInStorageKey);
    },
    getUser: (state) => state.user,
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
      state.validationErrors = {};
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_VALIDATION_ERRORS(state, payload) {
      state.loading = false;
      state.validationErrors = payload;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
      state.loading = false;
    },

    LOGIN(state, payload) {
      state.loading = false;
      state.loggedIn = true;

      Cookies.set(config.accessTokenStorageKey, payload.accessToken, {
        path: "home/",
        domain: window.location.hostname,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    },

    SET_USER(state, payload) {
      state.user = payload;
    },

    async LOGOUT(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("vuex");
      localStorage.clear();
    },
    RESET(state) {
      Object.keys(state).forEach((key) => {
        Object.assign(state[key], null);
      });
    },
  },
  actions: {
    // Login request
    async loginUser({ commit }, payload) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.post(`users/login`, payload);
        let responsePayload = res.data;
        console.log(responsePayload);
        Cookies.set("token", responsePayload.access_token);
        Vue.$toast.open({
          message: `${responsePayload.message}`,
          type: "success",
          position: "top",
          // all of other options may go here
        });
        commit("LOGIN", {
          accessToken: responsePayload.access_token,
        });
        commit("SET_USER", responsePayload.data);
        // Check redirect URL
        const url = window.location.search;
        const params = new URLSearchParams(url);
        const d = params.get("redirectFrom");

        router.push(d || "/dashboard");
        return res;
      } catch (error) {
        console.log(error);
        Vue.$toast.open({
          message: `Error!`,
          type: "error",
          position: "top",
          // all of other options may go here
        });
        if (error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.error) {
              console.log(errorPayload.error);
              commit("SET_VALIDATION_ERRORS", errorPayload.error);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error;
      }
    },

    // Request request
    async registerUser({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        let res = await $request.post(`users/`, payload);
        // Cookies.set("token", res.data.access_token);
        commit("SET_SUCCESS", "User Registered");
        let responsePayload = res.data;
        Vue.$toast.open({
          message: `${responsePayload.message}`,
          type: "success",
          position: "top",
          // all of other options may go here
        });
        router.push("/");
        return res;
      } catch (error) {
        console.log(error);
        Vue.$toast.open({
          message: `Error!`,
          type: "error",
          position: "top",
          // all of other options may go here
        });
        if (error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.error) {
              console.log(errorPayload.error);
              commit("SET_VALIDATION_ERRORS", errorPayload.error);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error.data;
      }
    },
  },
};
