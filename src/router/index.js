import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/main/index.vue';
import ChatPage from '../pages/chat/index.vue';
import JokesPage from '../pages/jokes/index.vue';
import PlastaPage from '../pages/plasta/index.vue';
import ShopPage from '../pages/shop/index.vue';
import AlarmPage from '../pages/alarm/index.vue';
import WeatherPage from '../pages/weather/index.vue';
import RoulettePage from '../pages/roulette/index.vue';
import TtsSttPage from '../pages/tts_stt/index.vue';
import WishListePage from '../pages/wish_list/index.vue';
import NotFound from '../pages/not_found/index.vue';

const routes = [
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
  {
    path: '/',
    name: 'main',
    component: MainPage,
    meta: {
      title: {
        en: 'Portfolio - fulliam',
        ru: 'Портфолио - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Explore the diverse portfolio of fulliam, a talented web developer and designer with a passion for creating stunning websites and user interfaces.',
            ru: 'Изучите разнообразное портфолио fulliam, талантливого веб-разработчика и дизайнера, страстно увлеченного созданием потрясающих веб-сайтов и пользовательских интерфейсов.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Portfolio - fulliam',
            ru: 'Портфолио - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Explore the diverse portfolio of fulliam, a talented web developer and designer with a passion for creating stunning websites and user interfaces.',
            ru: 'Изучите разнообразное портфолио fulliam, талантливого веб-разработчика и дизайнера, страстно увлеченного созданием потрясающих веб-сайтов и пользовательских интерфейсов.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'web development, web design, portfolio, fulliam, UI/UX design, responsive websites, front-end development, back-end development, website optimization, SEO, graphic design',
            ru: 'веб-разработка, веб-дизайн, портфолио, fulliam, UI/UX-дизайн, адаптивные веб-сайты, фронт-энд разработка, бэк-энд разработка, оптимизация веб-сайтов, SEO, графический дизайн',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatPage,
    meta: {
      title: {
        en: 'Chat - fulliam',
        ru: 'Чат - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Engage in a conversation with fulliam, a talented web developer and designer, and get answers to your questions about web development, web design, UI/UX design, and more.',
            ru: 'Взаимодействуйте в беседе с fulliam, талантливым веб-разработчиком и дизайнером, и получите ответы на ваши вопросы о веб-разработке, веб-дизайне, UI/UX-дизайне и многом другом.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Chat - fulliam',
            ru: 'Чат - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Engage in a conversation with fulliam, a talented web developer and designer, and get answers to your questions about web development, web design, UI/UX design, and more.',
            ru: 'Взаимодействуйте в беседе с fulliam, талантливым веб-разработчиком и дизайнером, и получите ответы на ваши вопросы о веб-разработке, веб-дизайне, UI/UX-дизайне и многом другом.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'web development, web design, chat, fulliam, UI/UX design, conversation, questions, answers',
            ru: 'веб-разработка, веб-дизайн, чат, fulliam, UI/UX-дизайн, беседа, вопросы, ответы',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/jokes',
    name: 'jokes',
    component: JokesPage,
    meta: {
      title: {
        en: 'Humorist - fulliam',
        ru: 'Шут - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Enjoy a collection of 45,000 hilarious jokes curated just for you. Get ready to laugh out loud!',
            ru: 'Наслаждайтесь коллекцией из 45 000 смешных шуток. Готовьтесь смеяться в голос!',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Humorist - fulliam',
            ru: 'Шут - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Enjoy a collection of 45,000 hilarious jokes curated just for you. Get ready to laugh out loud!',
            ru: 'Наслаждайтесь коллекцией из 45 000 смешных шуток, отобранных специально для вас. Готовьтесь смеяться в голос!',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'jokes, humor, 45,000 jokes, comedy, funny, laugh',
            ru: 'шутки, юмор, 45 000 шуток, комедия, смешно, смех',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/plasta',
    name: 'plasta',
    component: PlastaPage,
    meta: {
      title: {
        en: 'Explore the Planets',
        ru: 'Исследуйте планеты',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Explore information about existing and non-existing planets in our universe.',
            ru: 'Изучите информацию о существующих и несуществующих планетах в нашей вселенной.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Explore the Planets',
            ru: 'Исследуйте планеты',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Explore information about existing and non-existing planets in our universe.',
            ru: 'Изучите информацию о существующих и несуществующих планетах в нашей вселенной.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'planets, exoplanets, solar system, astronomy, space exploration, stars, space',
            ru: 'планеты, экзопланеты, солнечная система, астрономия, исследование космоса, звезды, космос',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage,
    meta: {
      title: {
        en: 'Neon Store - fulliam',
        ru: 'Неоновый магазин - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Discover the vibrant world of neon at fulliam\'s Neon Store. Explore our collection of neon signs, art, and decor to add a glowing touch to any space.',
            ru: 'Откройте для себя яркий мир неона в магазине Neon Store от fulliam. Исследуйте нашу коллекцию неоновых вывесок, произведений и декора, чтобы добавить сияющий штрих в любое пространство.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Neon Store - fulliam',
            ru: 'Неоновый магазин - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Discover the vibrant world of web neon at fulliam\'s Neon Store. Explore our collection of neon art, and decor to add a glowing touch to any web space.',
            ru: 'Откройте для себя яркий мир web неона в магазине Neon Store от fulliam. Исследуйте нашу коллекцию неоновых произведений и декора, чтобы добавить сияющий штрих в любое web пространство.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'Discover the vibrant world of web neon at fulliam\'s Neon Store. Explore our collection of neon art, and decor to add a glowing touch to any web space.',
            ru: 'Откройте для себя яркий мир web неона в магазине Neon Store от fulliam. Исследуйте нашу коллекцию неоновых произведений и декора, чтобы добавить сияющий штрих в любое web пространство.',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/alarm',
    name: 'alarm',
    component: AlarmPage,
    meta: {
      title: {
        en: 'Voice-Controlled Alarm Clock - fulliam',
        ru: 'Голосовой будильник - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Discover the innovative voice-controlled alarm clock designed by fulliam. Start your day with ease and convenience using this cutting-edge technology.',
            ru: 'Откройте для себя инновационный голосовой будильник, разработанный fulliam. Начните свой день легко и удобно, используя эту передовую технологию.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Voice-Controlled Alarm Clock - fulliam',
            ru: 'Голосовой будильник - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Discover the innovative voice-controlled alarm clock designed by fulliam. Start your day with ease and convenience using this cutting-edge technology.',
            ru: 'Откройте для себя инновационный голосовой будильник, разработанный fulliam. Начните свой день легко и удобно, используя эту передовую технологию.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'alarm clock, voice-controlled, innovative technology, fulliam, wake up with ease, smart home devices, voice recognition, convenience, cutting-edge technology',
            ru: 'будильник, голосовое управление, инновационные технологии, fulliam, просыпайтесь легко, умные устройства для дома, распознавание голоса, удобство, передовые технологии',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherPage,
    meta: {
      title: {
        en: 'Weather Information - fulliam',
        ru: 'Информация о погоде - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Get up-to-date weather information for any city with the weather search feature. Stay informed about the current weather conditions and forecasts with fulliam.',
            ru: 'Получайте актуальную информацию о погоде для любого города с функцией поиска погоды. Будьте в курсе текущих погодных условий и прогнозов с fulliam.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Weather Information - fulliam',
            ru: 'Информация о погоде - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Get up-to-date weather information for any city with the weather search feature. Stay informed about the current weather conditions and forecasts with fulliam.',
            ru: 'Получайте актуальную информацию о погоде для любого города с функцией поиска погоды. Будьте в курсе текущих погодных условий и прогнозов с fulliam.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'weather, weather information, weather search, city weather, current weather, weather forecast, fulliam, weather updates, weather conditions',
            ru: 'погода, информация о погоде, поиск погоды, погода в городах, текущая погода, прогноз погоды, fulliam, обновления о погоде, погодные условия',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/roulette',
    name: 'roulette',
    component: RoulettePage,
    meta: {
      title: {
        en: 'Random Number Generator - fulliam',
        ru: 'Генератор случайных чисел - fulliam',
      },
      metaTags: [
        {
          name: 'description',
          content: {
            en: 'Try your luck with the random number generator on fulliam. Spin the roulette and get a unique combination of numbers for various purposes.',
            ru: 'Попробуйте свою удачу с генератором случайных чисел на fulliam. Вращайте рулетку и получайте уникальную комбинацию чисел для различных целей.',
          },
        },
        {
          property: 'og:title',
          content: {
            en: 'Random Number Generator - fulliam',
            ru: 'Генератор случайных чисел - fulliam',
          },
        },
        {
          property: 'og:description',
          content: {
            en: 'Try your luck with the random number generator on fulliam. Spin the roulette and get a unique combination of numbers for various purposes.',
            ru: 'Попробуйте свою удачу с генератором случайных чисел на fulliam. Вращайте рулетку и получайте уникальную комбинацию чисел для различных целей.',
          },
        },
        {
          name: 'keywords',
          content: {
            en: 'random number generator, roulette, luck, random numbers, unique combination, fulliam, number generator, randomizer, random selection',
            ru: 'генератор случайных чисел, рулетка, удача, случайные числа, уникальная комбинация, fulliam, генератор чисел, рандомизатор, случайный выбор',
          },
        },
        {
          name: 'author',
          content: {
            en: 'fulliam',
            ru: 'fulliam',
          },
        },
        {
          name: 'robots',
          content: {
            en: 'index, follow',
            ru: 'index, follow',
          },
        },
        {
          name: 'viewport',
          content: {
            en: 'width=device-width, initial-scale=1.0',
            ru: 'width=device-width, initial-scale=1.0',
          },
        },
      ],
    },
  },
  {
    path: '/tts_stt',
    name: 'tts_stt',
    component: TtsSttPage,
  },
  {
    path: '/wish_list',
    name: 'wish_list',
    component: WishListePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
