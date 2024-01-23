<template>
    <div class="weather-app">
      <h2 class="glitch">Weather App</h2>
      <div class="form">
        <label for="city">
          <input type="text" id="city" v-model="city" @keydown.enter="getWeather"/>
        </label>
        <button @click="getWeather">Get Weather</button>
      </div>
      <div v-if="weather" class="weather-info">
        <div class="weather-details">
          <div class="weather-temp">
            <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
            <div class="feels-like">Ощущается как: {{ Math.round(weather.main.feels_like) }}°C</div>
          </div>
          <div class="weather-description">
            <div class="icon">
              <img :src="'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'" :alt="weather.weather[0].description" />
            </div>
          </div>
        </div>
        <div class="weather-stats">
          <div class="stat">
            <div class="label">Минимальная температура:</div>
            <div class="value">{{ Math.round(weather.main.temp_min) }}°C</div>
          </div>
          <div class="stat">
            <div class="label">Максимальная температура:</div>
            <div class="value">{{ Math.round(weather.main.temp_max) }}°C</div>
          </div>
          <div class="stat">
            <div class="label">Давление:</div>
            <div class="value">{{ weather.main.pressure }} гПа</div>
          </div>
          <div class="stat">
            <div class="label">Влажность:</div>
            <div class="value">{{ weather.main.humidity }}%</div>
          </div>
          <div class="stat">
            <div class="label">Ветер:</div>
            <div class="value">{{ Math.round(weather.wind.speed) }} м/с</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'WeatherPage',
  data() {
    return {
      city: 'Moscow',
      API_KEY: '79d1ca96933b0328e1c7e3e7a26cb347',
      weather: null,
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=metric`,
        );
        const data = await response.json();
        this.weather = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss">
.weather-app {
    font-family: 'Press Start 2P';
    max-width: 600px;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 40px;
    background: #ff06;
    background-size:cover;
    background-blend-mode: hard-light;
    animation: hue-rotate 15s linear infinite;
    box-shadow: 10px 10px #272626de;
    border-width: 2px;
    border-style: dashed;
    border-color: #b7b7b7;
    border-spacing: 15px;
}

@keyframes hue-rotate {
    from {
        -webkit-filter: hue-rotate(0);
        -moz-filter: hue-rotate(0);
        -ms-filter: hue-rotate(0);
        filter: hue-rotate(0);
    }
    to {
        -webkit-filter: hue-rotate(360deg);
        -moz-filter: hue-rotate(360deg);
        -ms-filter: hue-rotate(360deg);
        filter: hue-rotate(360deg);
    }
}

.form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 25px;
}

.form label {
    margin-right: 10px;
    display: contents;
}

.form input[type="text"] {
    padding: 5px;
    border-radius: 5px;
    background: antiquewhite;
    border: none;
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    box-shadow: 10px 10px #272626de;
}

.form button {
    padding: 10px 10px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    font-family: 'Press Start 2P';
    box-shadow: 10px 10px #272626de;

    &:hover {
      background: lighten(#007bff, 10%);
    }
}

.weather-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-width: 2px;
    border-style: dashed;
    border-color: #b7b7b7;
    border-spacing: 15px;
    border-radius: 40px;
    padding: 40px;
    box-shadow: 10px 10px #0000008c;
}

.weather-details {
    display: flex;
    align-items: center;
    position: absolute;
}

.weather-temp {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    border: 2px solid #2a25bc21;
    padding: 20px;
    border-radius: 10px;
    background: #79b9d8;
    box-shadow: 10px 10px #272626de;

    &:hover {
      background: lighten(#79b9d8, 10%);
    }
}

.weather-temp .temp {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 5px;
}

.weather-temp .feels-like {
    font-size: 16px;
}

.weather-description {
    display: flex;
    align-items: center;
    border: 2px solid #2a25bc21;
    padding: 8px;
    border-radius: 10px;
    background: #79b9d8;
    box-shadow: 10px 10px #272626de;

    &:hover {
      background: lighten(#79b9d8, 10%);
    }
}

.weather-description .description {
    font-size: 24px;
    font-weight: bold;
    margin-right: 20px;
}

.weather-description .icon img {
    width: 100px;
    height: 100px;
}

.weather-stats {
    display: flex;
    margin-top: 160px;
    width: 100%;
    animation: marquee 6s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-200%); }
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border: 2px solid #2a25bc21;
    padding: 20px;
    border-radius: 10px;
    background: #79b9d8;
    box-shadow: 10px 10px #272626de;

    &:hover {
      background: lighten(#79b9d8, 10%);
    }
}

.stat .label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}

.stat .value {
    font-size: 24px;
}

.glitch {
    color: #ffe711e5;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 40px;
    position: relative;
    padding: 30px;
    background: #272f23;
    border-radius: 20px;
    box-shadow: inset 10px 10px #0000004a;

    &:before,
    &:after {
        content: "Weather App";
        color: #d7f01c;
        position: absolute;
        top: 0;
        overflow: hidden;
        padding: 30px;
        margin-left: 125px;
    }

    &:before {
        left: 3px;
        text-shadow: -3px 0 red;
        animation: glitch-before 2s linear 0s infinite alternate;
    }

    &:after {
        left: -3px;
        text-shadow: -3px 0 blue;
        animation: glitch-after 2s linear 0s infinite alternate;
    }
}

@keyframes glitch-before {
    $steps: 20;
    @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
            clip: rect(random(150) + px, 350px, random(150) + px, 30px);
        }
    }
}
@keyframes glitch-after {
    $steps: 20;
    @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
            clip: rect(random(150) + px, 350px, random(150) + px, 30px);
        }
    }
}
</style>
