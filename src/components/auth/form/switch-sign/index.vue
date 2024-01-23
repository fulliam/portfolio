<template>
  <div
    class="toggle-mode"
    @click="toggleMode"
    @keyup.page-down="toggleMode"
    role="button"
    tabindex="0"
  >
    <label for="checkbox-toggle" class="switch" >
      <input
        type="checkbox"
        id="checkbox-toggle"
        v-model="isAuthModeInternal"
      />
      <span class="slider">
        <div class="fish">
          <div class="body"></div>
          <div class="eye"></div>
          <div class="tail"></div>
        </div>
      </span>

      <span class="wave"></span>

      <div class="boat">
        <div class="bottom"></div>
        <div class="mast"></div>
        <div class="rectangle-sm"></div>
        <div class="rectangle-lg"></div>
      </div>
    </label>

    <svg class="wave-animation" viewBox="0 0 180 100" width="100%">
      <filter width="100%" height="100%" x="0%" y="0%" id="wave">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.000001"
          id="turbulence"
          numOctaves="1"
          result="turbulence"
        >
          <animate
            id="noiseAnimate"
            attributeName="baseFrequency"
            values="0.095,0.000001;0.025,0.2;"
            dur="1.4s"
            repeatCount="indefinite"
          >
          </animate>
        </feTurbulence>
        <feDisplacementMap
          in="SourceGraphic"
          in2="warpOffset"
          scale="6"
          dy="100px"
          xChannelSelector="R"
          yChannelSelector="G"
        >
        </feDisplacementMap>
        <feGaussianBlur stdDeviation="0.5" />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SwitchMode',
  props: {
    isAuthMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:isAuthMode'],
  data() {
    return {
      isAuthModeInternal: this.isAuthMode,
    };
  },
  methods: {
    toggleMode() {
      this.$emit('update:isAuthMode', this.isAuthModeInternal);
    },
  },
};
</script>
