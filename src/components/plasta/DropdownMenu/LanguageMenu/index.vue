<template>
    <div class="dropdown">
      <button
        class="dropdown-toggle"
        @click="toggleDropdown"
        @keyup.q="toggleDropdown"
      >
        {{ selectedLanguage }}
      </button>
      <ul class="dropdown-menu" :class="{ open: isOpen }">
        <li
            v-for="(language, index) in languages"
            :key="index"
            @click="changeLanguage(language)"
            @keyup.q="changeLanguage(language)"
        >
          {{ language }}
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
  name: 'DropdownLanguageMenu',
  data() {
    return {
      selectedLanguage: '🇬🇧 English',
      languages: ['🇬🇧 English', '🇪🇸 Spanish', '🇷🇺 Russian'],
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['isOpen', 'languageChanged'],
  methods: {
    toggleDropdown() {
      this.$emit('isOpen', !this.isOpen);
    },
    changeLanguage(language) {
      let value;
      switch (language) {
        case '🇬🇧 English':
          value = 'en';
          break;
        case '🇪🇸 Spanish':
          value = 'es';
          break;
        case '🇷🇺 Russian':
          value = 'ru';
          break;
        default:
          value = '';
          break;
      }

      this.selectedLanguage = language;
      this.$emit('languageChanged', value);
      this.toggleDropdown();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/plasta/dropdownMenu/LanguageMenu/index.scss';
</style>
