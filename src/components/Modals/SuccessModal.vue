<template>
    <modal-wrapper @close="handleClose">
      <template #body>
        <div class="field">
          <input
            type="tel"
            name="card-number"
            id="text"
            placeholder="Enter Card Number"
          />
          <label for="card-number">Enter Card Number</label>
        </div>
  
        <div>
          <div class="tw-mt-6">
            <button @click="$emit('link')" class="primary-btn w-100">
              <span>Activate</span>
            </button>
          </div>
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
      return {
        pin: new Array(4),
        hidden: new Array(4),
        code: "",
      };
    },
  
    methods: {
      done() {
        this.$emit("done", this.pin.join(""));
      },
  
      handleClose() {
        this.$emit("closeModal");
      },
    },
  
    watch: {
      
    },
  };
  </script>
  
  <style scoped>
  .field {
    display: flex;
    flex-flow: column-reverse;
    margin-bottom: 20px;
    position: relative;
  
    width: 100%;
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
  