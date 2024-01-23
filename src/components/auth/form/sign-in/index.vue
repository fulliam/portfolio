<template>
  <div class="login-wrapper">
    <h2 style="color: #ccc; text-shadow: 1px 10px 2px black;">Вход</h2>
    <p class="status" v-if="status">{{ status }}</p>
    <form>
      <div class="label-username">
        <label for="username">
          <input
            class="input-username"
            type="text"
            id="username"
            v-model="username"
            placeholder="<Имя пользователя>"
            title="Введите своё имя пользователя."
            pattern="[a-zA-Z0-9_-]{3,24}"
            minlength="3" maxlength="24"
            required
          >
        </label>
      </div>
      <div class="label-password">
        <label for="password">
          <input
            @keydown.enter="loginUser"
            class="input-password"
            type="password"
            id="password"
            v-model="password"
            placeholder="<Пароль>"
            title="Введите свой пароль."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}"
            minlength="8" maxlength="14"
            required
          >
        </label>
      </div>
      <button
        class="double-border-button"
        type="submit"
        @click.prevent="loginUser"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
      status: '',
    };
  },
  emits: ['signedIn'],
  methods: {
    async loginUser() {
      try {
        const response = await fetch('https://portfolio.fulliam.ru/auth/signin/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const data = await response.json();
        this.status = data.status;
        if (data.status === 'Успешный вход') {
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('id', data.id);
          this.$mitt.emit('signedIn');
          this.reloadPage();
        } else {
          const element = document.querySelector('.auth-modal__dialog');
          element.classList.add('shake');
          setTimeout(() => {
            element.classList.remove('shake');
            this.status = '';
          }, 1000);
        }
      } catch (error) {
        console.error(error);
      }
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

@keyframes shake {
  0% { transform: translateX(0); }
  12.5% { transform: translateX(-10px); }
  25% { transform: translateX(10px); }
  37.5% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  62.5% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
  87.5% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}
</style>
