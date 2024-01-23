<template>
    <div v-if="visible" class="modal">
      <div class="modal-content">
        <p style="font-size: 90px; color: rgb(185, 185, 58);">Alarm!</p>
        <div class="container">
          <div class="bg"></div>
          <div
            class="button"
            @click="handleConfirm"
            @keydown.enter="handleConfirm"
          >
            <i style="font-size: 40px; color: rgb(68, 165, 68);">✔</i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['confirm'],

  methods: {
    handleConfirm() {
      this.$emit('confirm');
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  padding-top: 20%;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background-color: #4a497cf7;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 40%;
  border-radius: 40px;
}

$pink: #e0597b;

.bg,
.button {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #888;
}

.container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.bg {
  animation: pulse 1.2s ease infinite;
  background: $pink;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  border: none;
  background: $pink;
  background-size: 18px;
  cursor: pointer;
  outline: none;
  border: 1px solid #888;
}

@keyframes pulse {
  0% {
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
