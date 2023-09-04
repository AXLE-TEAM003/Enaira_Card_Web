<template>
  <div class="tw-bg-white tw-p-6 tw-rounded-lg">
    <form action="">
      <div class="tw-mb-4">
        <select name="" id="" class="select">
          <option value="" v-for="item in currencies" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="tw-mb-4">
        <input type="text" placeholder="Enter wallet Address">
      </div>
      <div class="tw-mb-5">
       <input type="tel" placeholder="Enter Amount">
      </div>
      <div class="tw-text-center">
        <button class="primary-btn tw-w-full">
            Withdraw
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencies: ["BNB", "USDT", "SZCB"],
    };
  },
};
</script>

<style></style>
