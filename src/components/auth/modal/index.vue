<template>
  <button
    class="auth-modal__button-show"
    @click="showModal = !showModal"
  >
    AUTH
  </button>
  <div
    class="auth-modal"
    v-if="showModal"
  >
    <div class="auth-modal__dialog">
      <div class="auth-modal__content">
        <div class="auth-modal__header">
          <button
            class="auth-modal__button-close"
            @click="showModal = false"
          >
          </button>
        </div>
        <div class="auth-modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthModal',
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/auth/modal/index.scss';
</style>
