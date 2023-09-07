<template>
  <div class="user-card tw-rounded-xl tw-p-6 tw-flex tw-flex-col tw-space-y-4" :class="card_details.enabled ? '' : 'blocked'  ">
    <div class="tw-flex tw-justify-between tw-items-center">
      <img
        src="@/assets/img/enaira-logo-white.png"
        class="tw-w-[120px]"
        alt=""
      />

      <span class="tw-flex tw-space-x-1 tw-items-center">
        <span>
          <i-icon
            icon="material-symbols:circle"
            width="10px"
            :color=" card_details.enabled
            ? '#4DFF3C'
            : card_details.status === 'not linked'
            ? '#FFA500'
            : '#FF8389'"
          />
        </span>
        <span class="tw-text-white tw-text-sm tw-font-medium">{{
          card_details.enabled
            ? "Active"
            : card_details.status === "not linked"
            ? "not linked"
            : "Blocked"
        }}</span>
      </span>
    </div>

    <div class="tw-flex tw-justify-end">
      <img src="@/assets/img/eNaira-card-icon.png" class="tw-w-[45px]" alt="" />
    </div>

    <div class="tw-flex tw-items-center tw-justify-between">
      <span
        class="card-number tw-text-white lg:tw-text-[37px] md:tw-text-[37px] tw-text-[28px]"
      >
        {{ cardNumber }}
      </span>
      <span
        class="tw-bg-white tw-block tw-h-[30px] tw-w-[30px] tw-flex tw-items-center tw-justify-center tw-rounded-full"
        role="button"
        @click="displayCardNumber"
      >
        <i-icon
          :icon="visibleAmount ? 'tabler:eye' : 'gridicons:not-visible'"
          class=""
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card_details: {
      type: Object,
    },
  },
  data() {
    return {
      visibleAmount: false,
      cardNumber: "",
    };
  },
  methods: {
    displayCardNumber() {
      this.visibleAmount = !this.visibleAmount;
    },
  },

  watch: {
    visibleAmount: {
      handler(val) {
        if (val) {
          // let cardInfo = this.card_details.card_number.match(/.{1,4}/g)
          this.cardNumber = this.card_details.card_number;
        } else {
          let carrdInfo = this.card_details.card_number.split("");
          let spacing = carrdInfo.length - 4;
          let hideInfo = carrdInfo.fill("*", "0", spacing);
          let cardNumber = hideInfo.join("");
          this.cardNumber = cardNumber;
          // let carrd = cardNumber.match(/.{1,4}/g)
          // this.cardNumber = carrd.join(" ")
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
.user-card {
  background: url("../assets/img/enaira-auth-bg.png");
  background-size: cover;
  background-position: center;
  background-color: var(--primary-color) ;
  background-blend-mode: overlay;
}

.user-card.blocked {
  background: url("../assets/img/enaira-auth-bg-dark.png");
  background-size: cover;
  background-position: center;
  background-color: var(--dark) ;
  background-blend-mode: overlay;
}

.card-number {
  font-family: var(--card-font);
}
</style>
