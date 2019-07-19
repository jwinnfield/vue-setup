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
  max-width: 620px;
  height: auto;
  padding: 20px;
  border-radius: 25px;
  border: 2px solid $_SECONDARY_COLOR;
}
</style>
