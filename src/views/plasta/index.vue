<template>
    <div class="main">
      <div class="sphere-container">
        <div
          class="left-arrow"
          @click="handleArrowClick('left')"
          @keydown.left="handleArrowClick('left')"
        >
          <div class="arrow-top"></div>
          <div class="arrow-bottom"></div>
        </div>

        <Sphere
          :textureFilename="planets[selectedLang][currentPlanetIndex].texture"
          :rotationXspeed="selectedXspeed"
          :rotationYspeed="selectedYspeed"
          :key="planets[selectedLang][currentPlanetIndex].texture +
          '-' + selectedXspeed + '-' + selectedYspeed"
        />

        <div
          class="right-arrow"
          @click="handleArrowClick('right')"
          @keydown.right="handleArrowClick('right')"
        >
          <div class="arrow-top"></div>
          <div class="arrow-bottom"></div>
        </div>
      </div>
      <div class="planet-info">
        <h2>
          @{{ planets[selectedLang][currentPlanetIndex].title }}
          <b style="color: white;">:</b>
        </h2>

        <h3
          @click="handleShowDescription"
          @keyup="handleShowDescription"
          style="cursor: pointer;"
        >
          <span class="h3text">
            ~/{{
                selectedLang === 'en' ? 'Description'
                : selectedLang === 'ru' ? 'Описание'
                : selectedLang === 'es' ? 'Descripción'
                : 'la Description'
              }}
            <b style="color: white;">$</b>
          </span>
        </h3>
        <p v-show="showDescription">
          <TypingAnimation
            :text="planets[selectedLang][currentPlanetIndex].description"
            :animationSpeed="50"
            :key="planets[selectedLang][currentPlanetIndex]"
          />
        </p>

        <div>
          <h3
            @click="handleShowCharacteristic"
            @keyup="handleShowCharacteristic"
            style="cursor: pointer;"
          >
            <span class="h3text">
              ~/{{
                  selectedLang === 'en' ? 'Characteristic'
                  : selectedLang === 'ru' ? 'Характеристика'
                  : selectedLang === 'es' ? 'Característica'
                  : 'la Characteristic'
                }}
              <b style="color: white;">$</b>
            </span>
          </h3>
          <transition-group name="fade">
            <ul v-show="showCharacteristic" key="planet">
              <li key="size">
                <p>
                  {{
                    selectedLang === 'en' ? 'Size'
                    : selectedLang === 'ru' ? 'Размер'
                    : selectedLang === 'es' ? 'Tamaño'
                    : 'la Size'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].size }}
                </p>
              </li>
              <li key="distance">
                <p>
                  {{
                    selectedLang === 'en' ? 'Distance'
                    : selectedLang === 'ru' ? 'Расстояние'
                    : selectedLang === 'es' ? 'Distancia'
                    : 'la Distance'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].distance }}
                </p>
              </li>
              <li key="gravity">
                <p>
                  {{
                    selectedLang === 'en' ? 'Gravity'
                    : selectedLang === 'ru' ? 'Гравитация'
                    : selectedLang === 'es' ? 'Gravedad'
                    : 'la Gravity'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].gravity }}
                </p>
              </li>
              <li key="atmosphere">
                <p>
                  {{
                    selectedLang === 'en' ? 'Atmosphere'
                    : selectedLang === 'ru' ? 'Атмосфера'
                    : selectedLang === 'es' ? 'Atmósfera'
                    : 'la Atmosphere'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].atmosphere }}
                </p>
              </li>
              <li key="averageTemperature">
                <p>
                  {{
                    selectedLang === 'en' ? 'Average temperature'
                    : selectedLang === 'ru' ? 'Средняя температура'
                    : selectedLang === 'es' ? 'Temperatura media'
                    : 'la Average temperature'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].averageTemperature }}
                </p>
              </li>
              <li key="rotationTime">
                <p>
                  {{
                    selectedLang === 'en' ? 'Rotation time'
                    : selectedLang === 'ru' ? 'Время вращения'
                    : selectedLang === 'es' ? 'Tiempo de rotación'
                    : 'la Rotation time'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].rotationTime }}
                </p>
              </li>
              <li key="orbitalSpeed">
                <p>
                  {{
                    selectedLang === 'en' ? 'Orbital speed'
                    : selectedLang === 'ru' ? 'Орбитальная скорость'
                    : selectedLang === 'es' ? 'Velocidad orbital'
                    : 'la Orbital speed'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].orbitalSpeed }}
                </p>
              </li>
              <li key="numberofMoons">
                <p>
                  {{
                    selectedLang === 'en' ? 'Number of moons'
                    : selectedLang === 'ru' ? 'Количество спутников'
                    : selectedLang === 'es' ? 'Número de lunas'
                    : 'la Number of moons'
                  }}:
                  {{ planets[selectedLang][currentPlanetIndex].numberofMoons }}
                </p>
              </li>
            </ul>
          </transition-group>
          <h3
            @click="handleShowInterestingFacts"
            @keyup="handleShowInterestingFacts"
            style="cursor: pointer; overflow: hidden;"
          >
            <span class="h3text">
              ~/{{
                  selectedLang === 'en' ? 'Interesting facts'
                  : selectedLang === 'ru' ? 'Интересные факты'
                  : selectedLang === 'es' ? 'Datos interesantes'
                  : 'la Interesting facts'
                }}
              <b style="color: white;">$</b>
            </span>
            <p v-show="showInterestingFacts">
              {{ planets[selectedLang][currentPlanetIndex].interestingFacts }}
            </p>
          </h3>
          <h3
            @click="handleShowPotentialForLife"
            @keyup="handleShowPotentialForLife"
            style="cursor: pointer; overflow: hidden;"
          >
            <span class="h3text">
              ~/{{
                  selectedLang === 'en' ? 'Potential for life'
                  : selectedLang === 'ru' ? 'Возможность жизни'
                  : selectedLang === 'es' ? 'Potencial para la vida'
                  : 'la Potential for life'
                }}
              <b style="color: white;">$</b>
            </span>
            <p class="marquee" v-show="showPotentialForLife">
              {{ planets[selectedLang][currentPlanetIndex].potentialForLife }}
            </p>
          </h3>
          <h3
            @click="handleShowGeographicalFeatures"
            @keyup="handleShowGeographicalFeatures"
            style="cursor: pointer;"
          >
            <span class="h3text">
              ~/{{
                  selectedLang === 'en' ? 'Geographical features'
                  : selectedLang === 'ru' ? 'Географические особенности'
                  : selectedLang === 'es' ? 'Características geográficas'
                  : 'la Geographical features'
                }}
              <b style="color: white;">$</b>
            </span>
            <p v-show="showGeographicalFeatures">
              {{ planets[selectedLang][currentPlanetIndex].geographicalFeatures }}
            </p>
          </h3>
        </div>
      </div>
    </div>
</template>

<script>
import Sphere from '../../components/plasta/Sphere/index.vue';
import TypingAnimation from '../../components/plasta/TypingAnimation/index.vue';
import planets from './planets';

export default {
  name: 'SphereContent',
  components: {
    Sphere,
    TypingAnimation,
  },
  props: {
    selectedXspeed: {
      type: Number,
      required: true,
      default: 0.0001,
    },
    selectedYspeed: {
      type: Number,
      required: true,
      default: 0.003,
    },
    selectedLang: {
      type: String,
      required: true,
      default: 'ru',
    },
  },
  data() {
    return {
      planets,
      currentPlanetIndex: 0,
      showCharacteristic: false,
      showDescription: true,
      showGeographicalFeatures: false,
      showPotentialForLife: true,
      showInterestingFacts: true,
    };
  },
  methods: {
    handleArrowClick(direction) {
      if (direction === 'left') {
        this.selectPreviousPlanet();
      } else if (direction === 'right') {
        this.selectNextPlanet();
      }
    },
    selectPreviousPlanet() {
      this.currentPlanetIndex = (
        this.currentPlanetIndex - 1 + this.planets[this.selectedLang].length
      ) % this.planets[this.selectedLang].length;
    },
    selectNextPlanet() {
      this.currentPlanetIndex = (
        this.currentPlanetIndex + 1
      ) % this.planets[this.selectedLang].length;
    },
    handleShowCharacteristic() {
      this.showCharacteristic = !this.showCharacteristic;
    },
    handleShowDescription() {
      this.showDescription = !this.showDescription;
    },
    handleShowGeographicalFeatures() {
      this.showGeographicalFeatures = !this.showGeographicalFeatures;
    },
    handleShowPotentialForLife() {
      this.showPotentialForLife = !this.showPotentialForLife;
    },
    handleShowInterestingFacts() {
      this.showInterestingFacts = !this.showInterestingFacts;
    },
  },
};
</script>

<style lang="scss" scoped>
.sphere-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
}

.main {
  position: relative;
  bottom: 30px;
  z-index: 1;
  font-size: 11px;
  width: 85%;
  padding: 1%;
  display: flex;
  height: 30rem;
}

@media screen and (max-width: 868px) {
  .main {
    display: grid;
  }
}

.planet-info {
  overflow: scroll;
  margin-left: 10%;
  text-align: left;
  background: rgba(17, 15, 15, 0.6);
  border-radius: 0 60px 60px 60px;
  padding: 2%;
  width: 85%;
  height: 150%;

  @media screen and (max-width: 868px) {
    height: 250%;
  }
}

.marquee {
  width: 100%;
  height: 0;
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(150%); }
  100% { transform: translateX(-150%); }
}

@import '../../assets/styles/plasta/planetsInfo/index.scss';
@import '../../assets/styles/plasta/arrows/index.scss';
@import '../../assets/styles/plasta/typewriter/index.scss';
</style>
