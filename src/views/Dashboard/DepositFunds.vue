<template>
  <div class="tw-bg-white tw-p-6 tw-rounded-lg">
    <div>
      <label for="">Select Wallet</label>
      <select name="" id="" class="select">
        <option value="" v-for="item in currencies" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-4" v-if="loading">
      <span><i-icon icon="eos-icons:bubble-loading" width="80px" /></span>
    </div>
    <div v-else>
      <div class="tw-text-center">
        <div class="">
            <v-qr :text="wallet_address" class="tw-bg-gray4" :width="300" />
        </div>
      </div>
      <p class="tw-text-center">
        Only send <b>BNB</b>, <b>USDT</b> and <b>SZCB</b> to this address.
        Sending any other asset to this address may result in the loss of your
        deposit!
      </p>
      <div>
        <div
          class="tw-flex align-items-center tw-space-x-2 tw-bg-gray4 tw-p-1 tw-rounded-lg"
        >
          <input
            type="text"
            class="wallet-address-input"
            readonly
            v-model="wallet_address"
          />
          <button
            class="primary-btn"
            role="button"
            v-clipboard:copy="wallet_address"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            copy
          </button>
        </div>

        <span class="tw-text-danger tw-text-xs">
          Note: We Only Support BEP20
        </span>
      </div>
      <div class="tw-mt-3 text-center">
        <button class="outline-btn" @click="$router.go(-1)">
            Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wallet_address: "",
      color: {
        light: "#ffffff",
      },
      currencies: ["BNB", "USDT", "SZCB"],
      loading: false
    };
  },

  methods: {
    generateWalletAddress() {
        this.loading = true
      this.$axios
        .get(
          `${process.env.VUE_APP_MIDDLEWARE_API_URL}address/${this.user.user_id}`
        )
        .then((res) => {
          let resPayload = res.data.data;
          this.wallet_address = resPayload.addr;
          this.loading = false
          return res;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false
          return err;
        });
    },

    onCopy: function (value) {
      this.$toast.open({
        message: `Wallet address copied`,
        type: "success",
        position: "top",
      });
      console.log(value);
    },

    onError: function () {
      alert("Failed to copy texts");
    },
  },

  computed: {
    user() {
      return this.$store.getters["auth/getUser"];
    },
  },

  beforeMount() {
    this.generateWalletAddress();
  },
};
</script>

<style scoped>
.wallet-address-input {
  background: transparent;
  border: none;
  font-size: 17px;
  font-weight: 600;
  color: var(--gray-600);
}
</style>
