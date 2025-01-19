import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import router from './router/router.js';
import locales from './locales/locales.json';
import { createPinia } from 'pinia';


const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'sk',
    messages: locales,
});

const pinia = createPinia();

createApp(App)
    .use(i18n)
    .use(router)
    .use(pinia)
    .mount('#app');
