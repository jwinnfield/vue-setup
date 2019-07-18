<template>
  <form class="base-login" @submit.prevent="login(username, password)">
    <input v-model="username" type="text" placeholder="Login">
    <input v-model="password" type="text" placeholder="Mot de passe">
    <button type="submit">
      Connection
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "BaseLogin",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    ...mapActions("auth", [ "AUTH_REQUEST" ] ),
    login(username, password) {
      this.AUTH_REQUEST(username, password).then( ({ status }) => {
        if(status === 200) {
          this.$router.push("/")
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">

</style>
