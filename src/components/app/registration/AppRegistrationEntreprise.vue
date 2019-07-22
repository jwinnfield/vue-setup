<template>
  <form class="forma--forms c--card" @submit.prevent="updateActiveIndex(2)">
    <div class="forma--block-containers">
      <v-container title="Informations administratives" class="forma--container">
        <v-input
          v-model="raisonSocial"
          v-validate="'required'"
          placeholder="Raison sociale"
          name="Raison sociale"
          :error="errors.first('Raison sociale')"
        />
        <v-input
          v-model="siren"
          v-validate="'numeric|min:9'"
          placeholder="Siren"
          name="Siren"
          :error="errors.first('Siren')"
        />
        <v-input
          v-model="siret"
          v-validate="'required'"
          placeholder="Siret"
          name="Siret"
          :error="errors.first('Siret')"
        />
        <v-input
          v-model="APEcode"
          v-validate="'required'"
          placeholder="Code APE"
          name="Code APE"
          :error="errors.first('Code APE')"
        />
      </v-container>
      <v-container title="Coordonnées" class="forma--container">
        <v-input
          v-model="contry"
          v-validate="'required'"
          placeholder="Pays"
          name="Pays"
          :error="errors.first('Pays')"
        />
        <v-input
          v-model="address"
          v-validate="'required'"
          placeholder="Adresse"
          name="Adresse"
          :error="errors.first('Adresse')"
        />
        <v-input
          v-model="complement"
          v-validate="'required'"
          placeholder="Complément"
          name="Complément"
          :error="errors.first('Complément')"
        />
        <div class="forma--inputs-line">
          <v-input
            v-model="postal"
            v-validate="'required'"
            placeholder="Code postale"
            name="Code postale"
            :error="errors.first('Code postale')"
            class="forma--inputs-line-v-input"
          />
          <v-input
            v-model="city"
            v-validate="'required'"
            placeholder="City"
            name="City"
            :error="errors.first('City')"
            class="forma--inputs-line-v-input"
          />
        </div>
      </v-container>
    </div>
    <button class="c--btn" type="submit">
      Suivant
    </button>
  </form>
</template>

<script>
import VContainer from "@/components/utils/VContainer"
import VInput from "@/components/utils/VInput"
import { mapMutations } from "vuex"

export default {
  name: "AppRegistrationEntreprise",
  components: {
    VContainer,
    VInput,
  },
  data() {
    return {
      raisonSocial: "",
      siren: "",
      siret: "",
      APEcode: "",
      contry: "",
      address: "",
      complement: "",
      postal: "",
      city: "",
    }
  },
  methods: {
    ...mapMutations("stepper", [ "updateActiveIndex" ] ),
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/components/card.scss";
@import "~@/scss/components/btn.scss";

.forma--forms {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 7rem;

  .forma--block-containers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .forma--container {
      min-width: 30rem;

      .forma--inputs-line {
        display: flex;
        justify-content: space-between;
        width: 26.5rem;

        .forma--inputs-line-v-input {
          width: 49%;
        }
      }
    }
  }
}
</style>
