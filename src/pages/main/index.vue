<template>
  <div class="main">
    <div class="page-cards" ref="pageCards">
      <page-card
        class="card"
        v-for="page in pages"
        :key="page.id"
        :page="page"
      />
    </div>
  </div>
  <div id="background-wrap">
    <div class="x1">
        <div class="cloud"></div>
    </div>

    <div class="x2">
        <div class="cloud"></div>
    </div>

    <div class="x3">
        <div class="cloud"></div>
    </div>

    <div class="x4">
        <div class="cloud"></div>
    </div>

    <div class="x5">
        <div class="cloud"></div>
    </div>
    </div>
</template>

<script>
import PageCard from '../../components/main/card/index.vue';
import plasta1 from '../../assets/img/screen/plasta/plasta1.png';
import plasta2 from '../../assets/img/screen/plasta/plasta2.png';
import plasta3 from '../../assets/img/screen/plasta/plasta3.png';
import plasta4 from '../../assets/img/screen/plasta/plasta4.png';
import chat1 from '../../assets/img/screen/chat/chat1.png';
import chat2 from '../../assets/img/screen/chat/chat2.png';
import chat3 from '../../assets/img/screen/chat/chat3.png';
import chat4 from '../../assets/img/screen/chat/chat4.png';
import alarm1 from '../../assets/img/screen/alarm/alarm1.png';
import alarm2 from '../../assets/img/screen/alarm/alarm2.png';
import alarm3 from '../../assets/img/screen/alarm/alarm3.png';
import jokes1 from '../../assets/img/screen/jokes/jokes1.png';
import jokes2 from '../../assets/img/screen/jokes/jokes2.png';
import jokes3 from '../../assets/img/screen/jokes/jokes3.png';
import roulette1 from '../../assets/img/screen/roulette/roulette1.png';
import roulette2 from '../../assets/img/screen/roulette/roulette2.png';
import roulette3 from '../../assets/img/screen/roulette/roulette3.png';
import shop1 from '../../assets/img/screen/shop/shop1.png';
import shop2 from '../../assets/img/screen/shop/shop2.png';
import shop3 from '../../assets/img/screen/shop/shop3.png';
import weather1 from '../../assets/img/screen/weather/weather1.png';
import weather2 from '../../assets/img/screen/weather/weather2.png';
import weather3 from '../../assets/img/screen/weather/weather3.png';

export default {
  name: 'MainPage',
  components: {
    PageCard,
  },
  data() {
    return {
      pages: [
        {
          id: 0,
          img: [chat1, chat2, chat3, chat4],
          title: 'Chatter 3000',
          description: 'Веб-чат для обмена мгновенными сообщениями с авторизацией.',
          url: 'chat',
        },
        {
          id: 1,
          img: [plasta1, plasta2, plasta3, plasta4],
          title: 'Planets & Stars',
          description: ' Приложение для просмотра вымышленных моделей планет с возможностью смены языка, темы, скорости вращения.',
          url: 'plasta',
        },
        {
          id: 2,
          img: [shop1, shop2, shop3],
          title: 'Neon Funny Shop',
          description: 'Платформа с геймифицированными карточками товаров и возможностью добавлять их в корзину.',
          url: 'shop',
        },
        {
          id: 3,
          img: [weather1, weather2, weather3],
          title: 'Tempestas',
          description: 'Приложение для просмотра текущих погодных характеристик с поиском по городам мира.',
          url: 'weather',
        },
        {
          id: 4,
          img: [alarm1, alarm2, alarm3],
          title: 'Voice Alarm',
          description: 'Будильник, с записью голосового сообщения, которое будет бесконечно повторяться до отключения.',
          url: 'alarm',
        },
        {
          id: 5,
          img: [jokes1, jokes2, jokes3],
          title: 'Humorist',
          description: '45000 шуток в одном компоненте с возможностью регулировки шрифтов.',
          url: 'jokes',
        },
        {
          id: 6,
          img: [roulette1, roulette2, roulette3],
          title: 'Roulette',
          description: 'Рулетка - генератор случайных последовательностей.',
          url: 'roulette',
        },
        // Добавьте другие страницы здесь
      ],
    };
  },
  /*
  methods: {
    startAnimation() {
      const cards = this.$refs.pageCards.querySelectorAll('.card');
      const coordinates = [
        { left: -65, top: 110 },
        { left: -115, top: 130 },
        { left: 70, top: -50 },
        { left: 55, top: 65 },
        { left: -50, top: -50 },
        { left: 175, top: 85 },
        // Здесь можно добавить другие координаты
      ];

      cards.forEach((currentCard, index) => {
        setTimeout(() => {
          const { left, top } = coordinates[index % coordinates.length];
          currentCard.style.transform = `translate(${left}%, ${top}%)`;
        }, index * 500);
      });
    },
  },
  mounted() {
    this.startAnimation();
  },
  */
};
</script>

<style lang="scss" scoped>
.page-cards {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  background-color: #cc6d099e;
  height: max-content;
  margin: 20%;
  margin-top: 0;
  top: -20px;
  box-shadow: 0px 0px 40px rgb(165, 152, 152);
}

.main {
  height: 100%;
  position: absolute;
  display: flex;
}

@import url('../../assets/styles/main/animations/slide/index.scss');

.animate-slide-left {
  animation: slideLeft 6s infinite;
}

.animate-slide-up {
  animation: slideUp 4s infinite;
}

.animate-slide-right {
  animation: slideRight 8s infinite;
}

.animate-slide-down {
  animation: slideDown 12s infinite;
}

#background-wrap {
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -10;
}

/* KEYFRAMES */

@-webkit-keyframes animateCloud {
  0% {
      margin-left: -1000px;
  }
  100% {
      margin-left: 100%;
  }
}

@-moz-keyframes animateCloud {
  0% {
      margin-left: -1000px;
  }
  100% {
      margin-left: 100%;
  }
}

@keyframes animateCloud {
  0% {
      margin-left: -1000px;
  }
  100% {
      margin-left: 100%;
  }
}

/* ANIMATIONS */

.x1 {
  -webkit-animation: animateCloud 35s linear infinite;
  -moz-animation: animateCloud 35s linear infinite;
  animation: animateCloud 35s linear infinite;

  -webkit-transform: scale(0.65);
  -moz-transform: scale(0.65);
  transform: scale(0.65);
}

.x2 {
  -webkit-animation: animateCloud 20s linear infinite;
  -moz-animation: animateCloud 20s linear infinite;
  animation: animateCloud 20s linear infinite;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x3 {
  -webkit-animation: animateCloud 30s linear infinite;
  -moz-animation: animateCloud 30s linear infinite;
  animation: animateCloud 30s linear infinite;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x4 {
  -webkit-animation: animateCloud 18s linear infinite;
  -moz-animation: animateCloud 18s linear infinite;
  animation: animateCloud 18s linear infinite;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x5 {
  -webkit-animation: animateCloud 25s linear infinite;
  -moz-animation: animateCloud 25s linear infinite;
  animation: animateCloud 25s linear infinite;

  -webkit-transform: scale(0.55);
  -moz-transform: scale(0.55);
  transform: scale(0.55);
}

/* OBJECTS */

.cloud {
  background: #fff;
  z-index: -1;
  background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
  background: -webkit-gradient(linear, left top, left bottom,
    color-stop(5%,#fff), color-stop(100%,#f1f1f1));
  background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
  background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
  background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
  background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff',
    endColorstr='#f1f1f1',GradientType=0 );

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

  height: 120px;
  position: relative;
  width: 350px;
}

.cloud:after, .cloud:before {
  background: #fff;
  content: '';
  position: absolute;
  z-indeX: -1;
}

.cloud:after {
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  height: 100px;
  left: 50px;
  top: -50px;
  width: 100px;
}

.cloud:before {
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;

  width: 180px;
  height: 180px;
  right: 50px;
  top: -90px;
}
</style>
