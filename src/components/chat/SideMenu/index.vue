<template>
    <div class="side-menu-chat">
      <div class="app-menu-chat">
        <div class="side-menu-chat-nav">
          <slot></slot>
        </div>
      </div>
    </div>
    <button class="side-menu-chat-icon">TAP</button>
</template>

<script>
export default {
  name: 'SideMenuChat',
  methods: {
    toggleClassMenu() {
      this.myChatMenu.classList.add('side-menu-chat--animatable');
      if (!this.myChatMenu.classList.contains('side-menu-chat--visible')) {
        this.myChatMenu.classList.add('side-menu-chat--visible');
      } else {
        this.myChatMenu.classList.remove('side-menu-chat--visible');
      }
    },
    OnTransitionEnd() {
      this.myChatMenu.classList.remove('side-menu-chat--animatable');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.myChatMenu = document.querySelector('.side-menu-chat');
      this.oppChatMenu = document.querySelector('.side-menu-chat-icon');
      this.myChatMenu.addEventListener('transitionend', this.OnTransitionEnd, false);
      this.oppChatMenu.addEventListener('click', this.toggleClassMenu, false);
      this.myChatMenu.addEventListener('click', this.toggleClassMenu, false);
    });
  },
};
</script>
