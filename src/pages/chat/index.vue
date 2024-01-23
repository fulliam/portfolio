<template>
    <div class="">
        <slot></slot>
        <UserChat />
    </div>
</template>

<script>
import UserChat from '../../components/chat/index.vue';

export default {
  name: 'ChatPage',
  components: {
    UserChat,
  },
};
</script>
