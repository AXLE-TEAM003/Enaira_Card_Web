<template>
  <div class="auth-content">
    <div>
      <div class="tw-mb-6 tw-text-center">
        <img
          src="@/assets/img/enaira-logo.svg"
          class="tw-mx-auto tw-h-[67px] tw-w-[201px]"
          alt=""
        />
        <h5 class="tw-font-semibold tw-text-[22px] tw-mt-5 tw-mb-12">
          Login to eNaira
        </h5>
      </div>
      <validation-observer v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <span v-if="error" class="tw-mb-3 error-alert">{{ errors }}</span>

          <validation-provider
            name="customer id"
            rules="required|email"
            v-slot="{ dirty, valid, invalid, errors }"
          >
            <div class="field">
              <input
                type="email"
                name="Customer id"
                id="email"
                v-model="credentials.customer_id"
                placeholder="xxxx@xx.xxx"
                v-bind:class="{
                  'tw-text-success': dirty && valid,
                  'tw-text-danger': dirty && invalid,
                }"
              />
              <span
                class="email-iccon"
                role="button"
                @click="typePassword = !typePassword"
              >
                <i-icon icon="fluent:mail-24-regular" class="form-icon" />
              </span>
              <span class="invalid-feedback d-inline-block" v-show="errors">{{
                errors[0]
              }}</span>
              <label for="email">Customer ID</label>
            </div>
          </validation-provider>

          <validation-provider
            class="tw-mt-4"
            name="password"
            rules="required"
            v-slot="{ dirty, valid, invalid, errors }"
          >
            <div class="field">
              <input
                :type="typePassword ? 'password' : 'text'"
                name="password"
                id="password"
                v-model="credentials.password"
                v-bind:class="{
                  'tw-text-success': dirty && valid,
                  'tw-text-danger': dirty && invalid,
                }"
                placeholder="Password"
              />
              <span
                class="password-iccon"
                role="button"
                @click="typePassword = !typePassword"
              >
                <i-icon
                  :icon="typePassword ? 'tabler:eye' : 'gridicons:not-visible'"
                  class="form-icon"
                />
              </span>
              <span class="invalid-feedback d-inline-block" v-show="errors">{{
                errors[0]
              }}</span>
              <label for="password">Password</label>
            </div>
          </validation-provider>

          <!-- <div class="tw-mb-3 tw-text-right">
          <span class="tw-text-[12px]"
            ><router-link to="/forgot-password" class="tw-text-primary"
              >Forgot Password?</router-link
            >
          </span>
        </div> -->

          <div class="tw-mt-10">
            <button
              class="primary-btn w-100"
              v-bind:disabled="invalid"
              :class="{ 'tw-bg-gray4': invalid }"
            >
              <span>Login</span>
            </button>
          </div>

          <!-- <div class="tw-mt-6">
          <button
            @click="login"
            class="primary-btn w-100"
            :class="loading ? 'bg-secondary' : disabled ? 'bg-secondary' : ''"
            :disabled="loading || disabled"
          >
            <span v-if="loading"
              ><i-icon
                icon="eos-icons:bubble-loading"
                width="20px"
                class="text-white"
              />
            </span>
            <span v-else>Login</span>
          </button>
        </div> -->
        </form>
      </validation-observer>
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
        customer_id: "",
        password: "",
      },
      typePassword: true,
      disabled: true,
      cardNumber: {},
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    login() {
      let credentials = {
        user_email: this.credentials.email,
        user_password: this.credentials.password,
      };
      this.loginUser(credentials);
    },

    onSubmit() {
      let credentials = {
        customer_id: this.credentials.customer_id,
        password: this.credentials.password,
      };
      this.loginUser(credentials).then(() => {
        if (this.success) {
          // Dispatch User Profile 
          this.$store.dispatch("auth/getUserProfile");
          // Check if a card exists from the route and attaches to the route
          if (Object.keys(this.cardNumber).length > 0) {
            
            this.$router.push(`/dashboard?card=${this.cardNumber.card}`);
          } else {
            this.$router.push("/dashboard");
          }
        }
      });
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
    var cardDetails = this.$route.query;
    this.cardNumber = cardDetails;
  },

  watch: {
    credentials: {
      handler(val) {
        if (val.email != "" && val.password != "") {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      },
      deep: true,
      immediate: true,
    },
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
      success: (state) => state.success
    }),
  },
};
</script>

<style scoped>
.form-icon {
  font-size: 20px;
  color: var(--gray-400);
}
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 20px;
  position: relative;

  width: 100%;
}

.invalid-feedback {
  position: absolute;
  bottom: -18px;
  font-size: 12px;
  /* right: 0; */
}

.password-iccon,
.email-iccon {
  position: absolute;
  bottom: 6px;
  right: 0;
}
/**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  font-size: 14px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
  padding: 4px 0;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid var(--primary-color);
  padding: 12px 0;
}

label {
  /* text-transform: uppercase; */
  /* letter-spacing: 0.05em; */
  font-size: 14px;
}
/**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 1.125rem) scale(1);
}

input:placeholder-shown + .form-icon {
  color: red;
}
/**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
/**
* Show the placeholder when the input is focused.
*/
input:focus::-webkit-input-placeholder {
  opacity: 1;
}
/**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>
