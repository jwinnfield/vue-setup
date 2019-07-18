<template>
  <div class="home">
    <base-login />

    <h1 class="title">
      Le <span class="subtitle-1">SIRH</span> le <span class="subtitle-2">+ ZEN</span> <br> pour gérer vos formations
    </h1>

    <router-link :to="{name: 'Registration'}" tag="button" class="btn btn-registration">
      S'inscrire
    </router-link>
  </div>
</template>

<script>
import BaseLogin from "@/components/BaseLogin"

export default {
  name: "Home",
  components: {
    BaseLogin,
  },
}
</script>

<style lang="scss" scoped>
  @import "@/scss/components/btn.scss";

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
      margin-top: 50px;
      margin-bottom: 0;
      font-weight: 100;
      font-size: 28px;
      font-family: "Quicksand-Light";

      .subtitle-1, .subtitle-2 {
        font-weight: 700;
      }

      .subtitle-2 {
        color: $_SECONDARY_COLOR;
      }
    }

    .btn-registration {
      margin-top: 40px;
    }
  }
</style>
