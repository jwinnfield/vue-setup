<template>
  <form class="forma--forms c--card" @submit.prevent="updateActiveIndex(3)">
    <v-container title="Informations sur les effectifs">
      <div class="forma--forms-blocks">
        <div class="forma--forms-blocks-left">
          <v-input
            v-model="legalIdentity"
            v-validate="'required|numeric'"
            type="number"
            label="Combien avez-vous d’entités juridiquement indépendantes ?"
            name="legalIdentity"
            :error="errors.first('legalIdentity')"
            mode="column"
          />

          <v-input
            v-model="numberEmployees"
            v-validate="'required|numeric'"
            type="number"
            label="Nombre de salariés"
            name="Nombre de salariés"
            :error="errors.first('Nombre de salariés')"
            mode="row"
          />

          <v-input
            v-model="numberManagers"
            v-validate="'required|numeric'"
            type="number"
            label="Nombre de managers"
            name="Nombre de managers"
            :error="errors.first('Nombre de managers')"
            mode="row"
          />

          <v-input
            v-model="numberRH"
            v-validate="'required|numeric'"
            type="number"
            label="Nombre de RH"
            name="Nombre de RH"
            :error="errors.first('Nombre de RH')"
            mode="row"
          />

          <v-input
            v-model="numberRH"
            v-validate="'required|numeric'"
            type="number"
            label="Nombre de RH"
            name="Nombre de RH"
            :error="errors.first('Nombre de RH')"
            mode="row"
          />
        </div>

        <div class="forma--forms-blocks-right">
          <v-input
            v-model="numberInstitution"
            v-validate="'required|numeric'"
            type="number"
            label="Combien avez-vous d’établissements ?"
            name="legalIdentity"
            :error="errors.first('legalIdentity')"
            mode="column"
          />

          <v-radio
            v-model="securityManager"
            v-validate="'required'"
            :items="itemsYesNo"
            name="securityManager"
            :error="errors.first('securityManager')"
            title="Avez-vous un responsable sécurité ?"
          />

          <v-radio
            v-model="accessEmployees"
            v-validate="'required'"
            :items="itemsYesNo"
            name="accessEmployees"
            :error="errors.first('accessEmployees')"
            title="Souhaitez-vous donner un accès a vos collaborateurs ?"
          />
        </div>
      </div>
    </v-container>

    <button v-ripple.mouseover type="submit" class="c--btn forma--btn">
      Suivant
    </button>
  </form>
</template>

<script>
import VContainer from "@/components/utils/VContainer"
import VInput from "@/components/utils/VInput"
import VRadio from "@/components/utils/VRadio"
import { mapMutations } from "vuex"

export default {
  name: "AppRegistrationIdentity",
  components: {
    VContainer,
    VInput,
    VRadio,
  },
  data() {
    return {
      numberEmployees: 0,
      numberManagers: 0,
      numberRH: 0,
      legalIdentity: 0,
      numberInstitution: 0,
      securityManager: "",
      accessEmployees: "",
      itemsYesNo: [
        {
          radioValue: "oui",
          label: "OUI",
        },
        {
          radioValue: "non",
          label: "NON",
        },
      ],
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
  margin: 0 7rem;

  .forma--forms-blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .forma--forms-blocks-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .forma--forms-blocks-right,
    .forma--forms-blocks-left {
      padding: 0 1rem;
    }
  }
}
</style>
