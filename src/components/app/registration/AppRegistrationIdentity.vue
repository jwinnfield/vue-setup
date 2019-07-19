<template>
  <v-card class="forma--identity">
    <form class="forma--forms" @submit.prevent="updateActiveIndex(1)">
      <div class="forma--inputs-block">
        <input
          v-model="surname"
          type="text"
          placeholder="Nom"
          class="c--input"
        />
        <input
          v-model="name"
          type="text"
          placeholder="Prénom"
          class="c--input"
        />
        <input
          v-model="func"
          type="text"
          placeholder="Fonction"
          class="c--input"
        />
        <input
          v-model="email"
          type="email"
          placeholder="E-mail"
          class="c--input"
        />
        <input
          v-model="tel"
          placeholder="Téléphone"
          class="c--input"
          type="tel"
        />
      </div>
      <button v-ripple.mouseover type="submit" class="c--btn">
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

.forma--identity {
  width: 28rem;

  .forma--forms {
    display: flex;
    flex-direction: column;
    align-items: center;

    .forma--inputs-block {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;

      input:not(:first-child) {
        margin-top: 2rem;
      }
    }
  }
}
</style>
