<template>
  <div id="app">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/base/TheHeader"
import TheFooter from "@/components/base/TheFooter"
import { mapActions } from "vuex"

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    this.$axios.interceptors.response.use(undefined, err => new Promise( (resolve, reject) => {
      if(err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.AUTH_LOGOUT()
        reject(new Error(err) )
      }
      resolve()
    }) )
  },
  methods: {
    ...mapActions("auth", [ "AUTH_LOGOUT" ] ),
  },
}
</script>


<style lang="scss">
  @import "~@/scss/index.scss";
  html {
    height: 100%;
    font-size: 62.5%; // 10px default => rem
    // box-sizing: border-box;
  }

  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    margin: 0;
    height: 100%;
    background-color: $_BACKGROUND_COLOR;
    font-family: "Quicksand-Regular";
    font-size: 1.6rem;
    color: $_PRIMARY_COLOR;
  }
</style>
