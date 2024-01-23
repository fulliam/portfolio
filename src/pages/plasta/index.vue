<template>
  <SphereContentView
    :selectedXspeed="selectedXspeed"
    :selectedYspeed="selectedYspeed"
    :selectedLang="currentLanguage"
  />
  <ThemeMenu
    @isOpen="handleThemeMenuOpened"
    :isOpen="themeMenuOpen"
  >
    <LanguageMenu
      @languageChanged="changeLanguage"
      @isOpen="handleLanguageMenuOpened"
      :isOpen="langMenuOpen"
    />
    <SpeedMenu
      @speedChanged="handleSpeedChange"
      @isOpen="handleSpeedMenuOpened"
      :isOpen="speedMenuOpen"
    />
  </ThemeMenu>
</template>

<script>
import SphereContentView from '../../views/plasta/index.vue';
import ThemeMenu from '../../components/plasta/DropdownMenu/ThemeMenu/index.vue';
import LanguageMenu from '../../components/plasta/DropdownMenu/LanguageMenu/index.vue';
import SpeedMenu from '../../components/plasta/DropdownMenu/SpeedMenu/index.vue';

export default {
  name: 'PlastaPage',
  components: {
    SphereContentView,
    ThemeMenu,
    LanguageMenu,
    SpeedMenu,
  },
  data() {
    return {
      selectedXspeed: 0.0001,
      selectedYspeed: 0.003,
      currentLanguage: 'en',
      langMenuOpen: false,
      speedMenuOpen: false,
      themeMenuOpen: false,
    };
  },
  methods: {
    handleSpeedChange(speed) {
      if (speed.type === 'x') {
        this.selectedXspeed = parseFloat(speed.value);
      } else if (speed.type === 'y') {
        this.selectedYspeed = parseFloat(speed.value);
      }
    },
    changeLanguage(language) {
      this.currentLanguage = language;
    },
    handleLanguageMenuOpened(isOpen) {
      this.langMenuOpen = isOpen;
      this.speedMenuOpen = false;
      this.themeMenuOpen = false;
    },
    handleSpeedMenuOpened(isOpen) {
      this.speedMenuOpen = isOpen;
      this.langMenuOpen = false;
      this.themeMenuOpen = false;
    },
    handleThemeMenuOpened(isOpen) {
      this.themeMenuOpen = isOpen;
      this.langMenuOpen = false;
      this.speedMenuOpen = false;
    },
  },
};
</script>
