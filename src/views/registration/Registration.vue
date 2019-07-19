<template>
  <v-stepper :steps="steps" />
</template>

<script>
import VStepper from "@/components/utils/VStepper"

export default {
  name: "Registration",
  components: {
    VStepper,
  },
  data() {
    return {
      index: 0,
      steps: [
        {
          header: "1",
          title: "VOTRE IDENTITÉ",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/app/registration/AppRegistrationIdentity"),
        },
        {
          header: "2",
          title: "VOTRE ENTREPRISE",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/utils/VCard"),
        },
        {
          header: "3",
          title: "CRÉATION DE COMPTE",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/utils/VCard"),
        },
        {
          header: "4",
          title: "VALIDATION",
          component: () => import(/* webpackChunkName: "registration" */ "@/components/utils/VCard"),
        },
      ],
    }
  },
}
</script>

