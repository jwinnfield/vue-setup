<template>
  <div id="app">
    <base-header />
    <router-view />
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader"
import BaseFooter from "@/components/BaseFooter"
import { mapActions } from "vuex"

export default {
  components: {
    BaseHeader,
    BaseFooter,
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
  }

  #app {
    background-color: $_BACKGROUND_COLOR;
  }
</style>
