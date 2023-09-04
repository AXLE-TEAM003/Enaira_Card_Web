<template>
  <div class="dashboard tw-h-screen">
    <app-header class="tw-sticky tw-top-0 sm:tw-z-0" />
    <div id="main" class="md:tw-flex lg:tw-flex lg:tw-justify-center md:tw-justify-center tw-overflow-y-auto lg:tw-h-[80vh] md:tw-h-[80vh]">
      <slot />
    </div>
  </div>
</template>

<script>
// import AppDrawer from "@/components/Navigation/AppDrawer.vue";
import AppHeader from "@/components/Navigation/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "DashboardLayout",
  computed: {
    routeParent() {
      return this.$route.meta.header;
    },
  },
};
</script>

<style>
.dashboard {
  background: url("../assets/img/enaira-auth-bg.png");
  background-size: cover;
  background-position: center;
  background-color: var(--secondary-color);
  background-blend-mode: overlay;
}


</style>
