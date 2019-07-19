<template>
  <v-card>
    <form class="forms" @submit.prevent="updateActiveIndex(1)">
      <v-container title="Informations administratives">
        <input type="text" class="input" placeholder="Raison sociale" />
        <input type="text" class="input" placeholder="Siren" />
        <input type="text" class="input" placeholder="Siret" />
        <input type="text" class="input" placeholder="Code APE" />
      </v-container>
      <v-container title="Informations administratives">
        <input type="text" class="input" placeholder="Raison sociale" />
        <input type="text" class="input" placeholder="Siren" />
        <input type="text" class="input" placeholder="Siret" />
        <input type="text" class="input" placeholder="Code APE" />
      </v-container>
      <button class="btn" type="submit">
        Suivant
      </button>
    </form>
  </v-card>
</template>

<script>
import VCard from "@/components/utils/VCard"
import VContainer from "@/components/utils/VContainer"
import { mapMutations } from "vuex"

export default {
  name: "AppRegistrationEntreprise",
  components: {
    VCard,
    VContainer,
  },
  methods: {
    ...mapMutations("stepper", [ "updateActiveIndex" ] ),
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/components/btn.scss";
@import "~@/scss/components/input.scss";

.forms {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
