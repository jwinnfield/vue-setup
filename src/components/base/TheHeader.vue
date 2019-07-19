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
  height:158px;
  background: linear-gradient(0deg, $_PRIMARY_COLOR 35%, $_SECONDARY_COLOR 100%);

  &.home {
    height: 296px;
    background-image: url("~@Assets/img/header.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .triangle-left,
  .triangle-right {
    width: 50%;
    height: 118px;
    background: #f5f6f7;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }

  .triangle-left {
    transform: scaleX(-1);
  }

  .logo{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@Assets/img/logo.png");
    background-repeat: no-repeat;
    background-position-x: center;
      background-position-y: 30px;
      background-size: 220px auto;

    &.home{
      background-position-y: 100px;
      background-size: 280px auto;
    }
  }
}
</style>
