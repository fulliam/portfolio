<template>
  <div class="login-wrapper">
    <h2 style="color: #ccc; text-shadow: 1px 10px 2px black;">Регистрация</h2>
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
            title="Придумайте имя пользователя."
            :pattern="'^[a-zA-Z0-9]+$'"
            minlength="3" maxlength="24"
            required
          >
          <span class="error-message" v-if="username && username.length < 3">
            Имя пользователя должно быть не менее 3-х символов.
            Используйте латинский алфавит и цифры.
          </span>
        </label>
      </div>
      <div class="label-password">
        <label for="password">
          <input
            @keydown.enter="createUser"
            class="input-password"
            type="password"
            id="password"
            v-model="password"
            placeholder="<Пароль>"
            title="Придумайте пароль."
            :pattern="'(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}'"
            minlength="8" maxlength="14"
            required
          >
          <span class="error-message" v-if="password
            && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}/.test(password)"
          >
            Пароль должен содержать минимум одну букву в нижнем регистре,
            одну букву в верхнем регистре, одну цифру и быть не менее 8-ми символов длиной.
          </span>
        </label>
      </div>
      <button
        class="double-border-button"
        type="submit"
        style="padding: 10px 10px;"
        @click.prevent="createUser"
        :disabled="!username || (username && username.length < 3
          && !/[a-zA-Z0-9]+$.{3,24}/.test(username))
          && !password || (password && password.length < 8
          && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}/.test(password))"
      >
         Зарегестрироваться
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      password: '',
      status: '',
    };
  },
  methods: {
    async createUser() {
      try {
        const response = await fetch('https://portfolio.fulliam.ru/auth/signup/', {
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
        if (data.status === 'Пользователь создан') {
          // this.$router.push('/');
        } else {
          this.status = data.status;
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
  },
};
</script>
