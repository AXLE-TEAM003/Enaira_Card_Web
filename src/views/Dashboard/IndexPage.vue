<template>
  <div>
    <div
      class="lg:tw-py-20 md:tw-py-20 tw-py-6 tw-px-4 lg:tw-w-[500px] md:tw-w-[500px] tw-w-full"
    >
      <div
        class="card-details tw-mb-4 tw-bg-primary lg:tw-p-6 md:tw-p-6 tw-p-6 tw-rounded-xl tw-flex tw-justify-between tw-items-center"
      >
        <div>
          <span class="tw-text-xs tw-font-light tw-text-white tw-uppercase"
            >balance</span
          >
          <h5 class="tw-text-white tw-mb-0 tw-font-weight-semibold">
            {{ "₦" + (visibleAmount ? "***" : user.balance) }}
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
        v-if="card === null"
        role="button"
        @click="linkCard"
        class="add-card tw-mb-4 tw-bg-white lg:tw-pl-12 md:tw-pl-12 tw-pl-6 tw-pr-6 tw-rounded-xl tw-shadow-sm tw-flex tw-items-center tw-justify-between tw-py-6"
      >
        <div class="tw-flex tw-items-center tw-space-x-4">
          <span
            role="button"
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

      <div class="tw-mb-4" v-if="card !== null">
        <user-card :card_details="card" />
      </div>

      <div
        class="tw-mb-4"
        v-if="
          Object.keys(isCardScanned).length > 0 &&
          this.card.status === 'not linked'
        "
      >
        <button class="outline-btn w-100 tw-py-3" @click="uploadCard">
          <span>Activate Card</span>
        </button>
      </div>

      <div
        v-if="cardActions"
        class="lg:tw-flex md:tw-flex tw-items-center lg:tw-space-x-4 md:tw-space-x-4"
      >
        <div
          @click="unlinkCard"
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
          @click="updateCardStatus"
          role="button"
          class="tw-w-full tw-justify-center tw-rounded-xl tw-p-6 tw-flex tw-items-center tw-space-x-2"
          :class="card.enabled ? 'tw-bg-[#FFF4BB]' : 'tw-bg-[#D8F4D5]'"
        >
          <span
            class="tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[35px] tw-w-[35px]"
            :class="card.enabled ? 'tw-bg-[#F5E48A]' : 'tw-bg-[#A2E19B]'"
          >
            <i-icon
              :icon="
                card.enabled ? 'ri:close-fill' : 'icon-park-outline:add-one'
              "
            />
          </span>
          <span class="tw-text-sm tw-font-semibold">
            {{ card.enabled ? "Disable Card" : "Enable Card" }}
          </span>
        </div>
      </div>
    </div>

    <!-- Keyboad Modal  -->
    <EnterPin
      v-if="enterPin"
      @closeModal="closePinModal"
      @done="completeCardProcess"
    >
      <template slot="actionText">
        <span> {{ actionText }} </span>
      </template>
    </EnterPin>

    <!-- Add Card  -->
    <add-card
      v-if="addCard"
      @link="activateCard"
      @closeModal="closeCardModal"
    />

    <!-- Success Modal -->
    <success-modal v-if="isSuccessful">
      <template slot="resultText">
        <span> {{ resultText }} </span>
      </template>
    </success-modal>

    <!-- Error Modal -->
    <error-modal v-if="isError">
      <template slot="resultText">
        <span> {{ errorText }} </span>
      </template>
    </error-modal>
  </div>
</template>

<script>
import EnterPin from "@/components/Modals/EnterPin.vue";
import AddCard from "@/components/Modals/AddCard.vue";
import UserCard from "@/components/UserCard.vue";
import SuccessModal from "@/components/Modals/SuccessModal.vue";
import ErrorModal from "@/components/Modals/ErrorModal.vue";

export default {
  components: { EnterPin, AddCard, UserCard, SuccessModal, ErrorModal },
  data() {
    return {
      enterPin: false,
      addCard: false,
      visibleAmount: false,
      card_number: undefined,
      isSuccessful: false,
      isError: false,
      actionText: "",
      resultText: "",
      errorText: "",
      resultHeader: "",
      balance: "",
      action: "",
      linkedCard: {}
    };
  },

  methods: {
    linkCard() {
      this.addCard = true;
    },

    closeCardModal() {
      this.addCard = false;
    },

    activateCard(value) {
      this.closeCardModal();
      this.card_number = value;
      this.openKeyboard();
      this.action = "activate";
      this.actionText = "Enter transaction pin to activate card";
      this.resultHeader = "Card actiavted Successful";
      this.resultText = "Your card was activated successfully ";
      this.errorText = "Card activation unsuccessful.";
    },

    uploadCard() {
      this.openKeyboard();
      this.action = "activate";
      this.actionText = "Enter transaction pin to activate card";
      this.resultHeader = "Card actiavted Successful";
      this.resultText = "Your card was activated successfully ";
      this.errorText = "Card activation unsuccessful.";
    },

    openKeyboard() {
      this.enterPin = true;
    },

    completeCardProcess(value) {
      if (this.action === "activate") {
        this.activateUserCard(value);
      }
      if (this.action === "deactivate") {
        this.deactivateCard(value);
      }
      if (this.action === "disable") {
        this.disableCard(value);
      }
      if (this.action === "enable") {
        this.enableCard(value);
      }
    },

    unlinkCard() {
      this.action = "deactivate";
      this.actionText = "Enter transaction pin to unlink card";
      this.resultHeader = "Card Unlink Successful";
      this.resultText = "Your card was unlinked successfully ";
      this.errorText = "Card unlink unsuccessful.";
      this.enterPin = true;
    },

    linkScannedCard() {
      this.actionText = "Enter transaction pin to activate card";
      this.resultHeader = "Successful";
      this.resultText = "Your card was linked successfully ";
      this.enterPin = true;
    },

    updateCardStatus() {
      var action = this.card.enabled ? "disable" : "enable";
      var result = this.card.enabled ? "Block" : "Unblock";
      var text = this.card.enabled ? "blocked" : "Unblocked";
      this.action = action;
      this.actionText = `Enter transaction pin to ${action} card`;
      this.resultHeader = `Card ${result} Successful`;
      this.resultText = `Your card was ${text} successfully`;
      this.enterPin = true;
    },

    closePinModal() {
      this.enterPin = false;
    },

    closeSuccessModal() {
      this.isSuccessful = false;
    },

    closeErrorModal() {
      this.isError = false;
    },

    // Method to Activate  Card
    activateUserCard(e) {
      var payload = {
        card_number: this.card_number,
        pin: e,
      };
      this.$request
        .post("/card/activate", payload)
        .then((res) => {
          console.log(res);
          this.enterPin = false;
          this.isSuccessful = true;
          this.$store.dispatch("auth/getUserProfile");
          this.linkedCard = {}
          this.removeQuery()
        })
        .catch((err) => {
          console.log(err);
          this.enterPin = false;
          this.isError = true;
        });
    },

    // Method to Unlink Card
    deactivateCard(e) {
      var payload = {
        card_number: this.card.card_number,
        pin: e,
      };
      this.$request
        .post("/card/deactivate", payload)
        .then((res) => {
          console.log(res);
          this.enterPin = false;
          this.isSuccessful = true;
          this.$store.dispatch("auth/getUserProfile");
        })
        .catch((err) => {
          console.log(err);
          this.enterPin = false;
          this.isError = true;
        });
    },

    // Method to disable Card
    disableCard(e) {
      var payload = {
        card_number: this.card.card_number,
        pin: e,
      };
      this.$request
        .post("/card/disable", payload)
        .then((res) => {
          console.log(res);
          this.enterPin = false;
          this.isSuccessful = true;
          this.$store.dispatch("auth/getUserProfile");
        })
        .catch((err) => {
          console.log(err);
          this.enterPin = false;
          this.isError = true;
        });
    },

    // Method to Block Card
    enableCard(e) {
      var payload = {
        card_number: this.card.card_number,
        pin: e,
      };
      this.$request
        .post("/card/enable", payload)
        .then((res) => {
          console.log(res);
          this.enterPin = false;
          this.isSuccessful = true;
          this.$store.dispatch("auth/getUserProfile");
        })
        .catch((err) => {
          console.log(err);
          this.enterPin = false;
          this.isError = true;
        });
    },

    // Remove the query Parameters
    removeQuery(){
      this.$router.push({query: {}})
    }
  },

  watch: {
    "$route.query": {
      handler(val) {
        console.log(val, "ommmo");
        if (Object.keys(val).length > 0) {
          if (this.card !== null) {
            this.isError = true;
            this.errorText = "You have a linked card";
            this.removeQuery()
          } else {
            this.linkedCard = {
              card_number: val.card,
              status: "not linked",
            };
            this.card_number = this.linkedCard.card;
          }
        }
      },
      immediate: true,
    },

    isSuccessful: {
      handler(val) {
        console.log(val);
        if (val) {
          setTimeout(() => {
            this.closeSuccessModal();
          }, 1500);
        }
      },
      immediate: true,
    },

    isError: {
      handler(val) {
        console.log(val);
        if (val) {
          setTimeout(() => {
            this.closeErrorModal();
          }, 1500);
        }
      },
      immediate: true,
    },
  },

  mounted() {
    if(Object.keys(this.$route.query).length > 0) {
      let data = this.$route.query
      this.card_number = data.card
    }
  },

  computed: {
    isCardScanned() {
      return this.$route.query;
    },

    cardActions() {
      return this.card !== null && this.linkedCard.status !== 'not linked';
    },

    user() {
      return this.$store.getters["auth/getUser"];
    },

    card() {
      return this.user.card !== undefined ? this.user.card : Object.keys(this.linkedCard).length !== 0 ? this.linkedCard : null ;
    },
  },
};
</script>

<style></style>
