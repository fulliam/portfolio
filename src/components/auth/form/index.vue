<template>
  <SwitchMode :isAuthMode="isAuthMode" @update:isAuthMode="updateAuthMode"/>
  <div style="text-align: start;">
    <span
      style="color: var(--color-text);
             font-size: 16px;
             position: relative;
             background: #c33d8e85;
             top: 20px;
             padding: 5px;
             margin: 10px;
             white-space: nowrap;
             border: 3px solid var(--color-text);
             border-radius: 40px;"
    >
      <span v-show="isAuthMode">
        ...ещё нет аккаунта?
      </span>
      <span v-show="!isAuthMode">
        ....уже есть аккаунт?
      </span>
      <span style="font-size: 40px;
                   position: absolute;
                   left: 158px;
                   top: 0;"
      >
        &#11149;
      </span>
    </span>
  </div>
  <SignIn v-show="isAuthMode"/>
  <SignUp v-show="!isAuthMode"/>
</template>

<script>
import SignIn from './sign-in/index.vue';
import SignUp from './sign-up/index.vue';
import SwitchMode from './switch-sign/index.vue';

export default {
  name: 'AuthForm',
  components: {
    SignIn,
    SignUp,
    SwitchMode,
  },
  data() {
    return {
      isAuthMode: true,
    };
  },
  methods: {
    updateAuthMode(newMode) {
      this.isAuthMode = !newMode;
    },
  },
};
</script>
