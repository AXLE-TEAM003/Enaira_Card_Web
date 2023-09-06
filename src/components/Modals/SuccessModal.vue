<template>
  <modal-wrapper :header="false">
    <template #body>
      <div class="tw-p-4">
        <div class="tw-flex tw-justify-center">
          <span
            class="tw-flex tw-items-center tw-justify-center tw-h-24 tw-w-24 tw-rounded-full tw-bg-gray6"
          >
            <i-icon icon="iconoir:check" width="40" />
          </span>
        </div>
        <h5 class="tw-font-semibold tw-text-center tw-text-[20px] tw-my-5">
          Successful
        </h5>
        <span class="tw-text-light tw-text-xs tw-text-center tw-block">
          <slot name="resultText"></slot>
        </span>
      </div>
    </template>
  </modal-wrapper>
</template>

<script>
import ModalWrapper from "../ModalWrapper.vue";

export default {
  components: {
    ModalWrapper,
  },

  data() {
    return {};
  },

  methods: {},

  watch: {},
};
</script>

<style scoped></style>
