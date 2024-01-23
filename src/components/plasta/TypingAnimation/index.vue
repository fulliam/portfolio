<template>
  <span ref="text">{{ animatedText }}</span>
</template>

<script>
export default {
  name: 'TypingAnimation',
  props: {
    text: {
      type: String,
      required: true,
    },
    animationSpeed: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      animatedText: '',
    };
  },
  methods: {
    animateText() {
      let index = 0;
      const interval = setInterval(() => {
        this.animatedText += this.text[index];
        index += 1;
        if (index === this.text.length) {
          clearInterval(interval);
        }
      }, this.animationSpeed);
    },
  },
  mounted() {
    this.animateText();
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/plasta/typewriter/index.scss';
</style>
