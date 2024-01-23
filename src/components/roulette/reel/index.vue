<template>
    <div class="reel">
      <div class="reel-item" :key="currentItem" v-if="spinning">
        <div class="reel-item-content">{{ currentItem.emoji }}</div>
      </div>
      <div class="reel-item-result" v-else>
        <div class="reel-item-content-result">{{ currentItem.emoji }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CasinoReel',
  data() {
    return {
      currentItem: '🦕', // Текущий выбранный элемент
      spinning: false, // Флаг, который говорит, крутится ли блок или нет
      spinInterval: null, // Объявляем переменную spinInterval
    };
  },
  props: {
    spinDelay: {
      type: Number,
      default: 0, // Значение по умолчанию
    },
    items: {
      type: Array,
    },
  },
  methods: {
    startSpin() {
      this.spinning = true; // Устанавливаем флаг в значение "true"
      this.startIndex = Math.floor(Math.random() * this.items.length);
      this.spin(); // Запускаем анимацию кручения блока
    },
    spin() {
      const totalItems = this.items.length; // Общее количество элементов
      this.spinInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * totalItems); // Генерируем случайный индекс

        this.currentItem = this.items[randomIndex]; // Устанавливаем текущий элемент

        // Если пользователь остановил кручение, останавливаем анимацию
        if (!this.spinning) {
          this.stopSpin();
        }
      }, this.spinDelay);
    },
    stopSpin() {
      clearInterval(this.spinInterval);
      this.spinning = false; // Устанавливаем флаг в значение "false", чтобы остановить анимацию
    },
  },
};
</script>

<style lang="scss" scoped>
.reel {
      width: 100px;
      height: 100px;
      font-size: 18px;
      border-width: 2px;
      border-style: dashed;
      border-color: var(--color-text);
      border-spacing: 15px;
      justify-content: center;
      padding: 10px;
      margin: 5px;
      position: relative;
      overflow: hidden;
}

.reel-item,
.reel-item-result {
    font-size: 100px;
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500,
        0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000,
        0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
    font-family: "Sacramento", cursive;
    text-align: center;
    animation: blink 12s infinite;
    -webkit-animation: blink 12s infinite;
}

@-webkit-keyframes blink {
    20%,
    24%,
    55% {
      color: #111;
      text-shadow: none;
    }

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500,
        0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000,
        0 0 10px #ff8d00, 0 0 98px #ff0000;
      color: #fff6a9;
    }
}

@keyframes blink {
    20%,
    24%,
    55% {
      color: #111;
      text-shadow: none;
    }

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500,
        0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 10px #ff0000,
        0 0 10px #ff8d00, 0 0 28px #ff0000;
      color: #fff6a9;
    }
}

@keyframes reel-item-spin {
    0% {
      transform: translateY(-150%);
    }
    25% {
      transform: translateY(-75%);
    }
    50% {
      transform: translateY(0%);
    }
    75% {
      transform: translateY(75%);
    }
    100% {
      transform: translateY(150%);
    }
}

.reel-item {
    position: absolute;
    animation-duration: 0.3s;
    animation-name: reel-item-spin;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}

.reel-item-content {
    position: relative;
    top: 100%;
}
</style>
