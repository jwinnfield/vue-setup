<template>
  <div class="farma--v-input" :class="classMode">
    <div class="farma--form" :class="classMode">
      <label :for="key" :class="classMode">{{ label }}</label>
      <input
        :id="key"
        :value="value"
        :type="type"
        class="farma--input"
        :class="classMode"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div class="farma--block-error-text">
      <p v-if="error" class="farma--error-text">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    value: {
      type: [ String, Number ],
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "",
    },
  },
  computed: {
    key() {
      return this.placeholder ? this.placeholder : this.label
    },
    classMode() {
      return {
        "forma--column": this.mode === "column",
        "farma--row": this.mode === "row",
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/index.scss";

.farma--v-input {
  position: relative;
  width: 26.5rem;
  box-sizing: border-box;

  .farma--form {
    display: flex;
    width: 100%;

    label {
      &.forma--column {
        margin-bottom: 2rem;
        text-align: center;
      }

      &.farma--row {
        width: inherit;
        padding: 0 1rem;
        text-align: center;
        font-family: "Quicksand-Light";
      }
    }

    .farma--input {
      padding: 0.8rem;
      width: 100%;
      color: $_INPUT_COLOR;
      font-size: 1.4rem;
      background: $_INPUT_BACKGROUND_COLOR;
      border-radius: 5rem;
      border: none;
      outline: none;

      &.farma--row {
        width: 6.4rem;
      }
    }

    &.forma--column {
      flex-direction: column;
    }
  }

  .farma--block-error-text {
    margin-bottom: 2rem;

    .farma--error-text {
      margin: 0;
      font-size: 1.3rem;
      width: 100%;
    }
  }

  &.forma--column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &.farma--row {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    align-items: center;
    width: 29.7rem;
  }
}
</style>
