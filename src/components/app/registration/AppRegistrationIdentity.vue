<template>
  <v-card class="identity">
    <form class="forms" @submit.prevent="updateActiveIndex(1)">
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
          placeholder="Téléphone"
          class="input"
          type="tel"
        />
      </div>
      <button v-ripple.mouseover type="submit" class="btn">
        Suivant
      </button>
    </form>
  </v-card>
</template>

<script>
import VCard from "@/components/utils/VCard"
import { mapMutations } from "vuex"

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
  methods: {
    ...mapMutations("stepper", [ "updateActiveIndex" ] ),
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
