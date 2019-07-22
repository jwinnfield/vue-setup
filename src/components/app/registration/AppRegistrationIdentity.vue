<template>
  <form class="forma--forms c--card" @submit.prevent="updateActiveIndex(1)">
    <v-input
      v-model="surname"
      v-validate="'required|alpha_spaces'"
      placeholder="Nom"
      name="Nom"
      :error="errors.first('Nom')"
    />
    <v-input
      v-model="name"
      v-validate="'required|alpha_spaces'"
      type="text"
      placeholder="Prénom"
      name="Prénom"
      :error="errors.first('Prénom')"
    />
    <v-input
      v-model="func"
      v-validate="'required|alpha_spaces'"
      type="text"
      name="Fonction"
      placeholder="Fonction"
      :error="errors.first('Fonction')"
    />
    <v-input
      v-model="email"
      v-validate="'required|email'"
      type="email"
      name="E-mail"
      placeholder="E-mail"
      :error="errors.first('E-mail')"
    />
    <v-input
      v-model="tel"
      v-validate="'numeric|min:8'"
      type="tel"
      name="Téléphone"
      placeholder="Téléphone"
      :error="errors.first('Téléphone')"
    />

    <button v-ripple.mouseover type="submit" class="c--btn forma--btn">
      Suivant
    </button>
  </form>
</template>

<script>
import VInput from "@/components/utils/VInput"
import { mapMutations } from "vuex"

export default {
  name: "AppRegistrationIdentity",
  components: {
    VInput,
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
@import "~@/scss/components/card.scss";

  .forma--forms {
    display: flex;
    flex-direction: column;
    align-items: center;
  width: 28rem;

    input:not(:first-child) {
      margin-top: 2rem;
    }

    .forma--btn {
      margin-top: 2rem;
    }
}
</style>
