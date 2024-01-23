<template>
  <div
    class="content-wrapper"
    v-if="joke != ''"
    @mouseover="addHoverClass"
    @mouseleave="removeHoverClass"
    @focusin="addHoverClass"
    @focusout="removeHoverClass"
    :class="{hovered: isHovered}"
  >
    <div class="select-action">
      <button
        @click="changeFont"
        class="button-edit"
        :style="`font-family: ${selectedFont}; color: var(--color-text)`"
      >
        <svg
          version="1.1"
          class="edit-icon"
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          xml:space="preserve"
        >
          <path
            fill="var(--color-text)"
            d="M19,0h-6c-1.657,0-3,1.343-3,3v20.667c0,
            0.216,0.07,0.427,0.2,0.6l5,6.667c0.4,0.533,1.2,0.533,1.6,0
            l5-6.667c0.13-0.173,0.2-0.384,0.2-0.6V3C22,1.343,20.657,0,19,0z
            M16,30.333L15,29h2L16,30.333z M17.75,28h-3.5l-3-4h9.5L17.75,28z
            M21,23H11V11h10V23z M21,10H11V7h10V10z
            M21,6H11V3c0-1.103,0.897-2,2-2h6c1.103,0,2,0.897,2,2V6z"
          />
        </svg>
        {{ selectedFont }}
      </button>
    </div>
    <p
      :style="`font-family: ${selectedFont};
               user-select: none;
               overflow: scroll;
               height: 300px;
               padding: 20px;
               margin-top: 50px;
               overflow-x: hidden;`"
    >
      {{ joke.joke }}
    </p>
    <div class="arrow-buttons">
        <button @click="prevJoke">
          <i class="arrow-buttons__left"></i>
          <span
            :style="`font-family: ${selectedFont};
                     font-size: 20px;
                     position: relative;
                     top: -20px;`"
          >
           prev
          </span>
        </button>
        <button @click="nextJoke">
          <span
            :style="`font-family: ${selectedFont};
                     font-size: 20px;
                     position: relative;
                     top: -20px;`"
          >
          next
          </span>
          <i class="arrow-buttons__right"></i>
        </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JokesPage',
  data() {
    return {
      joke: '',
      fonts: [
        'Flow Circular',
        'Rubik Vinyl',
        'Rubik Moonrocks',
        'Bad Script',
        'Stalinist One',
      ],
      selectedFont: 'Stalinist One',
      jokeID: 1,
      isHovered: false,
    };
  },
  methods: {
    getEnumerateJoke() {
      const { jokeID } = this;
      axios.get(`https://portfolio.fulliam.ru/api/jokes/${jokeID}`)
        .then((res) => {
          this.joke = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    prevJoke() {
      if (this.jokeID <= 1) {
        this.jokeID = 46546;
      } else {
        this.jokeID -= 1;
      }
      this.getEnumerateJoke();
    },
    nextJoke() {
      if (this.jokeID >= 46546) {
        this.jokeID = 1;
      } else {
        this.jokeID += 1;
      }
      this.getEnumerateJoke();
    },
    changeFont() {
      const currentIndex = this.fonts.indexOf(this.selectedFont);
      const nextIndex = (currentIndex + 1) % this.fonts.length;
      this.selectedFont = this.fonts[nextIndex];
    },
    addHoverClass() {
      this.isHovered = true;
    },
    removeHoverClass() {
      this.isHovered = false;
    },
  },
  created() {
    this.getEnumerateJoke();
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/jokes/index.scss';
</style>
