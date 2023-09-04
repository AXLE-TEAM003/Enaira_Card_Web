<template>
  <div>
    <div class="auth-container">
      <div
        class="tw-px-10 md:tw-px-10 lg:tw-px-16 tw-py-4 tw-flex flex-column tw-justify-center"
      >
        <slot />
      </div>
      <div class="left-side-auth tw-flex tw-items-center tw-justify-center">
        <h1 class="tw-text-white tw-font-bold tw-w-64 tw-text-center tw-text-[45px]">
          Welcome to eNaira Card Management System
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAuthLayout",
};
</script>

<style>
.auth-container {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-columns: 40% 1fr;
  height: 100vh;
  background: var(--white);
}

.left-side-auth {
  background: url("../assets/img/enaira-auth-bg.png");
  background-size: cover;
  background-position: center;
  background-color: var(--primary-color);
  background-blend-mode: overlay;
}

.top-signage {
  background: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: -200px;
  width: 100%;
  height: 300px;
  /* right: 0; */
}

@media (max-width: 764px) {
  .left-side-auth {
    display: none;
  }
  .auth-container {
    grid-template-columns: auto;
  }
}
</style>
