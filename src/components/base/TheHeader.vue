<template>
  <header :class="classCustom">
    <div class="logo" :class="classCustom" />
    <div class="triangle-left" />
    <div class="triangle-right" />
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    classCustom() {
      return this.$route.name === "Login" ? "home" : ""
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/index.scss";

header {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 15.8rem;
  background: linear-gradient(
    0deg,
    $_PRIMARY_COLOR 35%,
    $_SECONDARY_COLOR 100%
  );

  &.home {
    height: 29.6rem;
    background-image: url("~@Assets/img/header.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .triangle-left,
  .triangle-right {
    width: 50%;
    height: 11.8rem;
    background: #f5f6f7;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }

  .triangle-left {
    transform: scaleX(-1);
  }

  .logo {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@Assets/img/logo.png");
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 3rem;
    background-size: 22rem auto;

    &.home {
      background-position-y: 10rem;
      background-size: 28rem auto;
    }
  }
}
</style>
