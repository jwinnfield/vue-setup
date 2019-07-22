<template>
  <v-stepper :value="activeIndex" :steps="steps" @input="updateActiveIndex($event)" />
</template>

<script>
import VStepper from "@/components/utils/VStepper"
import { mapState, mapMutations } from "vuex"

export default {
  name: "Registration",
  components: {
    VStepper,
  },
  data() {
    return {
      steps: [
        {
          header: "1",
          title: "VOTRE IDENTITÉ",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/app/registration/AppRegistrationIdentity"),
        },
        {
          header: "2",
          title: "VOTRE ENTREPRISE",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/app/registration/AppRegistrationEntreprise"),
        },
        {
          header: "3",
          title: "CRÉATION DE COMPTE",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/app/registration/AppRegistrationEffectif"),
        },
        {
          header: "4",
          title: "VALIDATION",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/app/registration/AppRegistrationEntreprise"),
        },
      ],
    }
  },
  computed: {
    ...mapState("stepper", [ "activeIndex" ] ),
  },
  methods: {
    ...mapMutations("stepper", [ "updateActiveIndex" ] ),
  },
}
</script>

