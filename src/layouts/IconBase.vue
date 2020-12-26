<template>
  <svg :width="width" :height="height">
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 30
    },
    height: {
      type: [Number, String],
      default: 30
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>
