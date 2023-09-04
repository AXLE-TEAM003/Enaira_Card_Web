<template>
  <div class="auth-content">
    <div class="tw-mb-6">
      <h3 class="tw-font-bold mb-0">Forgot Password</h3>
      <span class="tw-text-sm">
        Enter the email you used to create your account so we can send you
        instructions on how to reset your password.
      </span>
    </div>
    <form action="" @submit.prevent="login">
      <span v-if="error" class="mb-3 error-alert">{{ error }}</span>

      <div class="tw-mb-5">
        <label for="">Email</label>
        <input
          type="email"
          v-model="credentials.password"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div class="tw-mb-6">
        <button
          @click="login"
          class="primary-btn w-100"
          :class="loading ? 'bg-secondary' : ''"
          :disabled="loading"
        >
          <span v-if="loading"
            ><i-icon
              icon="eos-icons:bubble-loading"
              width="20px"
              class="text-white"
            />
          </span>
          <span v-else>Send</span>
        </button>
      </div>

      <div class="tw-mb-3">
        <button
          @click="$router.push('/')"
          class="outline-btn w-100"
          :class="loading ? 'bg-secondary' : ''"
          :disabled="loading"
        >
          <span v-if="loading"
            ><i-icon
              icon="eos-icons:bubble-loading"
              width="20px"
              class="text-white"
            />
          </span>
          <span v-else>Back to Login</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
//   import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data: () => {
    return {
      credentials: {
        email: "",
        password: "",
      },
      loading: false,
      error: "",
    };
  },
  methods: {
    login() {},
    //   ...mapActions("auth", ["loginUser"]),
    //   login() {
    //     let credentials = {
    //       email: this.credentials.email,
    //       password: this.credentials.password,
    //     };
    //     this.loginUser(credentials)
    //   },
  },

  mounted() {
    //   this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  computed: {
    //   ...mapState("auth", {
    //     loading: (state) => state.loading,
    //     error: (state) => state.error,
    //     errors: (state) => state.validationErrors,
    //     user: (state) => state.user,
    //   }),
  },
};
</script>

<style></style>
