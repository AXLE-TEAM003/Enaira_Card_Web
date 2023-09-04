<template>
  <div>
    <div
      class="lg:tw-py-20 md:tw-py-20 tw-py-6 tw-px-4 lg:tw-w-[500px] md:tw-w-[500px] tw-w-full"
    >
      <div
        class="card-details tw-mb-4 tw-bg-primary lg:tw-p-6 md:tw-p-6 tw-p-6 tw-rounded-xl tw-flex tw-justify-between tw-items-center"
      >
        <div>
          <span class="tw-text-xs tw-font-light tw-text-white"
            >ID-08123456789</span
          >
          <h5 class="tw-text-white tw-mb-0">
            {{ visibleAmount ? "N***" : "N0.00" }}
          </h5>
        </div>

        <div>
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

      <div
        class="add-card tw-mb-4 tw-bg-white lg:tw-pl-12 md:tw-pl-12 tw-pl-6 tw-pr-6 tw-rounded-xl tw-shadow-sm tw-flex tw-items-center tw-justify-between tw-py-6"
      >
        <div class="tw-flex tw-items-center tw-space-x-4">
          <span
            role="button"
            @click="linkCard"
            class="tw-bg-faded tw-block tw-h-[30px] tw-w-[30px] tw-flex tw-items-center tw-justify-center tw-rounded-full"
          >
            <i-icon icon="icon-park-outline:add-one" />
          </span>
          <span class="tw-font-semibold tw-text-[14px]">Activate Card</span>
        </div>
        <div>
          <img
            src="@/assets/img/eNaira-link-card.svg"
            class="lg:tw-w-24 md:tw-w-24 tw-w-20"
            alt=""
          />
        </div>
      </div>

      <div class="tw-mb-4">
        <user-card />
      </div>

      <div class="tw-mb-4">
        <button class="outline-btn w-100 tw-py-3" @click="openKeyboard">
          <span>Activate Card</span>
        </button>
      </div>

      <div
        class="lg:tw-flex md:tw-flex tw-items-center lg:tw-space-x-4 md:tw-space-x-4"
      >
        <div
          @click="openKeyboard"
          role="button"
          class="tw-bg-[#FDCFCF] tw-justify-center tw-w-full tw-rounded-xl tw-p-6 tw-flex lg:tw-mb-0 tw-mb-4 md:tw-mb-0 tw-items-center tw-space-x-2"
        >
          <span
            class="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[35px] tw-bg-[#FD9898] tw-w-[35px]"
          >
            <i-icon icon="fluent:delete-12-regular" />
          </span>
          <span class="tw-text-sm tw-font-semibold"> Unlink Card </span>
        </div>

        <div
          @click="openKeyboard"
          role="button"
          class="tw-w-full tw-justify-center tw-bg-[#FFF4BB] tw-rounded-xl tw-p-6 tw-flex tw-items-center tw-space-x-2"
        >
          <span
            class="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[35px] tw-bg-[#F5E48A] tw-w-[35px]"
          >
            <i-icon icon="ri:close-fill" />
          </span>
          <span class="tw-text-sm tw-font-semibold"> Disable Card </span>
        </div>
      </div>
    </div>

    <!-- Keyboad Modal  -->
    <EnterPin v-if="enterPin" @closeModal="closeModal" />

    <!-- Add Card  -->
    <add-card
      v-if="addCard"
      @link="openKeyboard"
      @closeModal="closeCardModal"
    />
  </div>
</template>

<script>
import EnterPin from "@/components/Modals/EnterPin.vue";
import AddCard from "@/components/Modals/AddCard.vue";
import UserCard from "@/components/UserCard.vue";

export default {
  components: { EnterPin, AddCard, UserCard },
  data() {
    return {
      enterPin: false,
      addCard: false,
      visibleAmount: false,
    };
  },

  methods: {
    linkCard() {
      this.addCard = true;
    },

    closeCardModal() {
      this.addCard = false;
    },

    openKeyboard() {
      this.closeCardModal();
      this.enterPin = true;
    },

    closeModal() {
      this.enterPin = false;
    },
  },
};
</script>

<style></style>
