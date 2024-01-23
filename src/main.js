import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

const emitter = mitt();

/* eslint-disable */
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    next('/');
  } else {
    const currentLanguage = navigator.language || navigator.userLanguage;
    const langParts = currentLanguage.split('-');
    const lang = langParts[0];
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title[lang];
    }
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
    if (nearestWithMeta) {
      nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');
        Object.keys(tagDef).forEach(key => {
          if (typeof tagDef[key][lang] !== 'undefined') {
            tag.setAttribute(key, tagDef[key][lang]);
          }
        });
        tag.setAttribute('data-vue-router-controlled', '');
        return tag;
      })
      .forEach(tag => document.head.appendChild(tag));
    }
    next();
  }
});

/* eslint-enable */

const app = createApp(App);

app.use(router);
app.config.globalProperties.$mitt = emitter;
window.emitter = emitter;
app.mount('#app');
