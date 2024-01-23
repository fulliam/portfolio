<template>
  <div class="eye-updater" @mousemove="handleEyeUpdate">
    <HeaderComponent>
      <nav
        style="top: 0;
               background-color: #a47231;
               width: 100%;
               border-radius: 0;
               box-shadow: 0px 0px 80px #a59898;
      ">

        <div class="cont" @click="openMenu" @keydown.q="openMenu">
          <button class='button'>
            <div class='blob'>
              <svg
                xmlns:xlink='http://www.w3.org/1999/xlink'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 310 350'
              >
              <path d='M156.4,339.5c31.8-2.5,59.4-26.8,
                80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111
                c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,
                0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,
                88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z'
              />
              </svg>
            </div>
            <div class='line'></div>
            <div class='text'>
              <b>M</b>
              <b>E</b>
              <b>N</b>
              <b>U</b>
              <b>!</b>
            </div>
            </button>
        </div>

        <div class="menu" v-show="isMenuOpen">
          <div
            class="menu-cloud"
            :style="{
              transition: 'opacity 0.5s',
              opacity: cloud1Opacity
            }"
          >
            <span class="menu-pageLink" style="top: -5px; left: 20%; font-size: 18px;">
              <router-link to="/">MAIN PAGE</router-link>
            </span>
          </div>
          <div
            class="menu-cloud"
            :style="{
              transition: 'opacity 1s',
              opacity: cloud2Opacity,
              bottom: '-270%',
              left: '20%',
              transform: 'scale(1.3)'
            }"
          >
            <span class="menu-pageLink">
              <router-link to="/plasta">PLASTA</router-link>
            </span>
            <span class="menu-pageLink" style="left: 10px;">
              <router-link to="/shop">SHOP</router-link>
            </span>
            <span class="menu-pageLink" style="left: 80px; top: -53px;">
              <router-link to="/">noth</router-link>
            </span>
            <span class="menu-pageLink" style="left: 50px; top: -50px;">
              <router-link to="/roulette">ROULETTE</router-link>
            </span>
          </div>
          <div
            class="menu-cloud"
            :style="{
              transition: 'opacity 1.5s',
              opacity: cloud3Opacity,
              bottom: '-420%',
              left: '34%',
              transform: 'scale(1.8)'
            }"
          >
            <span class="menu-pageLink">
              <router-link to="/weather">WEATHER</router-link>
            </span>
            <span class="menu-pageLink" style="left: 10px;">
              <router-link to="/alarm">ALARM</router-link>
            </span>
            <span class="menu-pageLink" style="left: 80px; top: -53px;">
              <router-link to="/chat">chat</router-link>
            </span>
            <span class="menu-pageLink" style="top: -50px;">
              <router-link to="/jokes">JOKES</router-link>
            </span>
          </div>
        </div>

        <div
          class="menu-blurBG"
          v-show="isMenuOpen"
          @click="openMenu"
          @keydown.esc="openMenu"
        >
        </div>

        <div class="nick-name">
          <a href="https://resume.fulliam.ru">FULL i@M</a>
        </div>

        <div class="page-logo">
          <span>{{ logoText }}</span>
        </div>

        <div style="border-left: 5px solid black;
                    border-right: 5px solid black;
                    background-color: #d39f27;
        ">
          <Eye :X="mouseX" :Y="mouseY"/>
        </div>
      </nav>
      <nav style="display: none;">
        <router-link to="/tts_stt">TTS & STT</router-link>
        <router-link to="/wish_list">Wish List</router-link>
      </nav>
    </HeaderComponent>
    <BodyComponent>
      <router-view/>
    </BodyComponent>
    <FooterComponent>
    </FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './layout/header/index.vue';
import BodyComponent from './layout/body/index.vue';
import FooterComponent from './layout/footer/index.vue';
import Eye from './components/eye/index.vue';

export default {
  components: {
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Eye,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      isMenuOpen: false,
      cloud1Opacity: 0,
      cloud2Opacity: 0,
      cloud3Opacity: 0,
    };
  },
  methods: {
    handleEyeUpdate(event) {
      this.mouseX = (event.clientX / window.innerWidth) * 70;
      this.mouseY = (event.clientY / window.innerHeight) * 70;
    },
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;

      this.layoutBody = document.querySelector('.layout-body');
      if (this.isMenuOpen) {
        this.layoutBody.style.filter = 'blur(5px)';
      } else {
        this.layoutBody.style.filter = 'none';
      }

      setTimeout(() => {
        this.cloud1Opacity = this.isMenuOpen ? 1 : 0;
      }, 100);

      setTimeout(() => {
        this.cloud2Opacity = this.isMenuOpen ? 1 : 0;
      }, 600);

      setTimeout(() => {
        this.cloud3Opacity = this.isMenuOpen ? 1 : 0;
      }, 1100);
    },
  },
  computed: {
    logoText() {
      switch (this.$route.path) {
        case '/':
          return 'PORTFOLIO';
        case '/jokes':
          return 'HUMORIST';
        case '/weather':
          return 'tempestas';
        case '/chat':
          return 'messenger';
        case '/alarm':
          return 'ALARM';
        case '/plasta':
          return 'planets & STARS';
        case '/roulette':
          return 'REEL`s';
        case '/shop':
          return 'CARD::STORE';
        default:
          return '';
      }
    },
  },
  mounted() {
    const pageLinks = document.querySelectorAll('.menu-pageLink');
    pageLinks.forEach((link) => {
      link.addEventListener('click', this.openMenu);
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url('./assets/styles/button/button.scss');

body {
  background: #1e1e1e;
  margin: 0;
  padding: 0;
}

nav {
  position: fixed;
  top: 12%;
  width: 98%;
  z-index: 999999;
  display: block ruby;
  border-radius: 0 15px;

  a {
    color: #1e1e1e;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #c8167a;
    }

    &.router-link-exact-active {
      color: rgb(205, 149, 37);
    }
  }
}

.page-logo {
  font-family: "Monoton";
  font-size: 60px;
  width: 30%;
  position: absolute;
  right: 100px;
  top: 62%;
  text-shadow: 1px 1px 2px #000, 0 0 1em #fff, 0 0 0.2em #e41cce;
  color: #f6f6f6;
  z-index: 99;
  white-space: nowrap;

  & span {
    animation: logoShow 2s forwards linear;
  }

  @keyframes logoShow {
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1341px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 34px;
  }

  @media screen and (max-width: 845px) {
    left: 5%;
  }
}
/*
@media screen and (max-width: 800px) {
  .logo {
    font-size: 40px;
    right: 70px;
    top: 40px;
  }
}
*/
.nick-name {
  font-family: "Orbital";
  font-weight: bolder;
  font-size: 40px;
  width: 30%;
  position: absolute;
  right: 100px;
  top: 10%;
  color: rgb(213, 152, 115);
  text-shadow: 1px 1px 2px #cbc7cb, 0 0 1em #d8b7d0, 0 0 0.2em #514e50;
  z-index: 99;
  cursor: pointer;
  white-space: nowrap;

  @media screen and (max-width: 1341px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 845px) {
    right: 5%;
  }
}

.menu-cloud {
  width: 200px; height: 60px;
  background: #9ab1b0b2;

  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;

  position: absolute;
  bottom: -120%;
  left: 30%;
  z-index: 30;
}

.menu-cloud:before, .menu-cloud:after {
  content: '';
  position: absolute;
  background: #acbfbcde;
  width: 100px; height: 80px;
  position: absolute; top: -15px; left: 10px;

  border-radius: 100px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;

  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -moz-transform: rotate(30deg);
}

.menu-cloud:after {
  width: 120px; height: 120px;
  top: -55px; left: auto; right: 15px;
}

.menu-pageLink {
  position: relative;
  z-index: 100;
  display: flex;
  top: -30px;
  left: 34%;
  width: 50%;
  justify-content: center;
  border-radius: 20px;
  margin: 5px;
  font-family: "Press Start 2P";
  font-size: 14px;
}

.menu-blurBG {
  position: absolute;
  z-index: 10;
  display: block;
  top: -50px;
  left: -50px;
  border-radius: 20px;
  background: #1e1e1e1e;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 200vh;
  width: 220vh;
}

.cont {
  position: absolute;
  width: 15%;
  height: 60px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: inset 0px 0px 15px black;
  background: #a55171;
  left: 10%;
  top: 10px;
  cursor: pointer;
}

.button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #F75780;
  position: realtive;
  border: 1px dashed yellow;
  border-radius: 10px;
  outline: none;
  transition: box-shadow 0.3s linear;
  box-shadow: inset 0px 0px 5px black, inset 0px 0px 0px #F7EA25;
}

.button:active {
  box-shadow: inset 0px 0px 0px black, inset 0px 0px 105px #F7EA25;
}

.button:active .blob {
  animation: none;
}

.blob {
  position: relative;
  top: 10%;
  left: 0%;
  width: 10vw;
  height: 10vw;
  fill: #1A87AB;
  transform-origin: 50% 50%;
  filter: drop-shadow(4px 4px 0 black);
  animation: bump 5.5s ease infinite;
}

@keyframes bump {
  0% {
    transform: scale(1, 1) translateX(0px);
  }
  9% {
    transform: scale(1.1, 0.9) translateY(20px);
  }
  28% {
    transform: scale(0.7, 1.3) translateY(-100px) translateX(55px);
  }
  35% {
    transform: scale(1, 1) translateY(20px);
  }
  50% {
    transform: scale(1, 1.1);
  }
  60% {
    transform: scale(1.1, 0.9) translateY(20px);
  }
  80% {
    transform: scale(0.7, 1.3) translateY(-100px) translateX(-55px);
  }
  88% {
    transform: scale(1, 1) translateY(20px);
  }
  100% {
    transform: scale(1, 1) translateX(0px);
  }
}

.line {
  position: absolute;
  bottom: 20%;
  width: 20vw;
  height: 0.5vw;
  background: white;
  transform: rotate(-8deg);
  box-shadow: 2px 2px 0px black;
  animation: line 4s ease infinite reverse;
}

@keyframes line {
  0% {
    transform: rotate(-8deg);
  }
  9% {
    transform: rotate(-8deg);
  }
  28% {
    transform: rotate(28deg);
  }
  35% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(-8deg);
  }
  80% {
    transform: rotate(-12deg);
  }

  88% {
    transform: rotate(-18deg);
  }

  100% {
    transform: rotate(-8deg);
  }
}

.text {
  display: flex;
  position: absolute;
  top: 12px;
  left: 10px;
  font-size: 32px;
  width: 100%;
  text-shadow: 2px 2px black;
  font-family: 'Anton', sans-serif;
}

b:nth-child(1n) {
  transform: rotate(8deg);
  animation: shake 0.5s ease infinite;
  color: #F7EA25
}

b:nth-child(2n) {
  transform: rotate(5deg);
  animation: shake 0.5s ease-out infinite reverse;
  color: white
}

b:nth-child(3n) {
  transform: rotate(-2deg);
  animation: shake 0.5s 0.1s ease infinite;
}

 b:nth-child(4n) {
  transform: rotate(-5deg);
  animation: shake 0.5s ease-in infinite reverse;
}

@keyframes shake {
  0% {
    transform: translateX(0) rotate(8deg);
  }
  50% {
    transform: translateX(4px) rotate(-3deg);
  }

  100% {
    transform: translateX(0) rotate(6deg);
  }
}

i {
  color: #2867B2;
  margin-top: 1vw
}
</style>
