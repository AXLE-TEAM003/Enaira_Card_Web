<template>
  <div class="">
    <div
      class="tw-px-4 tw-py-6 tw-bg-white md:tw-relative lg:tw-relative tw-z-auto lg:tw-z-10 md:tw-z-10"
    >
      <div class="tw-flex tw-justify-between tw-items-center">
        <span class="">
          <img
            src="@/assets/img/enaira-logo.png"
            class="lg:tw-w-[120px] md:tw-w-[120px] tw-w-[100px]"
            alt=""
          />
        </span>
        <div
          class="tw-justify-end tw-w-full tw-flex tw-space-x-4 tw-items-center"
        >
          <div class="tw-full tw-flex tw-items-center tw-space-x-2">
            <img
              class="tw-h-[30px] tw-w-[30px] tw-rounded-full"
              src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
              alt=""
            />
            <span class="tw-flex tw-flex-col tw-w-full">
              <span class="tw-text-sm tw-font-bold"
                >Hi, {{ name }}</span
              >
              <span class="tw-text-xs tw-flex"
                >{{ message }} <span></span
              ></span>
            </span>
          </div>
          <button
            @click="$router.push('/')"
            class="primary-btn tw-bg-[#D8F4D5] tw-text-primary lg:tw-px-8 md:tw-px-8 tw-px-3 tw-font-bold"
          >
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentTime: new Date()
    };
  },

  methods: {
    getProfile() {
      this.$store.dispatch("auth/getUserProfile");
    },
    updateTime() {
      this.currentTime = new Date();
    },
  },
  beforeMount() {
    this.getProfile();
  },
  created() {
    setInterval(this.updateTime, 1000);
  },
  destroyed() {
    clearInterval(this.updateTime);
  },
  computed: {
    user() {
      return this.$store.getters["auth/getUser"];
    },
    message() {
      const currentHour = this.currentTime.getHours();

      if (currentHour >= 0 && currentHour < 12) {
        return "Good morning ";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon ";
      } else {
        return "Good evening ";
      }
    },
    name(){
      let name = this.user.customer_name.split(' ')
      let first_name = name[0]
      return first_name
    }
  },
};
</script>

<style></style>
