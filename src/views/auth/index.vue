<template>
    <button
      class="logout-button"
      v-if="isSignedIn"
      @click="logout"
    >
      EXIT
    </button>

  <div v-if="isLogout">

  </div>

  <AuthModal v-if="!isSignedIn">
    <auth-form />
  </AuthModal>
</template>

<script>
import { inject } from 'vue';
import AuthModal from '../../components/auth/modal/index.vue';
import AuthForm from '../../components/auth/form/index.vue';

export default {
  name: 'AuthView',
  components: {
    AuthModal,
    AuthForm,
  },
  data() {
    return {
      isLogout: false,
    };
  },
  setup() {
    const isSignedIn = inject('isSignedIn');
    return {
      isSignedIn,
    };
  },
  emits: ['signedOut'],
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.$emit('signedOut');
      this.$router.push('/chat');
      this.isSignedIn = false;
    },
  },
  created() {
    this.$mitt.on('signedIn', () => {
      this.isSignedIn = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.logout-button {
  --color-text: brown;

  cursor: pointer;
  content: "Auth";
  z-index: 99;
  color: var(--color-text);
  background-color: var(--bg);
  width: 52px;
  height: 32px;
  border-radius: 20px;
  border: 2px solid var(--color-text);
  margin: 10px;
  top: 50%;
  left: 0;
  transition: 0.5s all;
  position: absolute;

  &:hover {
    color: lighten(brown, 20%);
    border-color: lighten(brown, 20%);
  }
}
</style>
