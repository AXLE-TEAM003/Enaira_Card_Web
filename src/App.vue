<template>
  <div id="app">
    <AppLayout>
      <transition name="fade">
        <router-view />
      </transition>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
export default {
  components: {
    AppLayout,
  },
  data() {
    return {
      path: "",
    };
  },

  methods: {},

  mounted() {
    var pathArray = window.location.pathname.split("/");
    this.path = pathArray[1];
  },

  watch: {
    path: {
      handler(val) {
        if (val) {
          var pathNum = Number(val);
          if (Number.isInteger(pathNum)) {
            this.$router.push(`/?card=${pathNum}`);
          }
        }
      },
      immediate: true,
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
