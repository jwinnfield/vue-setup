<template>
  <div class="forma--v-radio">
    <h3>{{ title }}</h3>
    <div class="forma--options">
      <label v-for="({radioValue, label}, index) in items" :key="`${index}_${title}`">
        <input
          :id="`${index}_${title}`"
          v-model="newValue"
          type="radio"
          :value="radioValue"
          @change="$emit('input', newValue)"
        />
        <span class="farma--input-box">
          <span :class="{'farma--input-inner': value === radioValue}"></span>
        </span>
        <span :for="`${index}_${title}`">{{ label }}</span>
      </label>
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
  name: "VRadio",
  props: {
    value: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      newValue: this.value,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/index.scss";

.forma--v-radio {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28.3rem;
  margin-bottom: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 300;
  }

  .forma--options {
    display: flex;
    justify-content: space-evenly;
    padding: 0 3rem;
    width: 100%;
    box-sizing: border-box;

    label {
      display: flex;

      .farma--input-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
        width: 1.8rem;
        height: 1.8rem;
        border: 0.1rem solid #ddd;
        border-radius: 100%;
        background: #fff;

        .farma--input-inner {
          display: block;
          width: 1.2rem;
          height: 1.2rem;
          background-color: $_SECONDARY_COLOR;
          border-radius: 100%;
          transition: all 0.2s ease;
        }
      }

        input {
          display: none;
        }
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
}
</style>
