<template>
    <div class="footer-menu">
      <div class="dropdown">
        <button
            class="dropdown-toggle"
            @click="toggleDropdown"
            @keyup.q="toggleDropdown"
        >
            {{ themes[currentThemeIndex].name }}
        </button>
        <ul class="dropdown-menu" :class="{ open: isOpen }">
          <li
            v-for="(theme, index) in themes"
            :key="index"
            @click="selectTheme(index)"
            @keyup.enter="selectTheme(index)"
            >
                {{ theme.name }}
            </li>
        </ul>
      </div>
      <slot></slot>
    </div>
    <div
      class="cosmos-stars"
      v-show="themes[currentThemeIndex].name === '✨ Cosmo'"
      style="z-index: -9;"
    >
    <div class="page-bg">
    </div>
      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  data() {
    return {
      themes: [
        {
          name: '💾 Term',
          backgroundColor: '#131926',
          fontFamily: 'Press Start 2P',
          titleColor: '#4ce64c',
          headingColor: '#285bc4',
          textColor: '#e6e6e4',
          numberColor: 'black',
          titleNeon: '1px 10px 2px black, 0 0 1em #4ce64c, 0 0 0.2em #4ce64c',
          headingNeon: '1px 10px 2px black, 0 0 1em #285bc4, 0 0 0.2em #285bc4',
          textNeon: '1px 10px 2px black, 0 0 1em #e6e6e4, 0 0 0.2em #e6e6e4',
          neon: '1px 1px 20px black, 0 0 1em #FF53cd, 0 0 0.2em #FF53cd',
        },
        {
          name: '✨ Cosmo',
          backgroundColor: 'black',
          fontFamily: 'Monoton',
          titleColor: '#FF53cd',
          headingColor: '#66a2d7',
          textColor: '#b48af7',
          numberColor: '#ffffff',
          titleNeon: '1px 10px 2px black, 0 0 1em #6aaae1, 0 0 0.2em #6aaae1',
          headingNeon: '1px 10px 2px black, 0 0 1em ##66a2d7, 0 0 0.2em ##66a2d7',
          textNeon: '1px 10px 2px black, 0 0 1em #b48af7, 0 0 0.2em #b48af7',
          neon: '1px 1px 20px black, 0 0 1em #FF53cd, 0 0 0.2em #FF53cd',
        },
      ],
      currentThemeIndex: 1,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['isOpen'],
  methods: {
    toggleDropdown() {
      this.$emit('isOpen', !this.isOpen);
    },
    selectTheme(index) {
      this.currentThemeIndex = index;
      this.isDropdownOpen = false;
      this.applyTheme(this.themes[this.currentThemeIndex]);
    },
    applyTheme(theme) {
      document.body.style.setProperty('--background-color', theme.backgroundColor);

      document.querySelectorAll('h2').forEach((h2) => {
        h2.style.setProperty('--title-color', theme.titleColor);
        h2.style.setProperty('--font-family', theme.fontFamily);
        h2.style.setProperty('--neon', theme.titleNeon);
      });

      document.querySelectorAll('h3').forEach((h3) => {
        h3.style.setProperty('--heading-color', theme.headingColor);
        h3.style.setProperty('--font-family', theme.fontFamily);
        h3.style.setProperty('--neon', theme.headingNeon);
      });

      document.querySelectorAll('h3text').forEach((h3text) => {
        h3text.style.setProperty('--neon', theme.neon);
      });

      document.querySelectorAll('p').forEach((p) => {
        p.style.setProperty('--text-color', theme.textColor);
        p.style.setProperty('--font-family', theme.fontFamily);
        p.style.setProperty('--neon', theme.textNeon);
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../../../assets/styles/plasta/spaceStars/index.scss';
@import '../../../../assets/styles/plasta/dropdownMenu/ThemeMenu/index.scss';

.footer-menu {
  position: fixed;
  bottom: 40px;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
  justify-content: center;
  display: flex;
  width: 100%;
}

body {
    --background-color: #131926;
    --font-family: 'Press Start 2P';
    background: var(--background-color);
    font-family: var(--font-family);

    h2 {
        --title-color: #4ce64c;
        --neon: 1px 10px 2px black, 0 0 1em #4ce64c, 0 0 0.2em #4ce64c;

        color: var(--title-color);
        font-family: var(--font-family);
        text-shadow: var(--neon);
    }

    h3 {
        --heading-color: #285bc4;
        --neon: 1px 10px 2px black, 0 0 1em #285bc4, 0 0 0.2em #285bc4;

        color: var(--heading-color);
        font-family: var(--font-family);
        text-shadow: var(--neon);
    }

    p {
        --text-color: #e6e6e4;
        --neon: 1px 10px 2px black, 0 0 1em #285bc4, 0 0 0.2em #285bc4;

        color: var(--text-color);
        font-family: var(--font-family);
        text-shadow: var(--neon);

        font-size: 20px;
    }
}
</style>
