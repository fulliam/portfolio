<template>
      <div class="eye" v-for="(eye, index) in [1, 2]" :key="index">
        <div class="eyelid upper-eyelid" :style="upperEyelidStyle"></div>
        <div class="pupil" :style="pupilStyle"></div>
        <div class="eyelid lower-eyelid" :style="lowerEyelidStyle"></div>
      </div>
      <!--
      <div
        style="
          padding: 5px;
          display: grid;
          margin: 25px;
          position: absolute;
          bottom: 0;
          z-index: 1;
        "
      >
        <div>
          <label for="color1" style="color: grey;">
            <input
              name="color"
              type="radio"
              id="color1"
              value="grey"
              v-model="selectedColor"
            />
            Серый
          </label>
        </div>
        <div>
          <label for="color2" style="color: #54a1b3;">
            <input
              name="color"
              type="radio"
              id="color2"
              value="#54a1b3"
              v-model="selectedColor"
            />
            Голубой
          </label>
        </div>
        <div>
          <label for="color3" style="color: green;">
            <input
              name="color"
              type="radio"
              id="color3"
              value="green"
              v-model="selectedColor"
            />
            Зелёный
          </label>
        </div>
        <div>
          <label for="color4" style="color: brown;">
            <input
              name="color"
              type="radio"
              id="color4"
              value="brown"
              v-model="selectedColor"
            />
            Коричневый
          </label>
        </div>
      </div>
      -->
</template>

<script>
export default {
  name: 'EyeOnMouse',
  props: {
    X: {
      default: 0,
    },
    Y: {
      default: 0,
    },
  },
  data() {
    return {
      selectedColor: 'brown',
      isBlinking: false,
    };
  },
  computed: {
    pupilStyle() {
      const deltaX = this.X - 50;
      const deltaY = this.Y - 50;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(25, Math.sqrt(deltaX ** 2 + deltaY ** 2));
      const pupilX = 50 + distance * Math.cos(angle) * 2;
      const pupilY = 50 + distance * Math.sin(angle) * 1.3;

      return {
        left: `${pupilX}%`,
        top: `${pupilY}%`,
        border: `7px solid ${this.selectedColor}`,
      };
    },
    upperEyelidStyle() {
      return {
        height: this.isBlinking ? '0' : '50px',
        backgroundColor: 'rgb(219, 186, 176)',
        transition: 'height 0.3s',
      };
    },
    lowerEyelidStyle() {
      return {
        height: this.isBlinking ? '0' : '50px',
        backgroundColor: 'rgb(219, 186, 176)',
        transition: 'height 0.3s',
      };
    },
  },
  methods: {
    startBlinking() {
      this.isBlinking = true;

      setTimeout(() => {
        this.isBlinking = false;
      }, 300);

      if (this.blinkInterval) {
        clearInterval(this.blinkInterval);
      }

      this.blinkInterval = setInterval(() => {
        this.isBlinking = true;

        setTimeout(() => {
          this.isBlinking = false;
          setTimeout(() => {
            this.isBlinking = true;
            setTimeout(() => {
              this.isBlinking = true;
            }, 400);
          }, 400);
        }, 9000);
      }, 2000);
    },
  },
  mounted() {
    this.startBlinking();
  },
  /*
  beforeUnmount() {
    if (this.blinkInterval) {
      clearInterval(this.blinkInterval);
    }
  },
  */
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik+Marker+Hatch');

.eye {
    top: 5%;
    width: 40px;
    height: 50px;
    margin: 10px;
    border: 2px solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    overflow: hidden;
    z-index: 9999;
}

.pupil {
    width: 8px;
    height: 8px;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
    position: absolute;
    transition: 0.4s all linear;
}

label {
    font-family: 'Rubik Marker Hatch';
}

input {
    cursor: pointer;
    border-radius: 50%;
    appearance: none;
    width: 10px;
    height: 10px;
    border: 3px solid black;
    transition: 0.4s all linear;
    margin-right: 5px;

    position: relative;
    top: 4px;
}

input:checked {
    border: 8px solid var(--color-text);
    background-color: red;
}

.upper-eyelid,
.lower-eyelid {
  width: 40px;
  height: 25px; /* Половина высоты глаза */
  background-color: rgb(225, 189, 169);
  position: absolute;
  transition: 0.4s all infinite;
  z-index: 1; /* Разместите овалы над зрачком (pupil) */
  border: 1px solid black;
}

.upper-eyelid {
  top: 0;
}

.lower-eyelid {
  bottom: 0;
}
</style>
