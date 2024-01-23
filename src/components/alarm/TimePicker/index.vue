<template>
    <div class="blur list" @wheel.prevent="scrollNumbers"></div>
    <div class="cylinder">
      <div class="numbersPane" :style="{ transform: 'rotateX(' + rotate + 'deg)' }">
        <div v-for="number in numbers" :key="number" class="number rotate"
             :style="[ number === selectedNumber ?
               {'border': '3px solid #cacf30',
                'border-left': 'none',
                'transition': 'all 1s',
                'color': 'rgb(220, 19, 116)',
                'box-shadow': '10px 10px 5px 0px rgba(0, 0, 0, 0.5)' } : {},
               { transform: 'rotateX(' + (number * rotationStep)
                + 'deg) translateZ(' + (numbersCount * 10) + 'px)' },
               { 'z-index': number === selectedNumber ? 1 : 'auto' }
             ]">
          {{ number }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TimePicker',
  props: {
    numbersCount: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      numbers: Array.from({ length: this.numbersCount }, (_, i) => i),
      rotate: 0,
      rolling: false,
      internalSelectedNumber: 0,
    };
  },

  emits: ['update:modelValue'],

  methods: {
    scrollNumbers(e) {
      e.preventDefault();
      const rotationStep = 360 / this.numbersCount;
      this.rotate += (e.deltaY > 0 ? 1 : -1) * rotationStep;

      const normalisedRotation = this.rotate % 360;
      const selectedIndex = Math.round(normalisedRotation / (360 / this.numbersCount));
      this.internalSelectedNumber = ((this.numbersCount - selectedIndex)
          % this.numbersCount) % this.numbersCount;
      this.$emit('update:modelValue', this.internalSelectedNumber);
    },
  },

  computed: {
    selectedNumber() {
      return this.internalSelectedNumber;
    },
    rotationStep() {
      return 360 / this.numbersCount;
    },
  },
};
</script>

<style lang="scss">
  .blur {
    width: 300px;
    height: 300px;
    position: absolute;
    transition: 0.3s ease-out;
    border-radius: 50%;
    z-index: 2;

    &.list {
      filter: blur(7px);
      transform: scale(1.05);
      box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5),
        -8px -8px 20px rgba(255, 255, 255, 0.2), inset 8px 8px 20px rgba(0, 0, 0, 1),
        inset -8px -8px 20px rgba(255, 255, 255, 0.2);
    }
  }

  .cylinder {
    width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 300px;
    background: #40505d;
  }

  .top,
  .bottom {
    width: 100%;
    height: 50px;
    background-color: #ccc;
    position: absolute;
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }

  .numbersPane {
    width: 100%;
    height: 200px;
    position: absolute;
    perspective: -100px;
    top: 40px;
    transform-style: preserve-3d;
    transition: all 1s;
    overflow: visible;
  }

  .number {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    background: #ddd;
    backface-visibility: hidden;
    text-align: center;
    font-size: 32px;
    font-family: 'Press Start 2P';
    color: #e7bd3e;
    background: rgba(0, 0, 0, 0);
    text-shadow: rgba(245, 120, 11, 0.69) 7px -1px;
    -webkit-text-stroke: .07em rgba(0,0,0,.5);
  }

  .rotate {
    transform-origin: center center -100px;
  }
</style>
