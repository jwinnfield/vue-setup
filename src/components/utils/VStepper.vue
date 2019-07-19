<template>
  <div class="stepper">
    <ul class="progress-bar">
      <li v-for="({header, title}, index) in steps" :key="title" class="progress-bar-block">
        <div class="progress-bar-step">
          <p v-ripple>
            {{ header }}
          </p>
          <h6>{{ title }}</h6>
        </div>
        <hr v-if="index !== steps.length -1">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VStepper",
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/index.scss";

.stepper {
  .progress-bar {
    display: flex;
    width: 100%;
    max-width: 1280px;
    padding: 0;
    margin: 50px auto 60px auto;

    .progress-bar-block {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 25%;
      list-style-type: none;

      hr {
        width: 100%;
        height: 3px;
        position: absolute;
        top: 20px;
        background-color: $_SECONDARY_COLOR;
        transform: translateX(50%);
        border: none;
        z-index: -1;
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
          height: 50px;
          width: 50px;
          margin: 0 0 5px 0;
          font-size: 26px;
          font-family: "Quicksand-Bold";
          color: $_SECONDARY_COLOR;
          border: 3px solid $_SECONDARY_COLOR;
          border-radius: 50%;
          background-color: $_BACKGROUND_COLOR;
          cursor: pointer;
        }

        h6 {
          margin: 0;
          font-size: 14px;
          color: $_SECONDARY_COLOR;
          text-align: center;
        }
      }
    }
  }
}
</style>
