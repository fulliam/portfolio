<template>
    <SideMenuChat>
      <p>a11 USERS:</p>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
        >
        <button
          style="width: 80%"
          class="double-border-button"
          @click="startChat(user.id)"
          v-if="user.id.toString() !== sender_id"

        >
          {{ user.username }}
        </button>
        </li>
      </ul>
    </SideMenuChat>
    <AuthView @signedOut="updateAuthState" />
    <div v-for="user in users" :key="user.id">
      <b v-show="user.id === selectedUser" style="font-size: 40px;">
        CHAT WITH: {{ user.username }}
      </b>
    </div>

    <div
      class="chat-helper"
      v-if="selectedUser === undefined  || selectedUser === null"
    >
      <span v-show="isSignedIn">
        Выберите собеседника &#10233;
      </span>
    </div>

    <div
      class="chat-helper"
      v-if="!isSignedIn"
      style="left: 20%;"
    >
      <span>
        &#10232; Авторизируйтесь, чтобы начать общение!
      </span>
    </div>

    <div class="chat" ref="chatContainer">

      <div
        class="message"
        v-for="msg in sortedMessages"
        :key="msg.id"
      >
        <span v-if="selectedUser && (msg.sender_id === selectedUser
          || msg.recipient_id === selectedUser)"
          :class="{ 'received-message': msg.sender_id === selectedUser,
            'sent-message': msg.sender_id !== selectedUser
          }"
          :style="{ 'opacity': msg.sender_id !== selectedUser ? '0' : '1' }"
        >
          {{ getUsername(msg) }}:
        </span>

        <span v-if="selectedUser && (msg.sender_id === selectedUser
          || msg.recipient_id ===selectedUser)"
          :class="{ 'received-message': msg.sender_id === selectedUser,
            'sent-message': msg.sender_id !== selectedUser
          }"
          :style="{ 'border-radius': msg.sender_id ||
                    msg.recipient_id=== selectedUser ? '20px' : '0',
                    'background' : msg.sender_id ||
                    msg.recipient_id === selectedUser ? '#f1f1f1' : '0',
          }"
        >
          {{ msg.message }}
          <br/>
            <span class="time">{{ getTime(msg.created_at) }}</span>
        </span>
      </div>
    </div>

    <div class="send-message" v-if="isSignedIn">
        <label class="send-message-label" for="text">
          <textarea
            rows="5" cols="33"
            class="send-message-input"
            v-model="message"
            @keyup.enter="createMessage"
            v-bind:disabled="selectedUser === undefined || selectedUser === null"
          >
          </textarea>
        </label>
        <button
          style="height: 40px; bottom: 20px; background-color: #dac400;"
          class="double-border-button"
          @click="createMessage"
          v-bind:disabled="selectedUser === undefined  || selectedUser === null"
        >
          Отправить
        </button>
    </div>
</template>

<script>
import io from 'socket.io-client';
import { onBeforeMount, ref, provide } from 'vue';
import SideMenuChat from './SideMenu/index.vue';
import AuthView from '../../views/auth/index.vue';

export default {
  name: 'UserChat',
  data() {
    return {
      users: [],
      sender_id: localStorage.getItem('id'),
      token: localStorage.getItem('token'),
      recipient_id: null,
      message: '',
      socket: null,
      allMessages: [],
      selectedUser: null,
      dayOfWeek: '',
    };
  },
  components: {
    SideMenuChat,
    AuthView,
  },
  created() {
    this.socket = io('https://portfolio.fulliam.ru/', { transports: ['websocket', 'polling', 'flashsocket'] });

    this.getUsers();
    this.getAllMessages();
    this.getDayOfWeek();

    this.socket.on('chat', (data) => {
      this.socket.emit('start_chat', data);
      this.getAllMessages();
    });

    this.socket.on('users', (data) => {
      this.users = data;
    });

    this.socket.on('messages:allData', (data) => {
      this.allMessages = data;
    });

    this.socket.on('message:created', (data) => {
      console.log(data);
    });

    this.socket.on('connect', () => {
      this.socket.emit('user:room', this.sender_id);
      this.startChat();
    });

    this.socket.on('logout', () => {
      this.logout();
    });
  },
  mounted() {
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    test() {
      console.log(this.token);
    },
    startChat(user) {
      this.recipient_id = user;
      this.selectedUser = user;
      const chatRoom = `${this.sender_id}-${this.recipient_id}`;
      this.socket.emit('start_chat', chatRoom);
    },
    getUsers() {
      this.socket.emit('users');
    },
    getAllMessages() {
      this.socket.emit('messages:all', this.sender_id, this.token);
    },
    createMessage() {
      const message = {
        sender_id: this.sender_id,
        recipient_id: this.recipient_id,
        message: this.message,
        created_at: new Date(),
      };
      const { token } = this;
      this.socket.emit('message:create', message, token);
      this.allMessages.push(message);
      this.message = '';
    },
    getUsername(data) {
      if (data.sender_id === this.selectedUser) {
        const user = this.users.find((u) => u.id === data.sender_id);
        return user ? user.username : 'Unknown';
      } if (data.recipient_id === this.selectedUser) {
        return 'Your Username';
      }
      return 'Unknown';
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.chatContainer;
        container.scrollTop = container.scrollHeight;
      });
    },
    getTime(fullDate) {
      const date = new Date(fullDate);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      return `${hours}:${minutes}:${seconds}`;
    },
    getDayOfWeek() {
      const date = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[date.getDay()];
      this.dayOfWeek = day;
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.isSignedIn = false;
    },
  },
  computed: {
    sortedMessages() {
      const sortedArray = [...this.allMessages];
      sortedArray.sort((msg1, msg2) => new Date(msg1.created_at) - new Date(msg2.created_at));

      return sortedArray;
    },
  },
  setup() {
    const isSignedIn = ref(false);
    provide('isSignedIn', isSignedIn);

    onBeforeMount(() => {
      const token = localStorage.getItem('token');
      if (token) {
        isSignedIn.value = true;
      }
    });

    const updateAuthState = () => {
      isSignedIn.value = false;
    };

    return {
      isSignedIn,
      updateAuthState,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('../../assets/styles/user-chat/user-chat.scss');
@import url('../../assets/styles/side-menu/side-menu-chat.scss');
@import url('../../assets/styles/auth/form/index.scss');
@import url('../../assets/styles/auth/form/switch-sign/index.scss');

.chat-helper {
  font-size: 32px;
  font-family: "Amatic SC";
  color: rgb(255, 255, 255);
  position: absolute;
  z-index: 99;
  top: 51%;
  justify-content: center;
  display: flex;
  right: 20%;
  width: 250px;
  text-shadow: 2px 2px 5px black;
  animation: blink 4s infinite;

  @keyframes blink {
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}
}
</style>
