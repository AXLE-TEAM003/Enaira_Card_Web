<template>
  <div class="auth-content">
    <div>
      <div class="tw-mb-6 tw-text-center">
        <h3 class="tw-font-bold mb-0">Create Account</h3>
        <span class="tw-text-sm"
          >Already have an account?
          <router-link to="/login" class="tw-text-primary">Login</router-link>
        </span>
      </div>
      <form action="" @submit.prevent="login">
        <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
        <div class="tw-flex tw-space-x-6">
          <div class="mb-3 tw-w-full">
            <!-- <label for="">First Name</label> -->
            <input
              type="text"
              v-model="credentials.first_name"
              id="first_name"
              placeholder="First Name"
            />
          </div>
          <div class="mb-3 tw-w-full">
            <!-- <label for="">Last Name</label> -->
            <input
              type="text"
              v-model="credentials.last_name"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div class="mb-3">
          <!-- <label for="">Email</label> -->
          <input
            type="email"
            v-model="credentials.user_email"
            id="email"
            placeholder="Email"
          />
          <small class="tw-text-danger tw-text-xs" v-for="item in errors" :key="item.id">
          <span v-for="error in item.user_email" :key="error">
            * {{ error  }}
          </span>
          </small>
        </div>

        <div class="mb-3">
          <!-- <label for="">Email</label> -->
          <input
            type="text"
            v-model="credentials.username"
            id="username"
            placeholder="Username"
          />
          <small class="tw-text-danger tw-text-xs" v-for="item in errors" :key="item.id">
          <li v-for="error in item.user_login" :key="error">
            * {{ error  }}
          </li>
          </small>
        </div>

        <div class="mb-3">
          <!-- <label for="">Email</label> -->
          <input
            type="tel"
            v-model="credentials.phone_number"
            id="phone_number"
            placeholder="Phone Number"
          />
        </div>

        <div class="tw-mb-3">
          <!-- <label for="">Password</label> -->
          <div class="input-field">
            <input
              :type="typePassword ? 'password' : 'text'"
              v-model="credentials.user_password"
              id="password"
              placeholder="Password"
            />
            <span role="button" @click="typePassword = !typePassword">
              <i-icon
                :icon="typePassword ? 'tabler:eye' : 'gridicons:not-visible'"
                class="form-icon"
              />
            </span>
          </div>
          <small class="tw-text-danger tw-text-xs" v-for="item in errors" :key="item.id">
          <li v-for="error in item.user_pass" :key="error">
            * {{ error  }}
          </li>
          </small>
        </div>

        <div class="tw-mb-4 tw-flex align-center tw-space-x-2">
          <input type="checkbox" name="" id="" />
          <span class="tw-text-[12px]">
            I agree to Samzuga Gpt
            <router-link to="/login" class="tw-text-primary"
              >Terms of service</router-link
            >
            and
            <router-link to="/login" class="tw-text-primary"
              >Privacy policy</router-link
            >
          </span>
        </div>

        <div class="tw-mb-3">
          <button
            @click="register"
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
            <span v-else>create account</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data: () => {
    return {
      credentials: {
        first_name: "",
        last_name: "",
        user_email: "",
        user_password: "",
        username: "",
      },
      typePassword: true,
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    register() {
      let credentials = {
        first_name: this.credentials.first_name,
        last_name: this.credentials.last_name,
        user_email: this.credentials.user_email,
        user_password: this.credentials.user_password,
        username: this.credentials.username,
      };
      this.registerUser(credentials);
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
