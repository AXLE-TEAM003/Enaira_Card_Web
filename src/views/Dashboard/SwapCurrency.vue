<template>
  <div class="">
    <div class="swap-content tw-mb-4 tw-bg-gray7 tw-p-6 tw-rounded-lg">
      <span v-if="loading"
        ><i-icon icon="eos-icons:bubble-loading" width="20px"
      /></span>
      <div v-else>
          <div>
            <label for="">From</label>
            <div class="tw-flex tw-items-center tw-space-x-6">
              <el-dropdown trigger="click">
                <span
                  class="el-dropdown-link tw-flex tw-items-center tw-space-x-2"
                >
                  <img
                    class="tw-w-[20px] tw-h-[20px]"
                    :src="icon(selected.wallet_id)"
                    alt=""
                  />
                  <span>
                    {{ selected.wallet_symbol }}
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in wallets" :key="item.id">
                    <span
                      class="tw-flex tw-space-x-2 tw-items-center tw-w-full"
                      @click="selectWallet(item)"
                    >
                      <img
                        class="tw-w-[20px] tw-h-[20px]"
                        :src="icon(item.wallet_id)"
                        alt=""
                      />
                      <span>
                        {{ item.wallet_symbol }}
                      </span>
                    </span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <input type="tel" placeholder="Enter Amount" class="tw-bg-transparent input-amount" />
            </div>
          </div>

          <div class="tw-relative">
            <hr>
            <span class="tw-absolute -tw-top-4 tw-right-4 tw-flex tw-h-[30px] tw-w-[30px] tw-text-white tw-bg-primary tw-items-center tw-justify-center tw-rounded-lg">
                <i-icon icon="iconamoon:playlist-repeat-list-bold" />
            </span>
          </div>

          <div>
            <label for="">To</label>
            <div class="tw-flex tw-items-center tw-space-x-6">
              <el-dropdown trigger="click">
                <span
                  class="el-dropdown-link tw-flex tw-items-center tw-space-x-2"
                >
                  <img
                    class="tw-w-[20px] tw-h-[20px]"
                    :src="icon(selected2.wallet_id)"
                    alt=""
                  />
                  <span>
                    {{ selected2.wallet_symbol }}
                  </span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in wallets" :key="item.id">
                    <span
                      class="tw-flex tw-space-x-2 tw-items-center tw-w-full"
                      @click="selectWallet2(item)"
                    >
                      <img
                        class="tw-w-[20px] tw-h-[20px]"
                        :src="icon(item.wallet_id)"
                        alt=""
                      />
                      <span>
                        {{ item.wallet_symbol }}
                      </span>
                    </span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <input type="tel" placeholder="Enter Amount" class="tw-bg-transparent input-amount" />
            </div>
          </div>
          
      </div>
    </div>

    <div class="swap-details tw-mb-4 tw-bg-gray6 tw-p-6 tw-rounded-lg">
      Swap Summary
    </div>

    <div class="tw-text-center">
      <button class="primary-btn tw-w-full">swap</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null,
      wallets: [],
      isSelected: false,
      isSelected2: false,
      selectedWallet: {},
      selectedWallet2: {},
      bnb_icon: require("@/assets/img/samzugagpt_bnb_icon.png"),
      usdt_icon: require("@/assets/img/samzugagpt_usdt_icon.png"),
      szcb_icon: require("@/assets/img/samzugagpt_szcb_icon.png"),
      loading: false,
    };
  },

  methods: {
    getBalances() {
      this.loading = true;
      this.$axios
        .get(
          `${process.env.VUE_APP_API_URL}user-wallet-balance/multi?wallet_id=szcb,usdt,bnb&formatted=yes&user_id=${this.user.user_id}`
        )
        .then((res) => {
          console.log(res);
          this.wallets = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    selectWallet(e) {
      this.selectedWallet = e;
      this.isSelected = true;
    },

    selectWallet2(e) {
      this.selectedWallet2 = e;
      this.isSelected2 = true;
    },

    icon(e) {
      var iconValue = "";
      if (e === "szcb") {
        iconValue = this.szcb_icon;
      } else if (e === "usdt") {
        iconValue = this.usdt_icon;
      } else {
        iconValue = this.bnb_icon;
      }
      return iconValue;
    },
  },

  beforeMount() {
    this.getBalances();
  },

  computed: {
    requestId() {
      var result = Math.round(+new Date() / 1000);
      return `staking_${result}`;
    },
    user() {
      return this.$store.getters["auth/getUser"];
    },

    selected() {
      var selectedValue = {};
      if (!this.isSelected) {
        selectedValue = this.wallets[0];
      } else {
        selectedValue = this.selectedWallet;
      }
      return selectedValue;
    },

    selected2() {
      var selectedValue = {};
      if (!this.isSelected2) {
        selectedValue = this.wallets[1];
      } else {
        selectedValue = this.selectedWallet2;
      }
      return selectedValue;
    },

  },
};
</script>

<style scoepd>
.input-amount {
    border: 0 !important;

}
</style>
