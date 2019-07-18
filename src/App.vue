<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
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

</style>
