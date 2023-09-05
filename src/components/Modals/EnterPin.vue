<template>
  <modal-wrapper @close="handleClose">
    <template #body>
      <div class="keyboard-container">
        <div class="tw-mb-8">
          <h6 class="">Enter Pin</h6>
          <span
            class="tw-block tw-text-gray4 tw-text-center tw-text-sm tw-font-medium"
            >Enter transaction pin</span
          >
        </div>

        <div class="code-input">
          <span v-for="(item, index) in hidden" :key="index">
            <i-icon :icon="item" width="12px" />
          </span>
        </div>

        <div class="keyboard">
          <span role="button" @click="enterNum('1')">1</span>
          <span role="button" @click="enterNum('2')">2</span>
          <span role="button" @click="enterNum('3')">3</span>
          <span role="button" @click="enterNum('4')">4</span>
          <span role="button" @click="enterNum('5')">5</span>
          <span role="button" @click="enterNum('6')">6</span>
          <span role="button" @click="enterNum('7')">7</span>
          <span role="button" @click="enterNum('8')">8</span>
          <span role="button" @click="enterNum('9')">9</span>
          <span role="button" @click="remove">
            <i-icon icon="fluent:backspace-24-regular" width="30px" />
          </span>
          <span @click="enterNum('0')">0</span>
          <span class="ok" role="button" @click="done">Ok</span>
        </div>

        <!-- <div class="mt-4">
          <h6>Forgot Pin?</h6>
        </div> -->
      </div>
    </template>
  </modal-wrapper>
</template>

<script>
import ModalWrapper from "../ModalWrapper.vue";

export default {
  components: {
    // PincodeInput,
    ModalWrapper,
  },
  data() {
    return {
      pin: new Array(4),
      hidden: new Array(4),
      code: "",
      dialogVisible: false,
    };
  },
  methods: {
    enterNum(value) {
      //   if (this.pin.length < 4) {
      this.code = value;
      let hiddenCode = "prime:circle-fill";
      let newPin = [...this.pin];
      let newHiddenPin = [...this.hidden];
      newPin[this.pin.findIndex((el) => el === undefined)] = value;
      newHiddenPin[this.hidden.findIndex((el) => el === undefined)] =
        hiddenCode;
      this.pin = newPin;
      this.hidden = newHiddenPin;
    },

    remove() {
      let newPin = [...this.pin];
      let newHiddenPin = [...this.hidden];
      let i = this.pin.findIndex((el) => el === undefined);
      let j = this.hidden.findIndex((el) => el === undefined);
      newPin[i > 0 ? i - 1 : 3] = undefined;
      newHiddenPin[j > 0 ? j - 1 : 3] = undefined;
      this.pin = newPin;
      this.hidden = newHiddenPin;
    },

    done() {
      // this.$emit("done", this.pin.join(""));
      this.$emit("done");
    },

    handleClose() {
      this.$emit("closeModal");
    },
  },
  //   computed: {

  //   },
};
</script>

<style scoped>
.keyboard {
  display: grid;
  grid-template-columns: repeat(3, 65px);
  gap: 20px;
  width: 100%;
  justify-content: center;
}

.keyboard span {
  text-align: center;
  /* background-color: var(--white); */
  height: 45px;
  display: grid;
  place-items: center;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
}

.keyboard-container h6 {
  font-weight: 700;
  text-align: center;
}

.keyboard span.ok {
  background-color: var(--primary-color);
  color: #fff;
  text-transform: uppercase;
}

.keyboard-container .code-input {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 55px);
  align-items: center;
  gap: 5px;
  width: 100%;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  margin-bottom: 20px;
}
.keyboard-container .code-input span {
  border: 1px solid var(--gray-200);
  height: 55px;
  display: grid;
  place-items: center;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
}
</style>
