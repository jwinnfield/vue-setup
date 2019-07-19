<template>
  <v-card class="identity">
    <form class="forms" @submit.prevent="login(username, password)">
      <div class="inputs-block">
        <input
          v-model="surname"
          type="text"
          placeholder="Nom"
          class="input"
        />
        <input
          v-model="name"
          type="text"
          placeholder="Prénom"
          class="input"
        />
        <input
          v-model="func"
          type="text"
          placeholder="Fonction"
          class="input"
        />
        <input
          v-model="email"
          type="email"
          placeholder="E-mail"
          class="input"
        />
        <input
          v-model="tel"
          type="tel"
          placeholder="Téléphone"
          class="input"
        />
      </div>
      <button type="submit" class="btn">
        Suivant
      </button>
    </form>
  </v-card>
</template>

<script>
import VCard from "@/components/utils/VCard"

export default {
  name: "AppRegistrationIdentity",
  components: {
    VCard,
  },
  data() {
    return {
      surname: "",
      name: "",
      func: "",
      email: "",
      tel: "",
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/components/btn.scss";
@import "~@/scss/components/input.scss";

.identity {
  .forms {
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputs-block {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      input:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
}
</style>
