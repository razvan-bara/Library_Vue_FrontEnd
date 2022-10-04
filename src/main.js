import { createApp } from 'vue';
import './assets/styles/reset.css';
import './assets/styles/style.css';
import App from './App.vue';
import router from './router';

createApp(App)
    .use(router)
    .mount('#app');
