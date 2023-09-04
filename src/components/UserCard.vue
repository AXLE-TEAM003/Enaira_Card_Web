<template>
  <div class="user-card tw-rounded-xl tw-p-6 tw-flex tw-flex-col tw-space-y-6">
    <div class="tw-flex tw-justify-between tw-items-center">
        <img src="@/assets/img/enaira-logo-white.png" class="tw-w-[120px]" alt="">

        <span>
            <span></span>
            <span>Active</span>
        </span>
    </div>

    <div class="tw-flex tw-justify-end">
        <img src="@/assets/img/eNaira-card-icon.png" alt="">
    </div>

    <div class="tw-flex tw-items-center tw-justify-between">
        <span class="card-number tw-text-white lg:tw-text-[30px] md:tw-text-[30px] tw-text-[20px]">
            **** **** **** 1886
        </span>
      <span
        class="tw-bg-white tw-block tw-h-[30px] tw-w-[30px] tw-flex tw-items-center tw-justify-center tw-rounded-full"
        role="button"
        @click="visibleAmount = !visibleAmount"
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
  data() {
    return {
      visibleAmount: false,
    };
  },
};
</script>

<style>
.user-card {
  background: url("../assets/img/enaira-auth-bg.png");
  background-size: cover;
  background-position: center;
  background-color: var(--primary-color);
  background-blend-mode: overlay;
}

.card-number {
    font-family: var(--card-font);
}
</style>
