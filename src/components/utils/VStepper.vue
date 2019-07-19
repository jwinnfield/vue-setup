<template>
  <div class="stepper">
    <ul class="progress-bar">
      <li
        v-for="({title, header}, index) in steps"
        :key="title"
        class="progress-bar-block"
        @click="$emit('input', index)"
      >
        <div class="progress-bar-step">
          <p v-ripple :class="{active: index === value}">
            {{ header }}
          </p>
          <h6>{{ title }}</h6>
        </div>
        <hr v-if="index !== steps.length -1" :class="{active: index === value}">
      </li>
    </ul>
    <component :is="component" />
  </div>
</template>

<script>
export default {
  name: "VStepper",
  props: {
    value: {
      type: Number,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
  },
  computed: {
    component() {
      return this.steps[this.value].component
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/index.scss";

.stepper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .progress-bar {
    display: flex;
    width: 100%;
    max-width: 128rem;
    padding: 0;
    margin: 5rem auto 6rem auto;

    .progress-bar-block {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 25%;
      list-style-type: none;

      hr {
        position: absolute;
        top: 2rem;
        z-index: -1;
        width: 100%;
        height: 0.3rem;
        border: none;
        background-color: $_SECONDARY_COLOR;
        transform: translateX(50%);
        transition: 0.5s all;

        &.active {
          background-color: $_PRIMARY_COLOR
        }
      }

      .progress-bar-step {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 5rem;
          width: 5rem;
          margin: 0 0 0.5rem 0;
          font-size: 2.6rem;
          font-family: "Quicksand-Bold";
          color: $_SECONDARY_COLOR;
          border: 0.3rem solid $_SECONDARY_COLOR;
          border-radius: 50%;
          background-color: $_BACKGROUND_COLOR;
          cursor: pointer;
          transition: 0.5s all;

          &.active {
            color: $_PRIMARY_COLOR;
            background-color: $_SECONDARY_COLOR;
            border: 0.3rem solid $_PRIMARY_COLOR;
          }
        }

        h6 {
          margin: 0;
          font-size: 1.4rem;
          color: $_SECONDARY_COLOR;
          text-align: center;
        }
      }
    }
  }
}
</style>
