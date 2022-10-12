import { createApp } from 'vue';
import './assets/styles/reset.css';
import './assets/styles/style.css';
import App from './App.vue';

import { createPinia } from 'pinia'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
const pinia = createPinia()

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(pinia)
    .use(router)
    .mount('#app');
