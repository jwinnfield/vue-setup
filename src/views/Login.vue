<template>
  <div class="forma--home">
    <app-login />

    <h1 class="forma--title">
      Le <span class="forma--subtitle-1">SIRH</span> le <span class="forma--subtitle-2">+ ZEN</span> <br> pour gérer vos formations
    </h1>

    <router-link
      v-ripple.mouseover
      :to="{name: 'Registration'}"
      tag="button"
      class="c--btn forma--btn-registration"
    >
      S'inscrire
    </router-link>
  </div>
</template>

<script>
import AppLogin from "@/components/app/AppLogin"

export default {
  name: "Home",
  components: {
    AppLogin,
  },
}
</script>

<style lang="scss" scoped>
  @import "@/scss/components/btn.scss";

  .forma--home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .forma--title {
      text-align: center;
      margin-top: 5.0rem;
      margin-bottom: 0;
      font-weight: 100;
      font-size: 2.8rem;
      font-family: "Quicksand-Light";

      .forma--subtitle-1, .forma--subtitle-2 {
        font-weight: 700;
      }

      .forma--subtitle-2 {
        color: $_SECONDARY_COLOR;
      }
    }

    .forma--btn-registration {
      margin-top: 4.0rem;
    }
  }
</style>
