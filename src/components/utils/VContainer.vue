<template>
  <section>
    <h3 class="title">
      {{ title }}
    </h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "VContainer",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
section {
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		margin-bottom: 15px;
		margin-top: 0;
	}
}
</style>
