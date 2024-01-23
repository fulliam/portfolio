<template>
  <div class="content-wrapper">
    <p class="bop-text">Комбинация: <span>{{ combo }}</span></p>
    <div class="reel-container">
      <div class="reel1">
        <CasinoReel ref="reel1" :spinDelay="300" :items="reel1Items" />
      </div>
      <div class="reel2">
        <CasinoReel ref="reel2" :spinDelay="300" :items="reel2Items" />
      </div>
      <div class="reel3">
        <CasinoReel ref="reel3" :spinDelay="300" :items="reel3Items" />
      </div>
      <div class="reel4">
        <CasinoReel ref="reel4" :spinDelay="300" :items="reel4Items" />
      </div>
      <div class="reel5">
        <CasinoReel ref="reel5" :spinDelay="300" :items="reel5Items" />
      </div>
    </div>
    <div class="reel-container">
      <div class="reel6">
        <CasinoReel ref="reel6" :spinDelay="300" :items="reel6Items" />
      </div>
      <div class="reel7">
        <CasinoReel ref="reel7" :spinDelay="300" :items="reel7Items" />
      </div>
      <div class="reel8">
        <CasinoReel ref="reel8" :spinDelay="300" :items="reel8Items" />
      </div>
      <div class="reel9">
        <CasinoReel ref="reel9" :spinDelay="300" :items="reel9Items" />
      </div>
      <div class="reel10">
        <CasinoReel ref="reel10" :spinDelay="300" :items="reel10Items" />
      </div>
    </div>
    <div class="select-action">
      <button class="button-85" @click="startSpin">
        <span>
          Старт
        </span>
      </button>
        <div style="padding: 10px;"></div>
      <button class="button-85" @click="stopSpin">
        <span>
          Стоп
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import CasinoReel from '../../components/roulette/reel/index.vue';

export default {
  name: 'RoulettePage',
  data() {
    return {
      combo: '000 000 00 00',
      reel1Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel2Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel3Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel4Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel5Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel6Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel7Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel8Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel9Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
      reel10Items: [
        { id: 0, emoji: '✨' },
        { id: 1, emoji: '🦄' },
        { id: 2, emoji: '💀' },
        { id: 3, emoji: '💩' },
        { id: 4, emoji: '👑' },
        { id: 5, emoji: '⚡️' },
        { id: 6, emoji: '🦐' },
        { id: 7, emoji: '🐍' },
        { id: 8, emoji: '🦕' },
        { id: 9, emoji: '🤖' },
      ],
    };
  },
  components: {
    CasinoReel,
  },
  methods: {
    startSpin() {
      this.$refs.reel1.startSpin();
      this.$refs.reel2.startSpin();
      this.$refs.reel3.startSpin();
      this.$refs.reel4.startSpin();
      this.$refs.reel5.startSpin();
      this.$refs.reel6.startSpin();
      this.$refs.reel7.startSpin();
      this.$refs.reel8.startSpin();
      this.$refs.reel9.startSpin();
      this.$refs.reel10.startSpin();
    },
    stopSpin() {
      this.$refs.reel1.stopSpin();
      this.$refs.reel2.stopSpin();
      this.$refs.reel3.stopSpin();
      this.$refs.reel4.stopSpin();
      this.$refs.reel5.stopSpin();
      this.$refs.reel6.stopSpin();
      this.$refs.reel7.stopSpin();
      this.$refs.reel8.stopSpin();
      this.$refs.reel9.stopSpin();
      this.$refs.reel10.stopSpin();
      this.checkCombination();
    },
    checkCombination() {
      const reel1CurrentItem = this.$refs.reel1.currentItem;
      const reel2CurrentItem = this.$refs.reel2.currentItem;
      const reel3CurrentItem = this.$refs.reel3.currentItem;
      const reel4CurrentItem = this.$refs.reel4.currentItem;
      const reel5CurrentItem = this.$refs.reel5.currentItem;
      const reel6CurrentItem = this.$refs.reel6.currentItem;
      const reel7CurrentItem = this.$refs.reel7.currentItem;
      const reel8CurrentItem = this.$refs.reel8.currentItem;
      const reel9CurrentItem = this.$refs.reel9.currentItem;
      const reel10CurrentItem = this.$refs.reel10.currentItem;
      const combination = `${reel1CurrentItem.id}${reel2CurrentItem.id}${reel3CurrentItem.id}
      ${reel4CurrentItem.id}${reel5CurrentItem.id}${reel6CurrentItem.id}
      ${reel7CurrentItem.id}${reel8CurrentItem.id}
      ${reel9CurrentItem.id}${reel10CurrentItem.id}`;
      this.combo = combination;
    },
  },
};
</script>

<style lang="scss" scoped>
.reel-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

/* CSS */
.button-85 {
  padding: 0;
  border: none;
  outline: none;
  color: var(--color-text);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-size: 16px;
  font-family: 'Press Start 2P';
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bg);
  left: 0;
  top: 0;
  border-radius: 10px;
}

@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");

.bop-text {
  font-size: 24px;
  padding: 0;
  color: white;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1),
    0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1),
    -0.03em 0 0 rgba(0, 0, 0, 1);
}

span {
  color: orange;
  background: #1e1e1e;
  padding: 10px;
  border-radius: 10px;
}

.select-action {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 40px;
}
</style>
