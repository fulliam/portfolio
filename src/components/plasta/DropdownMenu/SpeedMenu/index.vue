<template>
  <div class="dropdown">
    <button
      class="dropdown-toggle"
      @click="toggleDropdown"
      @keyup.q="toggleDropdown"
    >
     ⚡️ Speed
    </button>
    <label class="dropdown-menu" :class="{ open: isOpen }" for="range">
      <input
        type="range"
        v-model="selectedXspeed"
        min="0.0001"
        max="0.1"
        step="0.02"
        @change="changeXspeed()"
        @input="changeXspeed()"
      />
      <input
        type="range"
        v-model="selectedYspeed"
        min="0.003"
        max="0.1"
        step="0.02"
        @change="changeYspeed()"
        @input="changeYspeed()"
        style="position: relative; left: 7%; top: 34%;"
      />
      <span style="position: relative; top: -55px; left: 35px;">Y</span>
      <span style="position: relative; top: -55px; right: 30px;">X</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SpeedDropdown',
  data() {
    return {
      selectedXspeed: 0.0001,
      selectedYspeed: 0.003,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['isOpen', 'speedChanged'],
  methods: {
    toggleDropdown() {
      this.$emit('isOpen', !this.isOpen);
    },
    changeXspeed() {
      this.$emit('speedChanged', { type: 'x', value: this.selectedXspeed });
    },
    changeYspeed() {
      this.$emit('speedChanged', { type: 'y', value: this.selectedYspeed });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/plasta/dropdownMenu/SpeedMenu/index.scss';
</style>
