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

  body {
    margin: 0;
    min-height: 100vh;
    background-color: $_BACKGROUND_COLOR;
    font-family: "Quicksand-Regular";
    color: $_PRIMARY_COLOR;
  }
</style>
