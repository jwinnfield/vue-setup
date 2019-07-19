<template>
  <div class="v-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VCard",
}
</script>

<style lang="scss" scoped>
@import "~@/scss/index.scss";

.v-card {
  width: auto;
  max-width: 62rem;
  height: auto;
  padding: 2rem;
  border-radius: 2.5rem;
  border: 0.2rem solid $_SECONDARY_COLOR;
}
</style>
